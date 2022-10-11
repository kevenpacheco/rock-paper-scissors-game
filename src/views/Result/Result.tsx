import "./Result.scss";
import {
  Option,
  PickOptionType,
  PICK_OPTIONS_MAPPER,
} from "../../components/Option/Option";
import { useCallback, useContext, useEffect, useState } from "react";
import { GameContext, GameContextType } from "../../App";
import { Button } from "../../components/Button/Button";

const RESULTS_MAPPER = {
  WON: "YOU WIN",
  LOSE: "YOU LOSE",
  DRAW: "DRAW",
};

type ResultType = keyof typeof RESULTS_MAPPER;

type Props = {
  playerChoice: PickOptionType;
};

export const Result = ({ playerChoice }: Props) => {
  const { decrementScore, incrementScore, handlePlayAgain } = useContext(
    GameContext
  ) as GameContextType;
  const [machineChoice, setMachineChoice] = useState<PickOptionType | null>(
    null
  );
  const [result, setResult] = useState<ResultType | null>(null);

  const generateMachineRandomPick = useCallback(() => {
    const pickOptions = Object.keys(PICK_OPTIONS_MAPPER);
    const randomIndex = Math.floor(Math.random() * pickOptions.length);
    return pickOptions[randomIndex];
  }, []);

  const generateResult = (machineChoice: PickOptionType) => {
    if (PICK_OPTIONS_MAPPER[playerChoice].wins_from.includes(machineChoice)) {
      incrementScore();
      return "WON";
    }

    if (PICK_OPTIONS_MAPPER[playerChoice].lose_to.includes(machineChoice)) {
      decrementScore();
      return "LOSE";
    }

    return "DRAW";
  };

  console.log("render");

  useEffect(() => {
    if (!playerChoice) return;

    const delay = setTimeout(() => {
      const choice = generateMachineRandomPick() as PickOptionType;
      setMachineChoice(choice);
      setResult(generateResult(choice));
    }, 3000);

    return () => {
      clearTimeout(delay);
    };
  }, [generateMachineRandomPick, playerChoice]);

  return (
    <div className="Result">
      <div className="Result__picked Result__picked--player">
        <Option option={machineChoice && playerChoice} />
        <p>YOU PICKED</p>
      </div>

      {!!result && (
        <div className="Result__result">
          <p>{RESULTS_MAPPER[result]}</p>
          <Button onClick={handlePlayAgain}>PLAY AGAIN</Button>
        </div>
      )}

      <div className="Result__picked Result__picked--machine">
        <Option option={machineChoice} />
        <p>THE HOUSE PICKED</p>
      </div>
    </div>
  );
};
