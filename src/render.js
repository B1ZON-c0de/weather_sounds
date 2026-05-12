import { setBackground } from "./background";

export function renderSwitchButtons(backgrounds, parent) {
  const defaultBg = backgrounds[0].url

  // Устанавливает фон по умолчанию
  setBackground(defaultBg, parent);

  // Создает контейнер для кнопок
  const switchContainer = document.createElement("div")
  // Добавляет класс для контейнера
  switchContainer.className = "switch-container"

  // Добавляет и создает переданное кол-во кнопок
  backgrounds.forEach(background => {
    const btn = document.createElement("button")
    btn.classList.add(background.class)
    btn.style.setProperty("background", `url(${ background.url }) no-repeat center / cover`)
    const parser = new DOMParser()
    const svg = parser.parseFromString(background.svg, "image/svg+xml").documentElement
    btn.appendChild(svg)
    switchContainer.appendChild(btn)
  })

  // Добавляет контейнер с кнопками в в #app
  parent.appendChild(switchContainer);

  // Слушатель клика на кнопках
  switchContainer.addEventListener("click", (e) => {
    backgrounds.forEach(background => {
      if (e.target.closest(`.${ background.class }`)) {
        setBackground(background.url, parent)
      }
    })
  })
}

export function renderTitle(text, parent) {
  const title = document.createElement("h1")

  title.textContent = text

  parent.appendChild(title)
}

export function renderVolumeSelect(min = 0, max = 100, parent) {
  const volume = document.createElement("input")
  volume.type = "range"
  volume.min = String(min)
  volume.max = String(max)

  parent.appendChild(volume)
}