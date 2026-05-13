import "./style.scss"
import { renderSwitchButtons, renderTitle, renderVolumeSelect } from "./render";
import { BACKGROUNDS } from "./data";
import { IAudio } from "./types";

const app: HTMLElement = document.querySelector("#app")!;

const audio: IAudio = {
  current: null
}

renderTitle("Weather Sounds", app)
renderSwitchButtons(BACKGROUNDS, app, audio)
renderVolumeSelect(0, 100, app, audio);