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

  // Слушатель клика на кнопках
  switchContainer.addEventListener("click", (e) => {
    backgrounds.forEach(background => {
      if (e.target.closest(`.${background.class}`)) {
        setBackground(background.url, parent)
      }
    })
  })
}