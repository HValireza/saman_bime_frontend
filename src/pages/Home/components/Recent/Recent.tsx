import { RecentPosts } from "../../../../Mock/Home/Recent/RecentMock";
import RecentCard from "./components/RecentCard/RecentCard";
import "./Recent.scss";

const Recent: React.FC = () => {
  return (
    <div className="si-recent-container">
      <h1 className="si-recent-title">مقالات، اخبار و رویداد ها</h1>
      <div className="si-recent-card-container">
        {RecentPosts.map((p) => (
          <RecentCard
            id={p.id}
            createdAt={p.createdAt}
            description={p.description}
            image={p.image}
            name={p.name}
            position={p.position}
            thumb={p.thumb}
            title={p.title}
            key={p.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Recent;
