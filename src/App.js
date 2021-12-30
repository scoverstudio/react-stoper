import Timer from "./components/Timer/Timer";
import Button from "./components/Button/Button";
import { useState, useEffect } from "react";
import styles from "../src/App.module.scss";

const TimerContainer = () => {
  const [time, setTime] = useState(0)
  const [timer, setTimer] = useState(null)

  const stopTimer = () => {
    if(timer) clearInterval(timer);
  };

  const start = () => {
    stopTimer();
    setTimer(
      setInterval(() => {
        setTime(time => time + 1);
      }, 1)
    );
  };

  const resetTimer = () => {
    setTime(time => 0)
    stopTimer();
  };

  useEffect(() => {
    return () => {
      stopTimer();
    };
  }, []);


  return (
    <div className={styles.timer}>
      <Timer time={time}/>
      <Button onClick={start}>START</Button>
      <Button onClick={stopTimer}>STOP</Button>
      <Button onClick={resetTimer}>RESET</Button>
    </div>
  );
}

function App() {
  const [showTimer, setShowTimer] = useState(true);
  const toggleTimer = () => setShowTimer(shouldShow => !shouldShow);
  return (
    <div className={styles.app}>
      {showTimer && <TimerContainer />}
      <Button onClick={toggleTimer}>{showTimer ? "hide" : "show"}</Button>
    </div>
  );
}

export default App;
