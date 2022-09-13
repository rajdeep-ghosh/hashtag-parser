function getUnique(hashtags) {
  return [...new Set(hashtags)];
}

function extract(string, options = {}) {
  const { symbol = true, unique = false, caseSensitive = true } = options;
  let hashtags = [];

  if (!string || typeof string !== "string") {
    return hashtags;
  }

  !caseSensitive && (string = string.toLowerCase());

  if (symbol) {
    hashtags = string.match(/(?<=[\s>]|^)[#|＃](\w*[a-zA-Z0-9]+\w*)/gi) || [];
  } else {
    hashtags = string.match(/(?<=[#|＃])[\w]+/gi) || [];
  }

  return unique ? getUnique(hashtags) : hashtags;
}

export default extract;
