export function setBackground(bgUrl, appNode){
  appNode.style.setProperty("--bg-image", `url(${bgUrl})`);
}