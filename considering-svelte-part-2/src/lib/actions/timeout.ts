function setAlert(node: HTMLElement) {
  const span = document.createElement("span");
  const { top, right } = node.getBoundingClientRect();

  span.innerText = "Still here?";
  span.style.position = "fixed";
  span.style.top = `${top}px`;
  span.style.left = `${right}px`;
  span.style.width = "max-content";
  span.style.fontSize = "10px"
  span.style.backgroundColor = "red";
  span.style.color = "white";

  return span;
}

export function timeout(node: HTMLElement, time: number = 2000) {
  let timeoutId: ReturnType<typeof setTimeout> = null;
  let span = undefined;

  function onMouseIn() {
    timeoutId = setTimeout(() => {
      span = setAlert(node);
      document.body.append(span)
    }, time);
  }

  function onMouseOut() {
    clearTimeout(timeoutId);

    if (span) {
      document.body.removeChild(span);
      span = undefined;
    }
  }

  node.addEventListener("mouseenter", onMouseIn);
  node.addEventListener("mouseout", onMouseOut);

  return {
    destroy() {
      node.removeEventListener("mouseenter", onMouseIn);
      node.removeEventListener("mouseout", onMouseOut);
    }
  }
}