import { useEffect, useRef } from "react";
import "./HtmlViewer.scss";

interface IHtmlViewer {
  html: string;
}
export const HtmlViewer: React.FC<IHtmlViewer> = ({ html }) => {
  const refHtmlDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (refHtmlDiv.current) refHtmlDiv.current.innerHTML = html;
  }, [html]);

  return <div className="si-html-viewer" ref={refHtmlDiv}></div>;
};
