import { windowHeight, windowWidth } from "../utils/contstants";

export const calcWidth = (inputWidth: number) => windowWidth * inputWidth;
export const calcHeight = (inputHeight: number) => windowHeight * inputHeight;
