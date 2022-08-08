import { useState } from "react";
import styles from "../styles/GuessBox.module.scss";

export default function GuessBox() {
  const [currentGuess, setCurrentGuess] = useState([{}, {}, {}, {}, {}]);
  return (
    <div className={styles.guessBoxContainer}>
      {currentGuess.map((guessIcon) => {
        if (guessIcon.image) {
          return <div className={styles.guessBox}>?</div>;
        } else {
          return <div className={styles.guessBox}></div>;
        }
      })}
    </div>
  );
}
