export const addDots = (str, len) => {
  if (str.length > len) {
    let res = str.slice(0, len);
    for (let i = len; i < str.length; i++) {
      if (str[i] !== " ") res += str[i];
      else {
        res += "...";
        break;
      }
    }
    return res;
  } else {
    return str;
  }
};
