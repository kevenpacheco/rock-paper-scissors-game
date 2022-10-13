import classnames from "classnames";
import "./Option.scss";
import RockIcon from "../../assets/images/icon-rock.svg";
import PaperIcon from "../../assets/images/icon-paper.svg";
import ScissorsIcon from "../../assets/images/icon-scissors.svg";

export const PICK_OPTIONS_MAPPER = {
  rock: {
    wins_from: ["scissors"],
    lose_to: ["paper"],
    image: RockIcon,
  },
  paper: {
    wins_from: ["rock"],
    lose_to: ["scissors"],
    image: PaperIcon,
  },
  scissors: {
    wins_from: ["paper"],
    lose_to: ["rock"],
    image: ScissorsIcon,
  },
};

export type PickOptionType = keyof typeof PICK_OPTIONS_MAPPER;

type Props = {
  option: PickOptionType | null;
};

export const Option = ({ option }: Props) => {
  const hasOption = !!option && PICK_OPTIONS_MAPPER[option];

  return (
    <div className="Option">
      <div
        className={classnames("Option__container", {
          [`Option__container--${option} Option__container--has-option`]:
            !!hasOption,
        })}
      >
        {!!hasOption && (
          <div>
            <img src={PICK_OPTIONS_MAPPER[option].image} alt={option} />
          </div>
        )}
      </div>
    </div>
  );
};
