import localFont from "next/font/local";

const nanumSquareNeo = localFont({
  src: "./NanumSquareNeo-Variable.ttf",
  variable: "--nanum-squareNeo",
});

const nanumSquareNeoHavy = localFont({
  src: "./NanumSquareNeo-eHv.ttf",
  variable: "--nanum-squareNeo-heavy",
});

export { nanumSquareNeo, nanumSquareNeoHavy };
