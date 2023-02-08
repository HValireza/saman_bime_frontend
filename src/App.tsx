import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import NoPage from "./pages/NoPage/NoPage";
import Post from "./pages/Post/Post";

// todo make routes dynamic
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout */}
        <Route path="/" element={<Layout />}>
          {/* Home Page */}
          <Route index element={<Home />} />

          {/* Post Page */}
          {/* it goes for news detail or any kind of post */}
          <Route path="post" element={<Post />} />

          {/* 404 */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
