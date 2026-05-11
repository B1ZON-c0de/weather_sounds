export function renderSwitchButtons(quantity, parent) {
  const switchContainer = document.createElement("div")

  for (let i = 0; i < quantity; i++) {
    const btn = document.createElement("button")
    btn.textContent = String(i)
    switchContainer.appendChild(btn)
  }

  parent.appendChild(switchContainer);
}