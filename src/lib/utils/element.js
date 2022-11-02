export function getRandomPositionForElement(element) {
  const parent = element.parentElement;
  const width = parent?.clientWidth;
  const height = parent?.clientHeight;

  element.style.left = `${Math.floor(Math.random() * Number(width)) - element.clientWidth}px`;
  element.style.top = `${Math.floor(Math.random() * Number(height)) - element.clientHeight + 72}px`;
}
