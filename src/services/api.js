import localStorage from '@/services/localStorage';
import { DOMAIN, FETCHING_TIMEOUT } from '@/configs';

const buildURL = (path) => [DOMAIN, path].join('/');

const generateOptions = (customOptions) => {
  const defaultOptions = {
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  const token = localStorage.getItem('token');
  if (token) {
    defaultOptions.headers.Authorization = `Bearer ${token}`;
  }

  return { ...defaultOptions, ...customOptions };
};

const fetchWithTimeout = (args, timeout = FETCHING_TIMEOUT) => Promise.race([
  fetch(...args),
  new Promise((_, rj) => setTimeout(() => rj(new Error('Timeout')), timeout)),
]);

const handleResponse = (response) => {
  if (!response.ok) {
    return Promise.reject(response);
  }

  return response.json();
};

/**
 * @function apiGet
 * @description Make a GET request.
 * @param {string} path
 * @param {object} body
 * @param {object} options
 * @returns {promise}
 */
const apiGet = (path, body, options = {}) => fetchWithTimeout(
  [
    buildURL(path),
    generateOptions({
      ...options,
      method: 'GET',
      body: !options.keepBody ? JSON.stringify(body) : body,
    }),
  ],
  options.timeout,
).then(handleResponse).catch(handleResponse);

/**
 * @function apiPost
 * @description Make a POST request.
 * @param {string} path
 * @param {object} body
 * @param {object} options
 * @returns {promise}
 */
const apiPost = (
  path,
  body,
  options = { keepBody: false, timeout: undefined },
) => fetchWithTimeout(
  [
    buildURL(path),
    generateOptions({
      ...options,
      method: 'POST',
      body: !options.keepBody ? JSON.stringify(body) : body,
    }),
  ],
  options.timeout,
).then(handleResponse).catch(handleResponse);

/**
 * @function apiPut
 * @description Make a PUT request.
 * @param {string} path
 * @param {object} body
 * @param {object} options
 * @returns {promise}
 */
const apiPut = (
  path,
  body,
  options = { keepBody: false, timeout: undefined },
) => fetchWithTimeout(
  [
    buildURL(path),
    generateOptions({
      ...options,
      method: 'PUT',
      body: !options.keepBody ? JSON.stringify(body) : body,
    }),
  ],
  options.timeout,
).then(handleResponse).catch(handleResponse);

/**
 * @function apiDelete
 * @description Make a DELETE request.
 * @param {string} path
 * @param {object} body
 * @param {object} options
 * @returns {promise}
 */
const apiDelete = (
  path,
  body,
  options = { keepBody: false, timeout: undefined },
) => fetchWithTimeout(
  [
    buildURL(path),
    generateOptions({
      ...options,
      method: 'DELETE',
      body: !options.keepBody ? JSON.stringify(body) : body,
    }),
  ],
  options.timeout,
).then(handleResponse).catch(handleResponse);

/**
 * @function apiPatch
 * @description Make a PATCH request.
 * @param {string} path
 * @param {object} body
 * @param {object} options
 * @returns {promise}
 */
const apiPatch = (
  path,
  body,
  options = { keepBody: false, timeout: undefined },
) => fetchWithTimeout(
  [
    buildURL(path),
    generateOptions({
      ...options,
      method: 'PATCH',
      body: !options.keepBody ? JSON.stringify(body) : body,
    }),
  ],
  options.timeout,
).then(handleResponse).catch(handleResponse);

export default {
  get: apiGet,
  post: apiPost,
  put: apiPut,
  delete: apiDelete,
  patch: apiPatch,
};
