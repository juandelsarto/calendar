export const getContrastedFontColor = (color: string): string => {
  const arrColor = color.replace('#', '').match(/.{1,2}/g);

  if (!arrColor) return '#ffffff';

  const redCode = parseInt(arrColor[0], 16) * 0.299;
  const greenCode = parseInt(arrColor[1], 16) * 0.587;
  const blueCode = parseInt(arrColor[2], 16) * 0.114;

  return redCode + greenCode + blueCode > 186 ? '#1b1b1b' : '#ffffff';
};
