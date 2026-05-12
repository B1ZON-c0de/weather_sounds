import "./style.scss"
import { renderSwitchButtons, renderTitle } from "./render";
import { BACKGROUNDS } from "./data";

const app = document.querySelector("#app");

renderTitle("Weather Sounds", app)
renderSwitchButtons(BACKGROUNDS, app)