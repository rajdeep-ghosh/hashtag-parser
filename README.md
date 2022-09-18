# Hashtag Parser
Get an array of hashtags extracted from a string


# Usage
```javascript
import extract from "hashtag-parser";

const hashtags = extract("Any text with #hashtag");

// hashtags = ["#hashtag"]
```

# The extract() function
Parameters
- String
- Options (Object) | Optional
  - symbol | Boolean
  - unique | Boolean
  - caseSensitive | Boolean

Returns
- Array

# Options
## Remove # symbol
```javascript
const hashtags = extract("Any text with #hashtag", { symbol: false });

// hashtags = ["hashtag"]
```

## Get unique values
```javascript
const hashtags = extract("Any text with #hashtag and another #hashtag", {
  symbol: true, unique: true
});

// hashtags = ["#hashtag"]
```

## Include case sensitive tags
```javascript
const hashtags = extract("Any text with #hashtag and another #Hashtag", {
  symbol: false, unique: true, caseSensitive: true
});

// hashtags = ["hashtag", "Hashtag"]
```