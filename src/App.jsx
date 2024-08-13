import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home/> */}
      <RegisterPage />
      {/* <LoginPage /> */}
      <Footer />
    </>
  );
}

export default App;
