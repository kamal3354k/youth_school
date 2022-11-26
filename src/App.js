import { ToastContainer } from "react-toastify";
import "./App.css";
import RegisterMainPage from "./pages/RegisterPage/RegisterMainPage"
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return <div className="App"><RegisterMainPage/><ToastContainer/></div>;
}

export default App;
