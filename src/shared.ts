export function createSVG(textSVG) {
  const parser = new DOMParser()
  return parser.parseFromString(textSVG, "image/svg+xml").documentElement
}