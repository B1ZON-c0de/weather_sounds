export function renderSwitchButtons(quantity, parent) {
  // Создает контейнер для кнопок
  const switchContainer = document.createElement("div")

  // Добавляет и создает переданное кол-во кнопок
  for (let i = 0; i < quantity; i++) {
    const btn = document.createElement("button")
    btn.textContent = String(i)
    switchContainer.appendChild(btn)
  }

  // Добавляет контейнер с кнопками в в #app
  parent.appendChild(switchContainer);
}