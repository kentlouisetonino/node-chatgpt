### DESCRIPTION
#

![Screenshot from 2024-03-11 10-41-43](https://github.com/kentlouisetonino/node-chatgpt/assets/69438999/8f6be1b8-1fd6-4d5d-8fae-8523d50b9286)

<br />

https://github.com/kentlouisetonino/node-chatgpt/assets/69438999/89e11a26-b3f2-435a-90be-32ef2df1b824

<br />

> - A backend service that integrates Node.js with ChatGPT API.

<br />
<br />



### LOCAL DEVELOPMENT
#
> - Create `.env` file and insert the key value pair below.

```bash
PORT=11000
```

> - Execute the scripts.
```bash
# Highly suggest to use Node.js version >= 18.
yarn install
yarn start

# To run the test.
yarn test:all
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
