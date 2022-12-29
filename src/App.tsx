import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about/about";
import Home from "./pages/home/home";
import Layout from "./pages/templates/layout";
import "./styles/App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about">
            <Route path="history" element={<About state={"history"} />} />
            <Route path="goals" element={<About state={"goals"} />} />
            <Route path="avail" element={<About state={"avail"} />} />
            <Route path="worldview" element={<About state={"worldview"} />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
