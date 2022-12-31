import { BrowserRouter, Route, Routes } from "react-router-dom";
import Board from "./components/templates/about-us/board/board-members";
import Managers from "./components/templates/about-us/board/managers";
import { NewsEnum } from "./global/news.enum";
import About from "./pages/about/about";
import Home from "./pages/home/home";
import News from "./pages/news/News";
import PostPage from "./pages/Post/Post";
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
            <Route path="managers" element={<Managers />} />
            <Route path="board-member" element={<Board />} />
          </Route>
          <Route path="news">
            <Route path="company" element={<News state={NewsEnum.COMPANY} />} />
            <Route
              path="insurance"
              element={<News state={NewsEnum.INSURANCE} />}
            />
            <Route
              path="shareholder"
              element={<News state={NewsEnum.SHAREHOLDER} />}
            />
            <Route path="article" element={<News state={NewsEnum.ARTICLE} />} />
          </Route>
          <Route path="post/:id" element={<PostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
