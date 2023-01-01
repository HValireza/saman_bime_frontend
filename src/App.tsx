import { BrowserRouter, Route, Routes } from "react-router-dom";
import Board from "./components/templates/about-us/board/board-members";
import Managers from "./components/templates/about-us/board/managers";
import OrganizationChart from "./components/templates/about-us/OrganizationChart/OrganizationChart";
import { NewsEnum } from "./global/news.enum";
import About from "./pages/about/about";
import Home from "./pages/home/home";
import News from "./pages/news/News";
import PostPage from "./pages/Post/Post";
import Service from "./pages/services/service";
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

            <Route path="structure" element={<About state={"structure"} />} />

            <Route path="managers" element={<Managers />} />

            <Route path="board-member" element={<Board />} />

            <Route path="org-chart" element={<OrganizationChart />} />
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
            <Route
              path="invitations"
              element={<News state={NewsEnum.ARTICLE} />}
            />
            <Route
              path="learnings"
              element={<News state={NewsEnum.LEARNING} />}
            />
          </Route>

          <Route path="services">
            <Route path="1" element={<Service index={0} />} />
            <Route path="2" element={<Service index={1} />} />
            <Route path="3" element={<Service index={2} />} />
            <Route path="4" element={<Service index={3} />} />
            <Route path="5" element={<Service index={4} />} />
            <Route path="6" element={<Service index={5} />} />
            <Route path="7" element={<Service index={6} />} />
          </Route>

          <Route path="post/:id" element={<PostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
