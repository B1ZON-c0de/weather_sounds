import rainyBg from "./assets/rainy-bg.jpg"
import summerBg from "./assets/summer-bg.jpg"
import winterBg from "./assets/winter-bg.jpg"
import rainySvg from "./assets/icons/cloud-rain.svg"
import winterSvg from "./assets/icons/cloud-snow.svg"
import summerSvg from "./assets/icons/sun.svg"
import rainyAudio from "./assets/sounds/rain.mp3"
import summerAudio from "./assets/sounds/summer.mp3"
import winterAudio from "./assets/sounds/winter.mp3"

export const BACKGROUNDS = [
  {
    id: 1,
    class: "rainy-button",
    url: rainyBg,
    svg: rainySvg,
    audio: new Audio(rainyAudio)
  },
  {
    id: 2,
    class: "summer-button",
    url: summerBg,
    svg: summerSvg,
    audio: new Audio(summerAudio)
  },
  {
    id: 3,
    class: "winter-button",
    url: winterBg,
    svg: winterSvg,
    audio: new Audio(winterAudio)
  },
]