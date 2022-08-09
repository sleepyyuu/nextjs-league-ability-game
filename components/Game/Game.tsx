import GuessBox from "./GuessBox";
import GuessOptions from "./GuessOptions";
import championListData from "../../assets/data/champion.json";
import { useEffect, useState } from "react";

export default function Game() {
  const [selectedChampion, setSelectedChampion] = useState({ name: "" });
  const [selectedChampionAbilities, setSelectedChampionAbilities] = useState([]);
  const [abilityOptions, setAbilityOptions] = useState([]);
  useEffect(() => {
    const championArray = Object.keys(championListData.data);
    const answerChampionNumber = Math.floor(Math.random() * championArray.length);
    let selectedChamp = require("../../assets/data/champion/" + championArray[answerChampionNumber] + ".json").data;
    selectedChamp = selectedChamp[Object.keys(selectedChamp)[0]];
    setSelectedChampion(selectedChamp);
    setSelectedChampionAbilities(selectedChamp.spells);
    let additionalAbilityChoices = [];
    while (additionalAbilityChoices.length < 8) {
      let randomChampionNumber = Math.floor(Math.random() * championArray.length);
      if (randomChampionNumber === answerChampionNumber) {
        continue;
      } else {
        let additionalSelectedChamp = require("../../assets/data/champion/" + championArray[randomChampionNumber] + ".json").data;
        additionalSelectedChamp = additionalSelectedChamp[Object.keys(additionalSelectedChamp)[0]];
        let randomAbilitySelect = Math.floor(Math.random() * 4);
        if (additionalAbilityChoices.find((ability) => ability.name === additionalSelectedChamp.spells[randomAbilitySelect].name)) {
          continue;
        } else {
          additionalAbilityChoices.push(additionalSelectedChamp.spells[randomAbilitySelect]);
        }
      }
    }
    setAbilityOptions([...selectedChamp.spells, ...additionalAbilityChoices]);
  }, []);
  console.log(selectedChampion.name);
  return (
    <div>
      <div>Selected champion is {selectedChampion ? selectedChampion.name : ""}</div>
      <GuessBox></GuessBox>
      <GuessOptions abilityOptions={abilityOptions}></GuessOptions>
    </div>
  );
}
