import { fontSize } from "./Theme";

export const type = (props) => {
  const style = {};

  if (props.textAlign) {
    style.textAlign = props.textAlign;
  }

  if (props.fontSize) {
    style.fontSize = fontSize[props.fontSize]
      ? fontSize[props.fontSize]
      : props.fontSize;
  }

  if (props.fontWeight) {
    style.fontWeight = props.fontWeight;
  }

  if (props.truncate) {
    style.whiteSpace = "nowrap";
    style.overflow = "hidden";
    style.textOverflow = "ellipsis";
  }
  return style;
};
