# RateLimiter-Redis-Nestjs

A **NestJS backend module** that implements API rate limiting using Redis and provides a `/health` endpoint to check uptime. This project demonstrates setting up a distributed rate limiter using Redis and includes simple task routes backed by a PostgreSQL database.

## Features

- Distributed rate limiting with Redis for high scalability.
- `/health` endpoint for live system checks (Redis and PostgreSQL).
- RESTful API with endpoints for task management.
- Docker Compose setup for fast launch of required services.
- Integration with Prisma ORM for PostgreSQL database access.

## API Endpoints

| Method | Route        | Description                                  |
|--------|-------------|----------------------------------------------|
| GET    | /tasks      | Fetch all tasks                              |
| POST   | /tasks      | Create new tasks (via Postman or `/create`)  |
| GET    | /create     | Render HTML form to create new tasks         |
| GET    | /health     | Health check for Redis and Postgres DB       |

- Rate limiting is automatically enforced via Redis for all routes.

## Installation

1. **Clone the repository:**
   
git clone https://github.com/AliShinde/RateLimiter-Redis-Nestjs.git

cd RateLimiter-Redis-Nestjs

3. **Install dependencies:**
   
npm install


## Configuration

Copy the example `.env` file and fill in any necessary secrets (user/password should match your postgres setup in `docker-compose.yml`):

cp .env.example .env


- Configure your PostgreSQL and Redis settings using the environment variables as shown in the `.env.example` file.

## Running the Application

1. **Start Redis and Postgres with Docker Compose:**
docker compose up


2. **Start the server in development mode:**
npm run start:dev


3. **Launch Prisma Studio to view the database:**
npx prisma studio

Access it at [http://localhost:5555](http://localhost:5555)


## Usage Notes

- Use Postman or the provided HTML form (`/create`) to add new tasks.
- Uptime and health of both Redis and DB can be verified via the `/health` endpoint.

## Dependencies

- [NestJS](https://nestjs.com/)
- [Redis](https://redis.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma ORM](https://www.prisma.io/)

## License

MIT

## Author

Ali Shinde

---

**Getting Started Has Never Been Easier:**  
With Docker Compose, all dependencies (Postgres and Redis) are launched with a single command, streamlining both local development and testing.

