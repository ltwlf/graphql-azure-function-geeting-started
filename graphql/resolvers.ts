import { bookStore, authorStore } from "./store"

export const resolvers = {
    Query: {
        books: async (_, args, ctx, info) => {
            return bookStore.all()
        },
        authors: async (_, args, ctx, info) => {
            return authorStore.all()
        }
    },
    Book: {
        author: async (book, args, ctx, info) => {
            return authorStore.all().find(a => a.id === book.authorId)
        }
    },
    Author: {
        books: async (author, args, ctx, info) => {
            return bookStore.all().filter(b => b.authorId === author.id)
        }
    },
    Mutation: {
        addBook: (_, { title, authorId }) => {
            return bookStore.add({ title, authorId })
        }
    }
}