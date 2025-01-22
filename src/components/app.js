import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar.js";
import Sets from "../components/sets.js";
import Product from "../components/product.js";
import Footer from "../components/footer.js";

function App() {
    return (
        <Router>
          <Navbar />
            <Routes>
                <Route path="/" element={<Sets />} />
                <Route path="/sets" element={<Sets />} />
                <Route path="/product" element={<Product />} />
            </Routes>
          <Footer />  
        </Router>
    );
}

export default App;
