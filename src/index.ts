import "./style.scss"
import { renderSwitchButtons, renderTitle, renderVolumeSelect } from "./render";
import { BACKGROUNDS } from "./data";

const app = document.querySelector("#app")!;

export interface IAudio {
  current: HTMLAudioElement | null;
}

const audio: IAudio = {
  current: null
}

renderTitle("Weather Sounds", app)
renderSwitchButtons(BACKGROUNDS, app, audio)
renderVolumeSelect(0, 100, app, audio);