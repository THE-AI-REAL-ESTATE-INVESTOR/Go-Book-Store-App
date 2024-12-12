A simple bookstore application built with a **Go** backend (REST API) and a **Next.js** frontend. This app demonstrates a modular and structured approach to building modern web applications, complete with a CI/CD plan for streamlined development and deployment.

## Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Backend Development](#backend-development)
  - [Endpoints](#endpoints)
- [Frontend Development](#frontend-development)
  - [Fetching and Displaying Books](#fetching-and-displaying-books)
- [Future Development Plan](#future-development-plan)
- [Deployment Instructions](#deployment-instructions)
- [CI/CD Workflow](#ci-cd-workflow)
- [Project Board Flow](#project-board-flow)

---

## ✅ Introduction

The **Go-Book-Store-App** is a full-stack application that allows users to interact with a list of books. It demonstrates:
- **REST API development** using Go with the `gorilla/mux` router.
- **Dynamic Frontend** built with Next.js (15.1.0) using the App Router.
- Integration between the frontend and backend using `fetch` for API calls.

This project is perfect for beginner-to-intermediate developers looking to understand full-stack development.

---

## ✅ Project Structure

/bookstore-api ├── handlers/ # Go handlers for API routes │ └── books.go # Handlers for book operations ├── main.go # Entry point for the Go backend ├── go.mod # Go module file └── go.sum # Go dependencies file

/bookstore-frontend ├── app/ │ ├── bookstore.tsx # Component to fetch and display books │ ├── page.tsx # Homepage │ ├── layout.tsx # Root layout ├── .env.local # Environment variables ├── package.json # Node dependencies ├── tailwind.config.ts # Tailwind CSS configuration └── next.config.ts # Next.js configuration

markdown
Copy code

---

## ✅ Features

### Backend
- **REST API Endpoints**:
  - `GET /books`: Fetch all books.
  - `GET /books/{id}`: Fetch a specific book by ID.
  - `POST /books`: Add a new book.
  - `PUT /books/{id}`: Update a book by ID.
  - `DELETE /books/{id}`: Delete a book by ID.
- Mock database with predefined book data.
- **CORS support** for seamless frontend-backend integration.

### Frontend
- **Dynamic Fetching** of book data using `fetch` in React (`useEffect`).
- Styled with **Tailwind CSS**.
- Routes built using the Next.js **App Router**.

---

## ✅ Technologies Used

- **Go**: Backend API development.
- **gorilla/mux**: Routing for the Go server.
- **Next.js**: Frontend development with React and the App Router.
- **Tailwind CSS**: Styling.
- **Docker**: For containerizing the application (planned for future).

---

## ✅ Installation

### Backend
1. Install Go: https://golang.org/dl/
2. Clone the repository and navigate to `/bookstore-api`.
3. Run the backend server:
   ```bash
   go run main.go
Frontend
Install Node.js: https://nodejs.org/
Navigate to /bookstore-frontend.
Install dependencies:
bash
Copy code
npm install
Run the development server:
bash
Copy code
npm run dev
✅ Backend Development
Endpoints
HTTP Method	Endpoint	Description
GET	/books	Fetch all books.
GET	/books/{id}	Fetch a book by ID.
POST	/books	Add a new book.
PUT	/books/{id}	Update an existing book.
DELETE	/books/{id}	Delete a book by ID.
Each endpoint is handled in the handlers/books.go file.

✅ Frontend Development
Fetching and Displaying Books
The Bookstore component in bookstore-frontend/app/bookstore.tsx fetches book data from the backend API. See code in /bookstore-frontend/app/bookstore.tsx.

🚀 Future Development Plan
Containerization: Use Docker to containerize the frontend and backend.
Database Integration: Replace the mock database with MongoDB.
Advanced Features:
User authentication.
Search and filtering for books.
Deployment: Deploy the app using NGINX and AWS/Netlify.
🚀 Deployment Instructions (Planned)
Configure NGINX as a reverse proxy for both frontend and backend.
Set up the app on a live server using Docker containers.
🚀 CI/CD Workflow
GitHub Actions Workflow
We will create a CI/CD pipeline using GitHub Actions:

Backend Testing: Run unit tests for the Go backend.
Frontend Testing: Run linting and unit tests for the frontend.
Deployment: Automatically build and deploy Docker containers.
🚀 Project Board Flow
Use the GitHub project board to manage tasks:

Backlog: For new features and ideas.
Ready: Tasks ready to be worked on.
In Progress: Actively developed tasks.
In Review: Tasks under code review.
Done: Completed tasks.