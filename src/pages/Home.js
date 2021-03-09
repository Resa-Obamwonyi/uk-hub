import "../App.css";
import BluePartition from "../components/BluePartition";
import WhitePartition from "../components/WhitePartition";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="Home">
      <WhitePartition />
      <BluePartition />
      <div className="home-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
