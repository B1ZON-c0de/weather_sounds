import { setBackground } from "./background";

export function renderSwitchButtons(backgrounds, parent) {
  // Создает контейнер для кнопок
  const switchContainer = document.createElement("div")
  // Добавляет класс для контейнера
  switchContainer.className = "switch-container"

  // Добавляет и создает переданное кол-во кнопок
  backgrounds.forEach(background => {
    const btn = document.createElement("button")
    btn.classList.add(background.class)
    btn.textContent = String(background.id)
    switchContainer.appendChild(btn)
  })

  // Добавляет контейнер с кнопками в в #app
  parent.appendChild(switchContainer);

  switchContainer.addEventListener("click", (e) => {
    if (e.target.closest(".rainy-bg")) {
      setBackground("rainy-bg", parent)
    }
    if (e.target.closest(".summer-bg")) {
      setBackground("summer-bg", parent)
    }
    if (e.target.closest(".winter-bg")) {
      setBackground("winter-bg", parent)
    }
  })
}