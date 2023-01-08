import { BrowserRouter, Route, Routes } from "react-router-dom";
import Board from "./components/templates/about-us/board/board-members";
import Managers from "./components/templates/about-us/board/managers";
import Profile from "./components/templates/about-us/board/profile";
import OrganizationChart from "./components/templates/about-us/OrganizationChart/OrganizationChart";
import { NewsEnum } from "./global/news.enum";
import About from "./pages/about/about";
import ContactUsPage from "./pages/ContactUs/ContactUsPage";
import Groups from "./pages/Groups/Groups";
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
          {/* Home */}
          <Route index element={<Home />} />

          {/* About Pages */}
          <Route path="about">
            <Route path="history" element={<About state={"history"} />} />

            <Route path="goals" element={<About state={"goals"} />} />

            <Route path="avail" element={<About state={"avail"} />} />

            <Route path="worldview" element={<About state={"worldview"} />} />

            <Route path="structure" element={<About state={"structure"} />} />

            <Route path="statute" element={<About state={"statute"} />} />

            <Route path="managers" element={<Managers />} />

            <Route path="board-member" element={<Board />} />

            <Route
              path="org-chart"
              element={<OrganizationChart state={"orgchart"} />}
            />

            <Route
              path="registration"
              element={<OrganizationChart state={"registration"} />}
            />

            <Route path="hr" element={<OrganizationChart state={"hr"} />} />
            <Route path="cs" element={<OrganizationChart state={"cs"} />} />
            <Route
              path="actuarial"
              element={<OrganizationChart state={"actuarial"} />}
            />
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

          {/* News Pages */}
          <Route path="news">
            <Route path="article" element={<News state={NewsEnum.ARTICLE} />} />
            <Route path="company" element={<News state={NewsEnum.COMPANY} />} />
            <Route
              path="insurance"
              element={<News state={NewsEnum.INSURANCE} />}
            />
            <Route
              path="publishers"
              element={<News state={NewsEnum.PUBLISHERS} />}
            />
            <Route
              path="learnings"
              element={<News state={NewsEnum.LEARNING} />}
            />
            <Route
              path="shareholder"
              element={<News state={NewsEnum.SHAREHOLDER} />}
            />
            <Route path="share" element={<News state={NewsEnum.SHARE} />} />

            <Route path="finance" element={<News state={NewsEnum.FINANCE} />} />

            <Route
              path="invitations"
              element={<News state={NewsEnum.ARTICLE} />}
            />

            <Route
              path="constituent"
              element={<News state={NewsEnum.CONSTITUENT} />}
            />

            <Route path="general" element={<News state={NewsEnum.GENERAL} />} />

            {/* news - regulations */}

            <Route
              path="reliance"
              element={<News state={NewsEnum.RELIANCE} />}
            />
            <Route path="fire" element={<News state={NewsEnum.FIRE} />} />
            <Route
              path="transport"
              element={<News state={NewsEnum.TRANSPORT} />}
            />
            <Route
              path="responsibility"
              element={<News state={NewsEnum.RESPONSIBILITY} />}
            />
            <Route path="cars" element={<News state={NewsEnum.CARS} />} />
            <Route path="life" element={<News state={NewsEnum.LIFE} />} />
            <Route path="cure" element={<News state={NewsEnum.CURE} />} />
            <Route
              path="accident"
              element={<News state={NewsEnum.ACCIDENT} />}
            />
            <Route path="money" element={<News state={NewsEnum.MONEY} />} />
            <Route path="credit" element={<News state={NewsEnum.CREDIT} />} />
            <Route path="travel" element={<News state={NewsEnum.TRAVEL} />} />
            <Route path="animal" element={<News state={NewsEnum.ANIMAL} />} />
            <Route
              path="actuarial"
              element={<News state={NewsEnum.ACTUARIAL} />}
            />
            <Route path="insurer" element={<News state={NewsEnum.INSURER} />} />
            <Route
              path="accounting"
              element={<News state={NewsEnum.ACCOUNTING} />}
            />
            <Route path="damage" element={<News state={NewsEnum.DAMAGE} />} />
            <Route path="save" element={<News state={NewsEnum.SAVE} />} />
            <Route path="wage" element={<News state={NewsEnum.WAGE} />} />
            <Route
              path="employer"
              element={<News state={NewsEnum.EMPLOYER} />}
            />
            <Route
              path="currency"
              element={<News state={NewsEnum.CURRENCY} />}
            />
            <Route path="common" element={<News state={NewsEnum.COMMON} />} />
          </Route>

          {/* Services Pages */}
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

          {/* Group Pages */}
          <Route path="group">
            <Route
              path="assemblies"
              element={<Groups state={"assemblies"} />}
            />
            <Route
              path="regulations"
              element={<Groups state={"regulations"} />}
            />
            <Route path="reports" element={<Groups state={"reports"} />} />

            <Route
              path="introduction"
              element={<Groups state={"introduction"} />}
            />
            <Route path="path" element={<Groups state={"path"} />} />
            <Route path="risk" element={<Groups state={"risk"} />} />
            <Route path="finance" element={<Groups state={"finance"} />} />
          </Route>
          {/* Post Pages */}
          <Route path="post/:id" element={<PostPage />} />
          {/* contact us */}
          <Route path="contact-us" element={<ContactUsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
