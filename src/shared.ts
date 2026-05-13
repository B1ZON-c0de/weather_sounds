export function createSVG(textSVG: string): HTMLElement{
  const parser = new DOMParser()
  return parser.parseFromString(textSVG, "image/svg+xml").documentElement
}