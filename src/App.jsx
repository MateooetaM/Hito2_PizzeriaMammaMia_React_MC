import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Cart />
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      <Footer />
    </>
  );
}
// d-flex flex-wrap gap-3 justify-content-center
export default App;
