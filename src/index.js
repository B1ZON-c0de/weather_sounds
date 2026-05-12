import "./style.scss"
import { renderSwitchButtons, renderTitle, renderVolumeSelect } from "./render";
import { BACKGROUNDS } from "./data";

const app = document.querySelector("#app");

renderTitle("Weather Sounds", app)
renderSwitchButtons(BACKGROUNDS, app)
renderVolumeSelect(0, 100, app)