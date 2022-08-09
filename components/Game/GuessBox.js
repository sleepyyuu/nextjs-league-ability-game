import { useState } from "react";
import styles from "../../styles/GuessBox.module.scss";
import uniqid from "uniqid";
import Image from "next/image";

export default function GuessBox(props) {
  let { currentGuessRow, setCurrentGuessRow } = props;
  let fillerGuesses = new Array(5 - currentGuessRow.length).fill({});
  return (
    <div className={styles.guessBoxContainer}>
      {currentGuessRow.map((guessAbility) => {
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
      })}
      {fillerGuesses.map(() => {
        return (
          <div className={styles.guessBox} key={uniqid()}>
            {}
          </div>
        );
      })}
    </div>
  );
}
