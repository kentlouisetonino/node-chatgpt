### DESCRIPTION
#
> - A backend service that integrates Node.js with ChatGPT API.

<br />
<br />



### LOCAL DEVELOPMENT
#
> - Create `.env` file and insert the key value pair below.

```bash
PORT=11000
```

> - Use postman to send post request.

```plaintext
[REQUEST]
    Method: POST
    URL: http://localhost:11000/api/openai/chat
    Raw-JSON:
        "apiKey": "{{API_KEY}}",
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "user", "content": "Say this is a test!"}],
        "temperature": 0.7
```

> - Further documentation can be found in OpenAI official [docs](https://platform.openai.com/docs/api-reference/introduction).
