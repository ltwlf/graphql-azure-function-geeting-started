export type Author = {
    id: number
    name: string
}

export type Book = {
    title: string
    authorId: number
}

export const bookStore: { all: () => Book[], add: (book: Book) => Book } = {
    all: () => books,
    add: (book: Book) => {
        books.push(book)
        return book
    }
}

const books = [
    {
        title: 'Where the Crawdads Sing',
        authorId: 1
    },
    {
        title: 'Untamed',
        authorId: 2
    },
    {
        title: 'A Very Stable Genius: Donald J. Trump\'s Testing of America',
        authorId: 3
    },
    {
        title: 'Carry On, Warrior: Thoughts on Life Unarmed',
        authorId: 2
    }
]

export const authorStore: { all: () => Author[] } = {
    all: () => authors
}

const authors = [
    {
        id: 1,
        name: 'Delia Owens'
    },
    {
        id: 2,
        name: 'Glennon Doyle'
    },
    {
        id: 3,
        name: 'Philip Rucker'
    }
]