import { resolve } from "path";
import { GraphQLServer } from "graphql-yoga";

const typeDefs = resolve(__dirname, "schema.graphql");

const USERS = [
  { id: 1, name: "Tony Stark", email: "tony@avergers.com" },
  { id: 2, name: "Spideman", email: "spider@avengers.com" }
];

const resolvers = {
  User: {
    name: parent => {
      console.log("Parent: ", parent);
      return "User: " + parent.name;
    }
  },
  Query: {
    users: () => USERS
  },
  Mutation: {
    createUser: (parent, args, ctx, info) => {
      console.log("args: ", args);
      const { data } = args;
      const user = {
        ...data,
        id: USERS.length + 1
      };
      USERS.push(user);
      return user;
    }
  }
};

const server = new GraphQLServer({
  resolvers,
  typeDefs
});

export default server;
