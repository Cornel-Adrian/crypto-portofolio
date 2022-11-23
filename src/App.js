import Home from "./pages/Home";
import CryptoView from './pages/CryptoView';
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/tiker/:id" element={<CryptoView />}></Route>
      </Routes>
    </>
  );
}

export default App;
