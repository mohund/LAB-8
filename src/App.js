import Header from "./components/Header";
import UURLShrinking from "./components/URLShrinking";
import './App.css';
import Footer from "./components/Footer";
function App() {
  return (
    <div className="container">
      <Header />
      <UURLShrinking />
      <Footer year={new Date().getFullYear()} />
    </div>

  );
}

export default App;
