import { gql } from "apollo-server-azure-functions";

export const typeDefs = gql`
    type Query {
        books: [Book!]!
        authors: [Author!]!
    }

    type Book {
        title: String!
        author: Author!
    }

    type Author {
        id: Int!
        name: String!
        books: [Book!]!
    }

    type Mutation {
        addBook(title: String! authorId: Int!): Book
    }

`