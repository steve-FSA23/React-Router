import Footer from "./components/Footer";
import MainContainer from "./components/MainContainer";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div id="container">
            <h1 className="title">Hello React Router!</h1>
            <Navbar />
            <MainContainer />
            <Footer />
        </div>
    );
}

export default App;
