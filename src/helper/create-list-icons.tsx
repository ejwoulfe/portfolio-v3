export default function createListIcons(iconsArray: Array<string>) {
  return iconsArray.map((iconName, index) => {
    return (
      <li key={"icon-" + index}>
        <img src={require("../assets/icons/svg/" + iconName + ".svg")} alt={iconName + " icon"} />
        <span>{iconName}</span>
      </li>
    );
  });
}
