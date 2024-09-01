import Destinations from "./components/destinations/Destinations";
import Navbar from "./components/navbar/Navbar";
import Backdrop from "./components/backdrop/Backdrop";
import Search from "./components/search/Search";
import Selects from "./components/selects/Selects";
// import Footer from "./components/footer/Footer";

function App() {
  return (
    <div >
      <Navbar />
      <Backdrop />
      <Destinations />
      <Search />
      <Selects />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
