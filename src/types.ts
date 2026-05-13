export interface IBackground{
  id: number;
  class: string;
  url: string;
  svg: string;
  audio: HTMLAudioElement;
}

export interface IAudio {
  current: HTMLAudioElement | null;
}
