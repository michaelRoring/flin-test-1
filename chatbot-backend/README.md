# flin-test-1

## Getting started

1. Clone the repo
2. Install dependencies

```bash
npm install
```

3. Start the server

```bash
npm run start
```

4. Go to http://localhost:${your_port_here}

5. You can use my deployed backend at https://sole-ardella-michaelroring-88311e5d.koyeb.app/

## End points

### GET /ping

Response:

```json
pong

```

### POST /api/chat

Request body:

```json
{
  "message": "Hello, how are you?"
}
```

Response:

```json
{
  "reply": "Hello there! I'm FLIN's virtual assistant. How can I help you today?"
}
```
