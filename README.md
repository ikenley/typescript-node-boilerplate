# typescript-node-boilerplate

Boilerplate application for creating a REST-ful API using Typscript + Node

## Getting Started

```
TODO
```

---

## Features

- [Typescript](https://www.typescriptlang.org/)
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [jest](https://jestjs.io/) and [supertest](https://github.com/visionmedia/supertest) for testing
- Logging: [winston](https://github.com/winstonjs/winston)
- TODO exception handling
- Environment configuration
  - `dotenv` (see [./src/config/index.ts](./src/config/index.ts))
  - consider https://www.npmjs.com/package/rc
- [typeorm](https://typeorm.io/#/) for data access
- [typedi](https://github.com/typestack/typedi) for dependency injection
- [linting](eslintrc.js)
- TODO deployment / CI/CD
- [routing](src/routes/index.ts)
- [Terraform](https://www.terraform.io/): See `./terraform`
- [Flyway](https://flywaydb.org/) SQL migrations. See `./sql/flyway`

---

## Project Structure

TODO

---

---

## Terraform

```
cd terraform/dev
terraform init
terraform apply
```

---

## Flyway Migrations

```
docker run --network="host" --rm -v /$(pwd)/sql/flyway/conf:/flyway/conf -v /$(pwd)/sql/flyway/sql:/flyway/sql flyway/flyway migrate

docker run --network="host" --rm --env-file .env -v C:\Users\ikenl\git\typescript-node-boilerplate\sql\flyway\conf:/flyway/conf -v C:\Users\ikenl\git\typescript-node-boilerplate\sql\flyway\sql:/flyway/sql flyway/flyway migrate
```

## Further Reading

- https://github.com/metachris/typescript-boilerplate
- https://github.com/GeekyAnts/express-typescript
- https://github.com/w3tecch/express-typescript-boilerplate
- https://developer.okta.com/blog/2018/11/15/node-express-typescript
- https://github.com/goldbergyoni/nodebestpractices
- https://github.com/HappyZombies/express-backend-starter
- https://softwareontheroad.com/ideal-nodejs-project-structure/
- https://github.com/santiq/bulletproof-nodejs
