export function getLongestBookByAuthorName(authors, books, authorName) {
    const author = authors.find(author=>author.name===authorName)
    if (authorName === ""  || author===undefined || books.find(book=>book["author_id"]===author.id)===undefined){
        return null
    } else {
        const filteredBooks = books.filter(book=>book["author_id"]===author.id).sort((book1,book2)=>book1.title.localeCompare(book2.title))
        let longestBook = filteredBooks[0]
        filteredBooks.map(book=>{
            if (book.pages > longestBook.pages){
                longestBook = book
            }

        })
        return longestBook.title
    }
}