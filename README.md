# Student Management REST API

Lab Assignment 2 — Web Dev III (Node.js & Express Backend), Unit 2

A REST API built with Express.js to manage student records using in-memory
array/JSON data (no database, no Mongoose).

## Project Structure

```
student-management-api/
├── app.js
├── package.json
├── routes/
│   └── studentRoutes.js
├── middleware/
│   └── logger.js
└── data/
    └── students.js
```

## Setup

```bash
npm install
npm start
```

Server runs at `http://localhost:3000`.

## API Endpoints

| Method | Endpoint          | Description              |
|--------|-------------------|---------------------------|
| GET    | /students         | Get all students          |
| GET    | /students/:id     | Get a single student      |
| POST   | /students         | Create a new student      |
| PUT    | /students/:id     | Update an existing student|
| DELETE | /students/:id     | Delete a student          |

### Sample request bodies (POST/PUT)

```json
{
  "name": "Sneha",
  "course": "BCA"
}
```

## Status Codes Used

- `200` – Success (GET, PUT, DELETE)
- `201` – Created (POST)
- `400` – Bad Request (missing/invalid fields, invalid ID)
- `404` – Not Found (student or route doesn't exist)
- `500` – Internal Server Error (unexpected errors)

## Testing with Postman

1. Import/create requests for each endpoint above using the base URL
   `http://localhost:3000`.
2. For POST and PUT, set the body type to `raw` → `JSON` and include
   `name` and/or `course`.
3. Check the console — the custom logger middleware prints the method,
   URL, and timestamp for every request.

## Notes

- Data is stored in-memory (`data/students.js`) and resets when the server restarts.
- Routing is modular via `express.Router()` in `routes/studentRoutes.js`.
- Logging is handled by custom middleware in `middleware/logger.js`.
