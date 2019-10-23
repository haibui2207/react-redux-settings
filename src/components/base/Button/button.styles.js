import { THEME } from '../../../constants';

const btnDefaultAttribute = {
  alignItems: 'center',
  border: 'none',
  borderRadius: 9999,
  cursor: 'pointer',
  display: 'inline-flex',
  flex: 'none',
  fontSize: 20,
  height: 52,
  justifyContent: 'center',
  maxWidth: 200,
  position: 'relative',
  textAlign: 'center',
  textDecoration: 'none',
  textTransform: 'uppercase',
  transition: 'all 0.5s ease',
  userSelect: 'none',
  width: '100%',
  '&:focus': { outline: 'none' },
};

const btnHoverEffect = {
  '&:before, &:after': {
    background: 'inherit',
    borderRadius: 'inherit',
    content: '""',
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    transition: 'inherit',
    width: '100%',
    zIndex: -1,
  },
  '&:after': { opacity: 0.5 },
  '&:hover': {
    boxShadow: THEME.boxShadow,
    textDecoration: 'none',
    transform: 'translateY(-3px)',
    '&:after': {
      opacity: 0,
      transform: 'scale(1.3, 1.5)',
    },
  },
};

const renderButton = (color, background, border = false) => ({
  color,
  background,
  border: !border ? 'none' : `3px solid ${color}`,
});

export default {
  root: {
    extend: [btnDefaultAttribute, btnHoverEffect],
  },
  default: {
    ...renderButton(THEME.color.black70, THEME.color.white, true),
  },
  primary: {
    ...renderButton(THEME.color.white, THEME.color.primary),
  },
  secondary: {
    ...renderButton(THEME.color.white, THEME.color.secondary),
  },
  gradient: {
    ...renderButton(
      THEME.color.white,
      `
        linear-gradient(135deg,${THEME.color.primary}, ${THEME.color.secondary})
      `,
    ),
  },
};
