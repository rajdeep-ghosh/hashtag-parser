type options = {
  symbol?: boolean,
  unique?: boolean,
  caseSensitive?: boolean
}

const defaultValue = {
  symbol: true,
  unique: false,
  caseSensitive: true
}

function getUnique(hashtags: Array<string>) {
  return [...new Set(hashtags)];
}

function extract(str: string, { symbol, unique, caseSensitive }: options = defaultValue): Array<string> {
  let hashtags = [];

  if (!str || typeof str !== "string") {
      throw new Error("Invalid string");
  }

  !caseSensitive && (str = str.toLowerCase());

  if (symbol) {
      hashtags = str.match(/(?<=[\s>]|^)[#|＃](\w*[a-zA-Z0-9]+\w*)/gi) || [];
  } else {
      hashtags = str.match(/(?<=[#|＃])[\w]+/gi) || [];
  }

  return unique ? getUnique(hashtags) : hashtags;
}

export default extract;
