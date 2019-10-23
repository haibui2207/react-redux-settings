import hexToRgbA from '../utils/hexToRgbA';
import COLORS from './colors';

const { white, black } = COLORS;

const primary = '#6e8efb';
const secondary = '#a777e3';
const transition = 'all 0.5s ease';
const boxShadow = '0px 10px 10px rgba(0,0,0,0.2);';

export default {
  color: {
    ...COLORS,
    primary,
    secondary,
    white30: hexToRgbA(white, 0.3),
    white50: hexToRgbA(white, 0.5),
    white70: hexToRgbA(white, 0.7),
    black30: hexToRgbA(black, 0.3),
    black50: hexToRgbA(black, 0.5),
    black70: hexToRgbA(black, 0.7),
  },
  transition,
  boxShadow,
};
