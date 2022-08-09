import Image from "next/image";
import { useEffect } from "react";
import uniqid from "uniqid";
import styles from "../../styles/GuessOptions.module.scss";

export default function GuessOptions(props) {
  let { abilityOptions, currentGuessRow, setCurrentGuessRow } = props;
  let abilityRowArray = [];
  abilityRowArray = [abilityOptions.slice(0, 5), abilityOptions.slice(5, 10), abilityOptions.slice(10, 15)];
  const handleImageClick = (ability) => {
    setCurrentGuessRow((currentGuessRow) => {
      return [...currentGuessRow, ability];
    });
    console.log(currentGuessRow);
  };
  //pick random champion
  //get all abilities/icons for that champion
  //get 5 more random icons from any, no dupes
  //array of icons, if any icons random number match, get another num
  console.log(abilityOptions);
  return (
    <div className={styles.guessOptionContainer}>
      {abilityRowArray.map((abilityRow, abilityRowIndex) => {
        return (
          <div key={abilityRowIndex} className={styles.abilityRow}>
            {abilityRow.map((ability, abilityIndex) => {
              let imageSource = "/images/spell/" + ability.image.full;
              return (
                <div key={abilityIndex} suppressHydrationWarning className={styles.abilityImageContainer}>
                  <Image
                    src={imageSource}
                    width={100}
                    height={100}
                    onClick={() => {
                      handleImageClick(ability);
                    }}
                  ></Image>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
