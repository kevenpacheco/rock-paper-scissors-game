import "./Rules.scss";
import RulesImage from "../../assets/images/image-rules.svg";
import CloseIcon from "../../assets/images/icon-close.svg";

interface Props {
  onClose: () => void;
}

export const Rules = ({ onClose }: Props) => {
  return (
    <div className="Rules">
      <p>RULES</p>
      <img src={RulesImage} alt="Rules" width={304} height={270} />
      <button type="button" onClick={onClose}>
        <img src={CloseIcon} alt="Close icon" width={20} height={20} />
      </button>
    </div>
  );
};
