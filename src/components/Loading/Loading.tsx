import "./Loading.scss";

const Loading: React.FC = () => {
  return (
    <div className="ap-loading-container">
      <div className="spinner spinnerDots">
        <div className="spinner-dot" />
        <div className="spinner-dot" />
        <div className="spinner-dot" />
      </div>
    </div>
  );
};

export default Loading;
