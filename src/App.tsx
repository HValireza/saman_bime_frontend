import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Accordion from "./components/Accordion/Accordion";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Manager from "./pages/Manager/Manager";
import News from "./pages/News/News";
import NoPage from "./pages/NoPage/NoPage";
import Post from "./pages/Post/Post";

// mock for posts
import mockImage from "./assets/pictures/mock/mohammad-mehrabi.jpg";
import mockImage2 from "./assets/pictures/mock/hadi-keshavarzi-shahr-babaki.jpg";
import mockPdf from "./assets/pdf/daftarche.pdf";
import mockPdf2 from "./assets/pdf/org-chart.pdf";
import mockBanner from "./assets/pictures/slider/3.jpg";
import { NewsPosts } from "./Mock/News/NewsMock";
import { ManagersData } from "./Mock/Managers/Managers/ManagersMock";
import { useEffect } from "react";

// todo make routes dynamic
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

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => switchIcon(e.matches));
    switchIcon(usesDarkMode);

    return window.removeEventListener("change", (e) => {});
  }, []);
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
          <Route
            path="post"
            element={
              <Post
                text={
                  NewsPosts[2].description +
                  "احی تحت عنوان لورم ایپسوم آشنا نماییم. طرح نما یا لورم ایپسوم که در انگلیسی به صورت Lorem ipsum نوشته می شود ، در واقع به معنای متنی است آزمایشی و بدون معنی که دارای کاربرد در صنعت چاپ ، صفحه آرایی و طراحی گرافیک و… می باشد. این متن معمولا در زمینه طراحی گرافیک به عنوان عنصری از ترکیب بندی ها برای پر کردن صفحات و آرایه ها در راستای بررسی چگونگی نوع و اندازه فرم و شیوه نمایش اسناد و محتوا و نیز به دست آمدن شکل کلی از خروجی و مشخص شدن ایرادات و نقایص احتمالی استفاده می شوداحی تحت عنوان لورم ایپسوم آشنا نماییم. طرح نما یا لورم ایپسوم که در انگلیسی به صورت Lorem ipsum نوشته می شود ، در واقع به معنای متنی است آزمایشی و بدون معنی که دارای کاربرد در صنعت چاپ ، صفحه آرایی و طراحی گرافیک و… می باشد. این متن معمولا در زمینه طراحی گرافیک به عنوان عنصری از ترکیب بندی ها برای پر کردن صفحات و آرایه ها در راستای بررسی چگونگی نوع و اندازه فرم و شیوه نمایش اسناد و محتوا و نیز به دست آمدن شکل کلی از خروجی و مشخص شدن ایرادات و نقایص احتمالی استفاده می شوداحی تحت عنوان لورم ایپسوم آشنا نماییم. طرح نما یا لورم ایپسوم که در انگلیسی به صورت Lorem ipsum نوشته می شود ، در واقع به معنای متنی است آزمایشی و بدون معنی که دارای کاربرد در صنعت چاپ ، صفحه آرایی و طراحی گرافیک و… می باشد. این متن معمولا در زمینه طراحی گرافیک به عنوان عنصری از ترکیب بندی ها برای پر کردن صفحات و آرایه ها در راستای بررسی چگونگی نوع و اندازه فرم و شیوه نمایش اسناد و محتوا و نیز به دست آمدن شکل کلی از خروجی و مشخص شدن ایرادات و نقایص احتمالی استفاده می شود"
                }
                author={{
                  createdAt: NewsPosts[2].createdAt,
                  name: NewsPosts[2].name,
                  position: NewsPosts[2].position,
                  state: "post",
                  thumb: NewsPosts[2].thumb,
                }}
                bannerImage={NewsPosts[2].image}
                title={NewsPosts[2].title}
                subGroupTitle="اخبار"
              />
            }
          />
          <Route
            path="report"
            element={
              <Post
                title="گزارش شماره تست"
                mainGroupTitle="گروه گزارش تست"
                subGroupTitle="گزارشگری و افشای اطلاعات"
                pdf={mockPdf}
              />
            }
          />
          <Route
            path="manager/1"
            element={
              <Post
                bannerImage={mockImage}
                mainGroupTitle="معرفی مدیر"
                title="اسم مدیر"
                text="احی تحت عنوان لورم ایپسوم آشنا نماییم. طرح نما یا لورم ایپسوم که در انگلیسی به صورت Lorem ipsum نوشته می شود ، در واقع به معنای متنی است آزمایشی و بدون معنی که دارای کاربرد در صنعت چاپ ، صفحه آرایی و طراحی گرافیک و… می باشد. این متن معمولا در زمینه طراحی گرافیک به عنوان عنصری از ترکیب بندی ها برای پر کردن صفحات و آرایه ها در راستای بررسی چگونگی نوع و اندازه فرم و شیوه نمایش اسناد و محتوا و نیز به دست آمدن شکل کلی از خروجی و مشخص شدن ایرادات و نقایص احتمالی استفاده می شوداحی تحت عنوان لورم ایپسوم آشنا نماییم. طرح نما یا لورم ایپسوم که در انگلیسی به صورت Lorem ipsum نوشته می شود ، در واقع به معنای متنی است آزمایشی و بدون معنی که دارای کاربرد در صنعت چاپ ، صفحه آرایی و طراحی گرافیک و… می باشد. این متن معمولا در زمینه طراحی گرافیک به عنوان عنصری از ترکیب بندی ها برای پر کردن صفحات و آرایه ها در راستای بررسی چگونگی نوع و اندازه فرم و شیوه نمایش اسناد و محتوا و نیز به دست آمدن شکل کلی از خروجی و مشخص شدن ایرادات و نقایص احتمالی استفاده می شوداحی تحت عنوان لورم ایپسوم آشنا نماییم. طرح نما یا لورم ایپسوم که در انگلیسی به صورت Lorem ipsum نوشته می شود ، در واقع به معنای متنی است آزمایشی و بدون معنی که دارای کاربرد در صنعت چاپ ، صفحه آرایی و طراحی گرافیک و… می باشد. این متن معمولا در زمینه طراحی گرافیک به عنوان عنصری از ترکیب بندی ها برای پر کردن صفحات و آرایه ها در راستای بررسی چگونگی نوع و اندازه فرم و شیوه نمایش اسناد و محتوا و نیز به دست آمدن شکل کلی از خروجی و مشخص شدن ایرادات و نقایص احتمالی استفاده می شود"
              />
            }
          />
          <Route
            path="pic"
            element={
              <Post
                image={mockImage2}
                bannerImage={mockBanner}
                subGroupTitle="تست تغییر بنر"
                title="تست عکس اول متن"
                text="احی تحت عنوان لورم ایپسوم آشنا نماییم. طرح نما یا لورم ایپسوم که در انگلیسی به صورت Lorem ipsum نوشته می شود ، در واقع به معنای متنی است آزمایشی و بدون معنی که دارای کاربرد در صنعت چاپ ، صفحه آرایی و طراحی گرافیک و… می باشد. این متن معمولا در زمینه طراحی گرافیک به عنوان عنصری از ترکیب بندی ها برای پر کردن صفحات و آرایه ها در راستای بررسی چگونگی نوع و اندازه فرم و شیوه نمایش اسناد و محتوا و نیز به دست آمدن شکل کلی از خروجی و مشخص شدن ایرادات و نقایص احتمالی استفاده می شوداحی تحت عنوان لورم ایپسوم آشنا نماییم. طرح نما یا لورم ایپسوم که در انگلیسی به صورت Lorem ipsum نوشته می شود ، در واقع به معنای متنی است آزمایشی و بدون معنی که دارای کاربرد در صنعت چاپ ، صفحه آرایی و طراحی گرافیک و… می باشد. این متن معمولا در زمینه طراحی گرافیک به عنوان عنصری از ترکیب بندی ها برای پر کردن صفحات و آرایه ها در راستای بررسی چگونگی نوع و اندازه فرم و شیوه نمایش اسناد و محتوا و نیز به دست آمدن شکل کلی از خروجی و مشخص شدن ایرادات و نقایص احتمالی استفاده می شوداحی تحت عنوان لورم ایپسوم آشنا نماییم. طرح نما یا لورم ایپسوم که در انگلیسی به صورت Lorem ipsum نوشته می شود ، در واقع به معنای متنی است آزمایشی و بدون معنی که دارای کاربرد در صنعت چاپ ، صفحه آرایی و طراحی گرافیک و… می باشد. این متن معمولا در زمینه طراحی گرافیک به عنوان عنصری از ترکیب بندی ها برای پر کردن صفحات و آرایه ها در راستای بررسی چگونگی نوع و اندازه فرم و شیوه نمایش اسناد و محتوا و نیز به دست آمدن شکل کلی از خروجی و مشخص شدن ایرادات و نقایص احتمالی استفاده می شود"
              />
            }
          />
          <Route
            path="org"
            element={
              <Post pdf={mockPdf2} pdfDefaultSize={true} title="چارت سازمانی" />
            }
          />

          {/* manager page */}
          {/* goes for both manager and board member */}
          <Route
            path="manager"
            element={
              <Manager title="معرفی مدیران" secondaryTitle="اعضای هیئت مدیره" />
            }
          />
          <Route
            path="manager/2"
            element={
              <Post
                manager={ManagersData[0]}
                mainGroupTitle="معرفی مدیر"
                title="اسم مدیر"
              />
            }
          />

          {/* reports page */}
          {/* reports and handbooks goes here */}
          <Route path="reports" element={<Accordion />} />

          {/* 404 */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
