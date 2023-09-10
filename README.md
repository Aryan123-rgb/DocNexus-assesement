# DocNexus Backend Service

DocNexus is a backend service that allows users to register and create blogs. It provides a set of RESTful APIs for user management and blog creation.


## Installation

```bash
git clone https://github.com/yourusername/DocNexus.git
cd DocNexus
npm install
node index.js (make sure to add the MONGO_DB_URL and PORT variables in .env)
```
# API Endpoints

## User Endpoints

- `POST /user/signup`: Register a new user.
- `POST /user/login`: Log in an existing user.
- `POST /user/logout`: Log out the current user.
- `GET /user/`: Get information about all users.

## Blog Endpoints

- `POST /blog/create`: Create a new blog (requires authentication).
- `GET /blog/`: Get a list of all blogs.
- `POST /blog/update/:id`: Update an existing blog (requires authentication).
- `POST /blog/delete/:id`: Delete a blog (requires authentication).
