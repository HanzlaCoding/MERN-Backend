# MERN-Backend

## 🚀 Project Overview

This repository contains a series of Node.js + Express backend projects arranged by class-level (Class-00 through Class-05). Each class folder represents an incremental learning milestone from simple express server, to routes/controllers, to DB integration with MongoDB and Mongoose.

- `Class-00` to `Class-02`: basic Express servers and routes
- `Class-03` and `Class-04`: modularized routes/controllers and MongoDB patterns
- `Class-05`: full CRUD student management with validation, environment config, and MongoDB connection

## 📁 Folder Structure

```
Class-00/            # basic server
Class-01/            # simple route from text file
Class-02/            # same-parts exercise
Class-03/            # route + controller split
Class-04/            # route/controller/model + db config
Class-05/            # complete CRUD with student schema + validation
README.md            # repo documentation
```

## 🔧 Class-05 (Primary Implementation)

This class demonstrates an end-to-end backend architecture:

- `src/app.js`: express app config + route mount
- `src/config/config.js`: `.env` variable validation
- `src/config/db.js`: mongoose connection
- `src/model/student.model.js`: Student schema with required rules
- `src/controllers/student.conntroller.js`: create/get/update handlers
- `src/routes/student.route.js`: REST routes
- `server.js`: startup and database connect

## ✅ Features

- Students CRUD (Create, Read, Update)
- Validation rules for required fields and email
- `status` enum (`active`, `graduated`, `on-leave`, `inactive`)
- Mongoose connection and friendly console logs
- JSON body parsing

## ⚙️ Prerequisites

- Node.js 16+ and npm
- MongoDB instance (local or Atlas)
- Recommended: Postman / Insomnia for API testing

## 📦 Install & Run (Class-05)

1. Open terminal and change to class directory

```bash
cd Class-05
npm install
```

2. Create `.env` in `Class-05`:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017
```

3. Start server

```bash
npm start
```

4. Verify: http://localhost:5000

## 🌐 API Endpoints

Base: `/api/student`

- `POST /api/student/create-record`
  - Body: `{ name, age, major, gpa, email, status }`
  - Response: created student object

- `GET /api/student/get-record`
  - Response: all student objects

- `PUT /api/student/update-record/:id`
  - Body: fields to update (any subset)
  - Response: updated student object

## 🧩 Example cURL

Create record:

```bash
curl -X POST http://localhost:5000/api/student/create-record \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice","age":20,"major":"CS","gpa":3.9,"email":"alice@example.com"}'
```

Get records:

```bash
curl http://localhost:5000/api/student/get-record
```

Update record:

```bash
curl -X PUT http://localhost:5000/api/student/update-record/<ID> \
  -H "Content-Type: application/json" \
  -d '{"major":"Data Science","status":"graduated"}'
```

## 🛠️ Extending this repo

- Add `DELETE /delete-record/:id`
- Add request validation middleware (e.g., `express-validator`)
- Add paging/filtering for `GET /get-record`
- Add centralized error handling middleware
- Add user auth / JWT

## 📚 Notes

- The root-level `README.md` is now doc for the full repo.
- For class-specific behavior, inspect each folder’s `package.json` and `server.js`.

---

Happy coding!
