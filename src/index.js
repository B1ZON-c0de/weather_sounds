import "./style.scss"
import { renderSwitchButtons, renderTitle, renderVolumeSelect } from "./render";
import { BACKGROUNDS } from "./data";

const app = document.querySelector("#app");

const audio = {
  current: null
}

renderTitle("Weather Sounds", app)
renderSwitchButtons(BACKGROUNDS, app, audio)
renderVolumeSelect(0, 100, app, audio);