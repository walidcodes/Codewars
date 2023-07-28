function isPangram(string) {
  if (
    Array.from(
      new Set(
        string
          .toLowerCase()
          .split("")
          .filter((c) => {
            if (c.charCodeAt() > 96 && c.charCodeAt() < 123) return c;
          })
      )
    ).length === 26
  )
    return true;

  return false;
}
