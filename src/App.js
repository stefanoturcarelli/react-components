import Header from "./components/Header.js";
import Banner from "./components/Banner.js";
import Gallery from "./components/Gallery.js";
import Footer from "./components/Footer.js";

function App() {
  const title = "TheQuotefather";
  const home = "Home";
  const about = "About";
  const contact = "Contact";

  const line1 = "Take the gun,";
  const line2 = "leave the quotes.";

  // Array of quotes
  const quotes = [
    {
      id: 1,
      quote: "I'm gonna make him an offer he can't refuse.",
      movie: "The Godfather",
      year: 1972,
      img: "https://cdn.jsdelivr.net/gh/stefanoturcarelli/cdn/the-godfather/1.jpeg",
      whoSaidIt: "Vito Corleone",
    },
    {
      id: 2,
      quote: "Keep your friends close, but your enemies closer.",
      movie: "The Godfather Part II",
      year: 1974,
      img: "https://cdn.jsdelivr.net/gh/stefanoturcarelli/cdn/the-godfather/2.jpg",
      whoSaidIt: "Michael Corleone",
    },
    {
      id: 3,
      quote: "It's not personal, Sonny. It's strictly business.",
      movie: "The Godfather",
      year: 1972,
      img: "https://cdn.jsdelivr.net/gh/stefanoturcarelli/cdn/the-godfather/3.jpg",
      whoSaidIt: "Michael Corleone",
    },
    {
      id: 4,
      quote: "I know it was you, Fredo. You broke my heart.",
      movie: "The Godfather Part II",
      year: 1974,
      img: "https://cdn.jsdelivr.net/gh/stefanoturcarelli/cdn/the-godfather/4.jpg",
      whoSaidIt: "Michael Corleone",
    },
  ];

  return (
    <>
      <Header title={title} home={home} about={about} contact={contact} />
      <Banner line1={line1} line2={line2} />
      <Gallery quotes={quotes} />
      <Footer />
    </>
  );
}

export default App;
