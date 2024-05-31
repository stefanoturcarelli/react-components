import Header from "./components/Header";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

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
      img: "https://th.bing.com/th/id/R.6adacd3a7e642691a6bd87118271cd14?rik=XMPOEf3ilMejaQ&pid=ImgRaw&r=0",
      whoSaidIt: "Vito Corleone",
    },
    {
      id: 2,
      quote: "Keep your friends close, but your enemies closer.",
      movie: "The Godfather Part II",
      year: 1974,
      img: "https://i.ytimg.com/vi/ZWyZbkdyhZk/maxresdefault.jpg",
      whoSaidIt: "Michael Corleone",
    },
    {
      id: 3,
      quote: "It's not personal, Sonny. It's strictly business.",
      movie: "The Godfather",
      year: 1972,
      img: "https://i.ytimg.com/vi/by5YzWJ9W4U/maxresdefault.jpg",
      whoSaidIt: "Michael Corleone",
    },
    {
      id: 4,
      quote: "I know it was you, Fredo. You broke my heart.",
      movie: "The Godfather Part II",
      year: 1974,
      img: "https://y.yarn.co/0df14e10-5e1a-43aa-937d-a0563e729199_thumb.jpg",
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
