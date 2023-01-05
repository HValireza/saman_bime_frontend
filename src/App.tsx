import { BrowserRouter, Route, Routes } from "react-router-dom";
import Board from "./components/templates/about-us/board/board-members";
import Managers from "./components/templates/about-us/board/managers";
import Profile from "./components/templates/about-us/board/profile";
import OrganizationChart from "./components/templates/about-us/OrganizationChart/OrganizationChart";
import { NewsEnum } from "./global/news.enum";
import About from "./pages/about/about";
import Home from "./pages/home/home";
import News from "./pages/news/News";
import PostPage from "./pages/Post/Post";
import Service from "./pages/services/Service";
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

            <Route path="statute" element={<About state={"statute"} />} />

            <Route path="managers" element={<Managers />} />

            <Route path="board-member" element={<Board />} />

            <Route path="org-chart" element={<OrganizationChart />} />

            {/* profiles */}
            <Route path="0" element={<Profile index={0} />} />
            <Route path="1" element={<Profile index={1} />} />
            <Route path="2" element={<Profile index={2} />} />
            <Route path="3" element={<Profile index={3} />} />
            <Route path="4" element={<Profile index={4} />} />
            <Route path="5" element={<Profile index={5} />} />
            <Route path="6" element={<Profile index={6} />} />
            <Route path="7" element={<Profile index={7} />} />
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
            <Route path="services" element={<Service state="services" />} />
            <Route path="path" element={<Service state="path" />} />
            <Route
              path="engineering"
              element={<Service state="engineering" />}
            />
            <Route path="transport" element={<Service state="transport" />} />
            <Route path="fire" element={<Service state="fire" />} />
            <Route path="person" element={<Service state="person" />} />
            <Route
              path="international"
              element={<Service state="international" />}
            />
            <Route path="consult" element={<Service state="consult" />} />
          </Route>

          <Route path="post/:id" element={<PostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
