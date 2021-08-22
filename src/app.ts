import "reflect-metadata";
import dotenv from 'dotenv'
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { ObjectId } from "mongodb";
import * as path from "path";
import { DayResolver } from './resolvers/scheduleResolvers';
import { TypegooseMiddleware } from "./typegoose-middleware";
import { ObjectIdScalar } from "./object-id.scalar";
import * as db from './db';

async function bootstrap() {
    dotenv.config();
    // build TypeGraphQL executable schema
    const schema = await buildSchema({
      resolvers: [DayResolver],
      //container: Container,
      // automatically create `schema.gql` file with schema definition in current folder
      emitSchemaFile: path.resolve(__dirname, "schema.gql"),
      globalMiddlewares: [TypegooseMiddleware],
      scalarsMap: [{ type: ObjectId, scalar: ObjectIdScalar }],
      validate: false,
    });
  
    // Create GraphQL server
    const server = new ApolloServer({
      schema,
      // enable GraphQL Playground
    });

    const DB_HOST = process.env.DB_HOST;

    db.run(DB_HOST);
  
    // Start the server
    const { url } = await server.listen(4000);
    console.log(`Server is running, GraphQL Playground available at ${url}`);
  }
  
  bootstrap();