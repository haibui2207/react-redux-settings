import { hexToRgbA } from '@/utils';
import { BREAKPOINTS } from '@/styles';

export default {
  root: {
    position: 'relative',
    height: '100vh',
  },
  notFound: {
    maxWidth: 'max-content',
    width: '100%',
    textAlign: 'center',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    fontFamily: 'Montserrat, sans-serif',
  },
  title: {
    fontSize: 230,
    margin: 0,
    fontWeight: 900,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
  },
  subTitle: {
    color: '#000',
    fontSize: 24,
    fontWeight: 700,
    textTransform: 'uppercase',
    marginTop: 0,
  },
  description: {
    color: '#000',
    fontSize: 14,
    fontWeight: 400,
    marginBottom: 20,
    marginTop: 0,
  },
  button: {
    fontSize: 14,
    textDecoration: 'none',
    textTransform: 'uppercase',
    backgroundColor: '#0046d5',
    display: 'inline-block',
    padding: [15, 30],
    borderRadius: 40,
    color: '#fff',
    fontWeight: 700,
    boxShadow: '0px 4px 15px -5px #0046d5',
    '&:hover': {
      color: '#fff',
      textDecoration: 'none',
      backgroundColor: hexToRgbA('#0046d5', 0.8),
    },
  },

  [`@media (max-width: ${BREAKPOINTS.MAX_MD})`]: {
    title: { fontSize: '30vw' },
  },
};
