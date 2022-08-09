import GuessBox from "./GuessBox";
import GuessOptions from "./GuessOptions";
import championListData from "../../assets/data/champion.json";
import { useState } from "react";

export default function Game() {
  const championArray = Object.keys(championListData.data);
  const answerChampionNumber = Math.floor(Math.random() * championArray.length);
  let selectedChamp = require("../../assets/data/champion/" + championArray[answerChampionNumber] + ".json").data;
  selectedChamp = selectedChamp[Object.keys(selectedChamp)[0]];

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

  const [selectedChampion, setSelectedChampion] = useState(selectedChamp);
  const [selectedChampionAbilities, setSelectedChampionAbilities] = useState(selectedChamp.spells);
  const [abilityOptions, setAbilityOptions] = useState([...selectedChamp.spells, ...additionalAbilityChoices]);
  console.log(abilityOptions);
  return (
    <div>
      <GuessBox></GuessBox>
      <GuessOptions></GuessOptions>
    </div>
  );
}
