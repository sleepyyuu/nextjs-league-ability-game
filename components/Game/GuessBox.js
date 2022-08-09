import { useState } from "react";
import styles from "../../styles/GuessBox.module.scss";
import uniqid from "uniqid";
import Image from "next/image";

export default function GuessBox(props) {
  let { currentGuessRow, setCurrentGuessRow } = props;
  const [currentGuess, setCurrentGuess] = useState([{}, {}, {}, {}, {}]);
  return (
    <div className={styles.guessBoxContainer}>
      {currentGuessRow.map((guessAbility) => {
        if (currentGuess.length > 0) {
          return (
            <div key={uniqid()} className={styles.guessBox}>
              <Image
                src={"/images/spell/" + guessAbility.image.full}
                width={100}
                height={100}
                onClick={() => {
                  //handle remove
                }}
              ></Image>
            </div>
          );
        } else {
          return (
            <div key={uniqid()} className={styles.guessBox}>
              adg
            </div>
          );
        }
      })}
    </div>
  );
}
