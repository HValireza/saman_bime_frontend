import { useGetPageByURL } from "../../api/pages/useGetPageByURL";

export const DynamicPage = () => {
  const url = window.location.pathname;
  const { data } = useGetPageByURL(url);

  if (data?.data.cards?.length) return <div>Cards</div>;
  if (data?.data.content) return <div>content</div>;
  if (data?.data.news?.length) return <div>news</div>;
  if (data?.data.accordions?.length) return <div>accordions</div>;
  return <div>FUCK OFF</div>;
};
