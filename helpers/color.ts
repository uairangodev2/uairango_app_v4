export const hexToRGBA = (hex: string, opacity: number) => {
  const hexValue = hex.replace("#", "");

  const alpha = Math.round(opacity * 255);
  const hexAlpha = alpha.toString(16).padStart(2, "0");

  return `#${hexValue}${hexAlpha}`;
};
