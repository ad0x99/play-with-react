# Ticket Manager

- Ticket Manager App was built with [React](https://react.dev/) (Frontend), [ExpressTS](https://expresso-ts.com/) (Backend) and [MongoDB](https://www.mongodb.com/) (Database)

# Folder Structure

- [client](./client/): contains all of the Frontend (React) code base
- [server](./server/): contains all of the Backend (ExpressoTS & MongoDB) code base

# How to run the application

## Run Manually

1. Install all dependencies

```bash
yarn client:install
yarn server:install
```

2. Create your environment file in the server folder. Please follow the [.env.example](./server/.env.example) file

3. Setup MongoDB Atlas

- Create new cluster and get enough information for your environment file

4. Start app

```bash
# For start all client and server
yarn start

# If you want to run it separately
# Start client
yarn client

# Start server
yarn server
```

## Docker

1. Follow from step 1 to 3 as running manually and then run the following command to execute `docker-compose` file

```bash
docker-compose up
```
