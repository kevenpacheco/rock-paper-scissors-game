import "./Header.scss";

type Props = {
  score: number;
}

export const Header = ({ score }: Props) => {
  return (
    <div className="Header">
      <div className="Header__options">
        <p>ROCK</p>
        <p>PAPER</p>
        <p>SCISSORS</p>
      </div>

      <div className="Header__score">
        <p>SCORE</p>
        <p>{score}</p>
      </div>
    </div>
  );
};
