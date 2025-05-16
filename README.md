<!-- INSTRUCT TO INSTALL THE BACKEND -->

# Flin Chatbot App

## Installation

### Backend

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

### Frontend

1. Navigate to the frontend folder
2. Run `npm install`
3. Run `npm run dev` to start the frontend server
4. Set your backend URL in the .env file
5. Open http://localhost:5173 to view the frontend

You can see the deployed version of the chatbot here:
https://flin-test-1.pages.dev/
