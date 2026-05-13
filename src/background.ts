export function setBackground(bgUrl: string, appNode: HTMLElement){
  appNode.style.setProperty("--bg-image", `url(${ bgUrl })`);
}