export type CardType = {
  id: number,
  category: string;
  title: string,
  titleClass: string,
  time: string,
  timeClass: string,
  buttonText: string,
  buttonClass: string,
  background: string,
  photoCount: number;
  image: string;
  icon: string;
  iconClass: string;
};

export type NewsType = {
  id: number,
  time: string,
  title: string,
  text: string,
};

export type ArticlesType = {
  id: number,
  title: string,
  time: string,
};

export type SliderType = {
  category: string;
  slide: string;
};