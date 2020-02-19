import api from '@/services/api';

export const signIn = (body) => api.post('login', body);

export default { signIn };
