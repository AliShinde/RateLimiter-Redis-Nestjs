# Rate Limiter Using Redis

Install the required packages from package.json and set up the .env file based on the example env file.

The username and password will be the same as the postgres setup in the docker compose file.

After package installations run the command "docker compose up" to get the redis and postgres Image running

Run command "npm run start:dev" to start the server

Run command "npx prisma studio" to see the db hosted on localhost:5555

## Routes
Get /tasks -> Will fetch all tasks

Post /tasks -> Will create new tasks. Can be accessed via postman or go to Get /create to get a Form to create new tasks

Get /health will return the health check for redis and db
