export const useLogger = () => {
  const logger = (message: string) => {
    return console.log(message);
  };

  return {
    logger,
  };
};
