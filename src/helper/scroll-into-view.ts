export function scrollIntoView(goto: string) {
  // This will go to the section container and the html we want will be the first child within that container, and h2 element.
  const element = document.getElementsByClassName(goto)[0];
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
  }
}
