import json
import os
from typing import Dict, Any, List
from pydantic import BaseModel, Field

class Message(BaseModel):
    role: str = Field(..., pattern='^(user|assistant|system)$')
    content: str = Field(..., min_length=1)

class ChatRequest(BaseModel):
    messages: List[Message] = Field(..., min_items=1)
    model: str = Field(default='gpt-3.5-turbo')
    temperature: float = Field(default=0.7, ge=0, le=2)

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: AI chat endpoint with OpenAI integration
    Args: event with httpMethod, body containing messages array
    Returns: AI response with generated message
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    api_key = os.environ.get('OPENAI_API_KEY')
    if not api_key:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'OPENAI_API_KEY not configured'})
        }
    
    body_data = json.loads(event.get('body', '{}'))
    chat_request = ChatRequest(**body_data)
    
    import urllib.request
    import urllib.error
    
    openai_messages = [{'role': msg.role, 'content': msg.content} for msg in chat_request.messages]
    
    request_payload = {
        'model': chat_request.model,
        'messages': openai_messages,
        'temperature': chat_request.temperature
    }
    
    req = urllib.request.Request(
        'https://api.openai.com/v1/chat/completions',
        data=json.dumps(request_payload).encode('utf-8'),
        headers={
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {api_key}'
        }
    )
    
    response = urllib.request.urlopen(req)
    response_data = json.loads(response.read().decode('utf-8'))
    
    assistant_message = response_data['choices'][0]['message']['content']
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': False,
        'body': json.dumps({
            'message': assistant_message,
            'model': chat_request.model
        })
    }
