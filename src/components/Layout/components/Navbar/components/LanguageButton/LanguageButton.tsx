import "./LanguageButton.scss";
import enFlag from "../../../../../../assets/icons/flags/ukflag.svg";
import faFlag from "../../../../../../assets/icons/flags/irflag.svg";

interface ILanguageButton {
  setLanguage: (language: string) => void;
  language: string;
}

// todo fix persian language flag size

const LanguageButton: React.FC<ILanguageButton> = ({
  setLanguage,
  language,
}) => {
  return (
    <div
      className="si-language-container"
      onClick={() => setLanguage(language === "fa" ? "en" : "fa")}
    >
      {language === "fa" ? (
        <img src={enFlag} alt="en" className="si-language-flag" />
      ) : (
        <img src={faFlag} alt="fa" className="si-language-flag" />
      )}
    </div>
  );
};

export default LanguageButton;
