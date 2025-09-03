export const srcset = (image: string, size = 1, rows = 1, cols = 1) => {
  if (size > 1)
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  else
    return {
      srcSet: `${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`,
      src: `${image}?w=164&h=164&fit=crop&auto=format`,
    };
};
