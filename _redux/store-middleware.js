export const logger = store => next => action => {
  return next(action);
};

export const errorMiddleware = store => next => action => {
  try {
    return next(action);
  } catch (err) {
    console.error('REDUX: MIDDLEWARE: ERROR', err);
    throw err;
  }
};