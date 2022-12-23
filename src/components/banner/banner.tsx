import "./banner.scss";

import discord from "../../assets/icons/svg/discord.svg";
import codeMerge from "../../assets/icons/svg/code-merge.svg";
import coffee from "../../assets/icons/svg/coffee.svg";
import computer from "../../assets/icons/svg/computer.svg";
import css3 from "../../assets/icons/svg/css3.svg";
import desktop from "../../assets/icons/svg/desktop.svg";
import dragon from "../../assets/icons/svg/dragon.svg";
import dumbbell from "../../assets/icons/svg/dumbbell.svg";
import gamepad from "../../assets/icons/svg/gamepad.svg";
import mountain from "../../assets/icons/svg/mountain.svg";
import mouse from "../../assets/icons/svg/mouse.svg";

export default function Banner() {
  const icons = [
    <img src={discord} alt="discord icon" aria-hidden="true" />,
    <img src={codeMerge} alt="codeMerge icon" aria-hidden="true" />,
    <img src={coffee} alt="coffee icon" aria-hidden="true" />,
    <img src={computer} alt="computer icon" aria-hidden="true" />,
    <img src={css3} alt="css3 icon" aria-hidden="true" />,
    <img src={desktop} alt="desktop icon" aria-hidden="true" />,
    <img src={dragon} alt="dragon icon" aria-hidden="true" />,
    <img src={dumbbell} alt="dumbbell icon" aria-hidden="true" />,
    <img src={gamepad} alt="gamepad icon" aria-hidden="true" />,
    <img src={mountain} alt="mountain icon" aria-hidden="true" />,
    <img src={mouse} alt="mouse icon" aria-hidden="true" />,
  ];

  // Function to randomize the order of the icons array so the background will appear to be a random order of icons instead of the same from line to line
  function generateRandomOrderOfIcons(iconArr: Array<any>): Array<any> {
    let usedNumbers: Array<number> = [];
    let currentPosition = 0;
    let randomizedIconElements: Array<any> = [];
    let randomNumber: number = Math.floor(Math.random() * iconArr.length);

    do {
      if (usedNumbers.includes(randomNumber)) {
        randomNumber = Math.floor(Math.random() * iconArr.length);
      } else {
        usedNumbers.push(randomNumber);
        randomizedIconElements.push(icons[randomNumber]);
        currentPosition++;
      }
    } while (currentPosition < iconArr.length);

    return randomizedIconElements;
  }
  return (
    <section role="banner" className="banner">
      {[...Array(12)].map(() => (
        <div>
          <div className="animation-container">{generateRandomOrderOfIcons(icons)}</div>
        </div>
      ))}
    </section>
  );
}
