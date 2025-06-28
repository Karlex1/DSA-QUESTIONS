function firstNonRepeatingChar(str) {
  const n = str.length;
  const map = {};

  // Count frequencies
  for (let i = 0; i < n; i++) {
    const ch = str[i];
    map[ch] = (map[ch] || 0) + 1;
  }

  // Find the first non-repeating character
  for (let i = 0; i < n; i++) {
    if (map[str[i]] === 1) {
      return str[i];
    }
  }

  return null;
}
