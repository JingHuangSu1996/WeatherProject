import { isEmpty, gte, compose, prop } from 'ramda';

const ErrorHandler = resObj => {
  if (resObj?.cod > 400) {
    throw resObj?.message || 'Server Error';
  }
  return resObj;
};

export { ErrorHandler };
