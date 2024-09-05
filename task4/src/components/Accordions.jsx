export default function Accordions(book){
    return (
        <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        {book.title}
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <ul>
            <li>{book.pages}</li>
            <li>{book.author}</li>
            <li>{book.releaseYear}</li>
        </ul>
      </div>
    </div>
  </div>
    )
}