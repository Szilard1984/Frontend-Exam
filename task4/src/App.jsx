import { useEffect, useState } from "react"

function fetchBooks(){
  return fetch("/api/books").then(response=>{
    if(response.ok){
      return response.json()
    } else {
      new Error("error during fetch")
    }
  })
}



export default function App() {
  const [books, setBooks] = useState(null)
  const [filteredBoooks, setFilteredBooks] = useState(null)

  useEffect (()=>{
    fetchBooks().then(data=>{
      setBooks(data)
    })
  },[])
  
  
  
  return <h1>It Works! ⚙️</h1>
}


