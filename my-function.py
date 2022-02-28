import json

def lambda_handler(event, context):
    # TODO implement
    keyword = event['queryStringParameters']['keyword']
    message = 'Geetha Ghulekar says ' + keyword
    return {
        'statusCode': 200, 
        'body': message
    }
