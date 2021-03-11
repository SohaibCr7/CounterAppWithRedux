import { type } from "./actiontype";

export const inc = () => {
  console.log("inaction");

  return {
    type: type.inc,
    
  };
};

export const dec = () => {
  return {
    type: type.dec,
  };
};
