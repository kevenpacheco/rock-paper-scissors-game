import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import "./assets/styles/global.scss";
import { Button } from "./components/Button/Button";
import { Header } from "./components/Header/Header";
import { Home } from "./views/Home/Home";
import { Rules } from "./views/Rules/Rules";
import { Result } from "./views/Result/Result";
import { PickOptionType } from "./components/Option/Option";

export type GameContextType = {
  incrementScore: () => void;
  decrementScore: () => void;
  handlePlayAgain: () => void;
};

export const GameContext = createContext<GameContextType | null>(null);

export const App = () => {
  const [showRules, setShowRules] = useState(false);
  const [score, setScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState<PickOptionType | null>(
    null
  );

  console.log("score - ", score);

  const incrementScore = useCallback(
    () => setScore((oldState) => oldState + 1),
    []
  );

  const decrementScore = useCallback(
    () => setScore((oldState) => oldState - 1),
    []
  );

  const handlePlayAgain = useCallback(() => {
    setPlayerChoice(null);
  }, []);

  const contextValues = useMemo(
    () => ({ incrementScore, decrementScore, handlePlayAgain }),
    [incrementScore, decrementScore, handlePlayAgain]
  );

  return (
    <GameContext.Provider value={contextValues}>
      <Header score={score} />

      {playerChoice ? (
        <Result playerChoice={playerChoice} />
      ) : (
        <Home onPicked={setPlayerChoice} />
      )}

      <Button onClick={() => setShowRules(true)} variant="secondary">
        RULES
      </Button>

      {showRules && <Rules onClose={() => setShowRules(false)} />}
    </GameContext.Provider>
  );
};
