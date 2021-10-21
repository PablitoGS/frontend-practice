const GifList = ({ gifs, alt }) => {
  return (
    <div className="gifList">
      {gifs.map((gif, index) => (
        <img key={index} alt={alt} src={gif} />
      ))}
    </div>
  );
};

export default GifList;
