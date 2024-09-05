import Accordions from "./Accordions"

export default function List({books}) {
 return (
    <div className="booklist">
        {books.map(book=>{
            return (
                <Accordions key={book.name} book={book}/>
            )
        })}
    </div>
 )
    
} 