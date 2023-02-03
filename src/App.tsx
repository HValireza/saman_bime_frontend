import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import NoPage from "./pages/NoPage/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout */}
        <Route path="/" element={<Layout />}>
          {/* Home Page */}
          <Route index element={<Home />} />

          {/* 404 */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
