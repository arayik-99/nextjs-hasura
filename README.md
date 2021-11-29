## Getting Started

First run the Hasura Docker Container:

`docker-compose up -d`

After installing, application is available at `http://localhost:8080/console/data/manage/connect`.

Setup the DB:

`Database Display Name`: hasuradb
`Database URL`: postgres://postgres:postgrespassword@postgres:5432/postgres
After steps above press Connect Database

#### To Create Table

Locate to `public` schema and press Create Table

Create the table:
name: `long_tails`

`columns`:
`tail` - `text, unique, nullable`
`json_id` - `integer, primary key, unique`

`primary key`: `json_id` 

## Setting Up NextJS

First, run `yarn` to install dependencies. After installing them run
`cp .env.example .env`

And set HASURA_API_URL to `http://localhost:8080/v1/graphql`

Run the application: `yarn dev`
