const imageLoader = ({ src, width, quality }) => {
  return `https://portfolio-edxf2fg38-jabid-19.vercel.app/${src}?w=${width}&q=${
    quality || 80
  }}`;
  // return `http://localhost:3006/${src}?w=${width}&q=${quality || 100}}`;
};
export default imageLoader;
