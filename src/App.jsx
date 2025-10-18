import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import SmoothScroll from "./SmoothScroll";

function App() {
    return (
        <SmoothScroll>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </SmoothScroll>
    );
}

export default App;
