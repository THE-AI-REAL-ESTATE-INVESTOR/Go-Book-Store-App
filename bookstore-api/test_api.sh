#!/bin/bash

# Add books
curl -X POST -H "Content-Type: application/json" -d '{"id":"1","title":"1984","author":"George Orwell"}' http://localhost:8080/books
curl -X POST -H "Content-Type: application/json" -d '{"id":"2","title":"To Kill a Mockingbird","author":"Harper Lee"}' http://localhost:8080/books

# Get all books
curl -X GET http://localhost:8080/books
