function Gallery(props) {
  return (
    <>
      <section>
        <div className="container">
          <h2>Quotes</h2>
          <div className="gallery flex gap-15">
            {props.quotes.map((quote) => (
              <div key={quote.id} className="card">
                <img src={quote.img} alt={quote.movie} />
                <div className="card-text">
                  <p className="quote">{quote.quote}</p>
                  <p className="who-said-it">— {quote.whoSaidIt}</p>
                  <p className="flex space-between">
                    <span className="movie">{quote.movie}</span>
                    <span className="year">{quote.year}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
