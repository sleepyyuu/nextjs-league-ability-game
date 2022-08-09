import Image from "next/image";
import uniqid from "uniqid";
import styles from "../../styles/GuessOptions.module.scss";

export default function GuessOptions(props) {
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };
  let { abilityOptions } = props;
  shuffleArray(abilityOptions);
  let abilityRowArray = [abilityOptions.slice(0, 4), abilityOptions.slice(4, 8), abilityOptions.slice(8, 12)];

  //pick random champion
  //get all abilities/icons for that champion
  //get 5 more random icons from any, no dupes
  //array of icons, if any icons random number match, get another num
  return (
    <div className={styles.guessOptionContainer}>
      {abilityRowArray.map((abilityRow, abilityRowIndex) => {
        return (
          <div key={abilityRowIndex} className={styles.abilityRow}>
            {abilityRow.map((ability, abilityIndex) => {
              let imageSource = "/images/spell/" + ability.image.full;
              return (
                <div key={abilityIndex} suppressHydrationWarning className={styles.abilityImageContainer}>
                  <Image src={imageSource} width={100} height={100}></Image>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
