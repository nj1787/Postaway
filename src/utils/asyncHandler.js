const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

// const asyncHandler = (fn) => async (err, req, res, next) => {
//   try {
//     await fn(err, req, res, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };

// Explanation of Above Line
// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {};

export { asyncHandler };
