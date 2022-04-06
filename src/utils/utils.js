export function capitalizeFirstLetter(string) {
  if (string) return string.charAt(0).toUpperCase() + string.slice(1);
  return "";
}

export function capitalizeEachFirstLetterOfString(string) {
  if (string)
    return string.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
      letter.toUpperCase()
    );
  return "";
}
