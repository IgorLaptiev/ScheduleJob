"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const dotenv_1 = __importDefault(require("dotenv"));
const apollo_server_1 = require("apollo-server");
const type_graphql_1 = require("type-graphql");
const mongodb_1 = require("mongodb");
const path = __importStar(require("path"));
const scheduleResolvers_1 = require("./resolvers/scheduleResolvers");
const typegoose_middleware_1 = require("./typegoose-middleware");
const object_id_scalar_1 = require("./object-id.scalar");
const db = __importStar(require("./db"));
async function bootstrap() {
    dotenv_1.default.config();
    // build TypeGraphQL executable schema
    const schema = await type_graphql_1.buildSchema({
        resolvers: [scheduleResolvers_1.DayResolver],
        //container: Container,
        // automatically create `schema.gql` file with schema definition in current folder
        emitSchemaFile: path.resolve(__dirname, "schema.gql"),
        globalMiddlewares: [typegoose_middleware_1.TypegooseMiddleware],
        scalarsMap: [{ type: mongodb_1.ObjectId, scalar: object_id_scalar_1.ObjectIdScalar }],
        validate: false,
    });
    // Create GraphQL server
    const server = new apollo_server_1.ApolloServer({
        schema,
    });
    const DB_HOST = process.env.DB_HOST;
    db.run(DB_HOST);
    // Start the server
    const { url } = await server.listen(4000);
    console.log(`Server is running, GraphQL Playground available at ${url}`);
}
bootstrap();
//# sourceMappingURL=app.js.map