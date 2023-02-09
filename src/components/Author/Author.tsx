import dayjs from "dayjs";
import jalaliday from "jalaliday";
import logo from "../../assets/logo/logo4.png";
import "./Author.scss";

export interface IAuthor {
  thumb?: string;
  name?: string;
  position?: string;
  createdAt?: string;
  state?: string;
}

const Author: React.FC<IAuthor> = ({
  createdAt = new Date().toISOString(),
  name = "بیمه اتکایی سامان",
  position = "بیمه اتکایی سامان",
  thumb = logo,
  state = "post",
}) => {
  dayjs.extend(jalaliday);

  return (
    <div
      className={state === "post" ? "si-author si-post-author" : "si-author"}
    >
      <div className="si-author-info">
        <img src={thumb} alt="" className="si-author-thumb" />
        <div className="si-author-info-wrapper">
          <h4 className="si-author-name">{name}</h4>
          <h5 className="si-author-position">{position}</h5>
        </div>
      </div>

      {/* created at time */}
      <div className="si-author-date">
        {dayjs(createdAt).calendar("jalali").format("YYYY/MM/DD")}
      </div>
    </div>
  );
};

export default Author;
