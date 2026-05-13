import { setBackground } from "./background";
import pauseBtn from "./assets/icons/pause.svg"
import { createSVG } from "./shared";
import { IBackground } from "./data";
import { IAudio } from "./index";

export function renderSwitchButtons(backgrounds: IBackground[], parent: Element, audio: IAudio){
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
    const svg = createSVG(background.svg)
    btn.appendChild(svg)
    switchContainer.appendChild(btn)
  })
  // Добавляет контейнер с кнопками в в #app
  parent.appendChild(switchContainer);
  // Слушатель клика на кнопках
  switchContainer.addEventListener("click", (e: MouseEvent) => {
    if (!(e.target instanceof HTMLElement)) return
    const currentBtn = e.target.closest("button")
    if (!currentBtn) return
    const background = backgrounds.find(bg => currentBtn.classList.contains(bg.class))
    if (!background) return
    if (currentBtn){
      setBackground(background.url, parent)
      // Переключает иконку и ставит на паузу так же сбрасывает аудио к началу
      if (audio.current && audio.current !== background.audio){
        const prevBg = backgrounds.find(bg => bg.audio === audio.current)!
        const prevBtn = document.querySelector(`.${ prevBg.class }`)
        if (prevBtn){
          prevBtn.replaceChildren(createSVG(prevBg.svg))
        }
        audio.current.pause()
        audio.current.currentTime = 0
      }
      // Логика установки паузы на аудио
      if (audio.current === background.audio){

        if (!audio.current.paused){
          audio.current.pause()
          currentBtn.replaceChildren(createSVG(background.svg))
          return
        }

        audio.current.play()
        currentBtn.replaceChildren(createSVG(pauseBtn))
        return
      }

      // Логика переключения трека
      audio.current = background.audio
      audio.current.play()

      currentBtn.replaceChildren(createSVG(pauseBtn))
    }

  })
}

export function renderTitle(text:string, parent:Element){
  const title = document.createElement("h1")

  title.textContent = text

  parent.appendChild(title)
}

export function renderVolumeSelect(min = 0, max = 100, parent:Element, audio:IAudio){
  const volume = document.createElement("input")
  volume.type = "range"
  volume.min = String(min)
  volume.max = String(max)

  volume.addEventListener("change", (e:Event) => {
    if (!audio.current) return
    if(!(e.target instanceof HTMLInputElement)) return
    audio.current.volume = Number(e.target.value) / 100
  })

  parent.appendChild(volume)
}