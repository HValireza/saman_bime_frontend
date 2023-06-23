import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useIsFetching, useIsMutating } from "react-query";
import { useGetCategories } from "./api/categories/useGetCategories";
import { useGetCategory } from "./api/categories/useGetCategory";
import { useGetAllNews } from "./api/news/useGetAllNews";
import { useGetPage } from "./api/pages/useGetPage";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import NoPage from "./pages/NoPage/NoPage";
import Loading from "./components/Loading/Loading";
import "./App.scss";
import { DynamicCategoriesRoute } from "./helpers/DynamicCategoriesRoute";
import { DynamicPage } from "./pages/DynamicPage/DynamicPage";
import SingleNews from "./pages/SingleNews/SingleNews";

const App: React.FC = () => {
  const usesDarkMode =
    window.matchMedia("(prefers-color-scheme: dark)").matches || false;
  const favicon: any = document.getElementById("favicon");

  const switchIcon = (usesDarkMode: boolean) => {
    if (usesDarkMode) {
      favicon.href = "/logo_white.ico";
    } else {
      favicon.href = "/logo_blue.ico";
    }
  };

  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  const isLoading = Boolean(isFetching) || Boolean(isMutating);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => switchIcon(e.matches));
    switchIcon(usesDarkMode);

    return window.removeEventListener("change", (e) => {});
  }, []);

  // make routes dynamic
  const { data } = useGetCategories();
  const { data: OneNews } = useGetAllNews({ count: 1 });
  let newsPageId = null;
  if (OneNews?.data.data.length) newsPageId = OneNews?.data.data[0].page_id;
  const { data: newsPage } = useGetPage(newsPageId!);
  const newsCategoryId = newsPage?.data.category_id ?? null;
  const { data: newsCategory } = useGetCategory(newsCategoryId!);
  const newsRoute = newsCategory?.data.route ?? null;

  return (
    <BrowserRouter>
      {isLoading ?? <Loading />}
      <Routes>
        {/* Layout */}
        <Route path="/" element={<Layout />}>
          {/* Home Page */}
          <Route index element={<Home />} />
          {data?.data.data
            .map((category) => DynamicCategoriesRoute(category))
            .flat()
            .map((c) => (
              <Route
                key={`route-${c.id}`}
                path={c.route}
                element={<DynamicPage />}
              />
            ))}
          {/* news */}
          {newsRoute && (
            <Route path={`/${newsRoute}/*`} element={<SingleNews />} />
          )}
          {/* 404 */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
