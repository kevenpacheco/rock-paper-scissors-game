import "./Home.scss";
import { Option, PickOptionType } from "../../components/Option/Option";

interface HomeI {
  onPicked: (selected: PickOptionType) => void;
}

export const Home = ({ onPicked }: HomeI) => {
  const handleSelected = (selected: PickOptionType) => () => {
    onPicked(selected);
  };

  return (
    <main className="Home">
      <button type="button" onClick={handleSelected("paper")}>
        <Option option="paper" />
      </button>
      <button type="button" onClick={handleSelected("scissors")}>
        <Option option="scissors" />
      </button>
      <button type="button" onClick={handleSelected("rock")}>
        <Option option="rock" />
      </button>
    </main>
  );
};
