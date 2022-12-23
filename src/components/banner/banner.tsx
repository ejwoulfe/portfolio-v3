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
import gitHub from "../../assets/icons/svg/github-white.svg";
import hiking from "../../assets/icons/svg/person-hiking.svg";
import react from "../../assets/icons/svg/react.svg";
import javaScript from "../../assets/icons/svg/square-js.svg";
import tree from "../../assets/icons/svg/tree.svg";
import twitch from "../../assets/icons/svg/twitch.svg";
import tent from "../../assets/icons/svg/tent.svg";
import html5 from "../../assets/icons/svg/html5.svg";
import code from "../../assets/icons/svg/code.svg";
import shuttle from "../../assets/icons/svg/shuttle-space.svg";
import wizardHat from "../../assets/icons/svg/wizard-hat.svg";
import headphones from "../../assets/icons/svg/headphones.svg";
import steam from "../../assets/icons/svg/steam.svg";
import sass from "../../assets/icons/svg/sass.svg";
import bicycle from "../../assets/icons/svg/bicycle.svg";
import snowflake from "../../assets/icons/svg/snowflake.svg";
import database from "../../assets/icons/svg/database.svg";
import robot from "../../assets/icons/svg/robot.svg";
import keyboard from "../../assets/icons/svg/keyboard.svg";
import terminal from "../../assets/icons/svg/terminal.svg";

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
    <img src={gitHub} alt="github icon" aria-hidden="true" />,
    <img src={hiking} alt="hiking icon" aria-hidden="true" />,
    <img src={react} alt="react icon" aria-hidden="true" />,
    <img src={javaScript} alt="javascript icon" aria-hidden="true" />,
    <img src={tree} alt="tree icon" aria-hidden="true" />,
    <img src={twitch} alt="twitch icon" aria-hidden="true" />,
    <img src={tent} alt="twitch icon" aria-hidden="true" />,
    <img src={html5} alt="html5 icon" aria-hidden="true" />,
    <img src={code} alt="code icon" aria-hidden="true" />,
    <img src={shuttle} alt="space shuttle icon" aria-hidden="true" />,
    <img src={wizardHat} alt="wizard hat icon" aria-hidden="true" />,
    <img src={headphones} alt="headphones icon" aria-hidden="true" />,
    <img src={steam} alt="steam icon" aria-hidden="true" />,
    <img src={sass} alt="sass icon" aria-hidden="true" />,
    <img src={bicycle} alt="bicycle icon" aria-hidden="true" />,
    <img src={snowflake} alt="snowflake icon" aria-hidden="true" />,
    <img src={database} alt="database icon" aria-hidden="true" />,
    <img src={robot} alt="robot icon" aria-hidden="true" />,
    <img src={keyboard} alt="keyboard icon" aria-hidden="true" />,
    <img src={terminal} alt="v icon" aria-hidden="true" />,
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
      <div className="background">
        {[...Array(20)].map(() => (
          <div>
            <div className="animation-container">{generateRandomOrderOfIcons(icons)}</div>
          </div>
        ))}
      </div>
      <div className="name-and-role">
        <h1>Ed Woulfe</h1>
        <h2>Web Developer</h2>
      </div>
    </section>
  );
}
