import "./style.scss"
import { renderSwitchButtons } from "./render";
import { BACKGROUNDS } from "./data";

const app = document.querySelector("#app");

renderSwitchButtons(BACKGROUNDS, app)