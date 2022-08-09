import { useState } from "react";
import styles from "../../styles/GuessBox.module.scss";
import uniqid from "uniqid";

export default function GuessBox() {
  const [currentGuess, setCurrentGuess] = useState([{}, {}, {}, {}, {}]);
  return (
    <div className={styles.guessBoxContainer}>
      {currentGuess.map((guessIcon) => {
        if (guessIcon.image) {
          return (
            <div key={uniqid()} className={styles.guessBox}>
              ?
            </div>
          );
        } else {
          return <div key={uniqid()} className={styles.guessBox}></div>;
        }
      })}
    </div>
  );
}
