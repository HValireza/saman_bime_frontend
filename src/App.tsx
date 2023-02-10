import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Accordion from "./components/Accordion/Accordion";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Manager from "./pages/Manager/Manager";
import News from "./pages/News/News";
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

          {/* newsPage */}
          {/* all the pagination and list of all kind of posts */}
          <Route path="news" element={<News />} />

          {/* Post Page */}
          {/* it goes for news detail or any kind of post */}
          <Route path="post" element={<Post />} />

          {/* manager page */}
          {/* goes for both manager and board member */}
          <Route path="manager" element={<Manager />} />

          {/* reports page */}
          {/* reports and handbooks goes here */}
          <Route path="reports" element={<Accordion />} />

          {/* 404 */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
