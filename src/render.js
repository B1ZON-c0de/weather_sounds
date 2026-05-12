import { setBackground } from "./background";

export function renderSwitchButtons(backgrounds, parent, audio) {
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
        if (audio.current && audio.current !== background.audio) {
          audio.current.pause()
          audio.current.currentTime = 0
        }
        if (!background.audio.paused) {
          background.audio.pause()
        } else {
          audio.current = background.audio
          background.audio.play()
        }
      }
    })
  })
}

export function renderTitle(text, parent) {
  const title = document.createElement("h1")

  title.textContent = text

  parent.appendChild(title)
}

export function renderVolumeSelect(min = 0, max = 100, parent, audio) {
  const volume = document.createElement("input")
  volume.type = "range"
  volume.min = String(min)
  volume.max = String(max)

  volume.addEventListener("change", e => {
    if (!audio.current) return
    audio.current.volume = Number(e.target.value) / 100
  })

  parent.appendChild(volume)
}