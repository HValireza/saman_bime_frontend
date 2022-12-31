import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NewsData } from "./components/templates/News/data/NewsTemplateData";
import { NewsEnum } from "./global/news.enum";
import About from "./pages/about/about";
import Home from "./pages/home/home";
import News from "./pages/news/News";
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
          <Route path="news">
            <Route
              path="company"
              element={<News data={NewsData} state={NewsEnum.COMPANY} />}
            />
            <Route
              path="insurance"
              element={<News data={NewsData} state={NewsEnum.INSURANCE} />}
            />
            <Route
              path="shareholder"
              element={<News data={NewsData} state={NewsEnum.SHAREHOLDER} />}
            />
            <Route
              path="article"
              element={<News data={NewsData} state={NewsEnum.ARTICLE} />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
