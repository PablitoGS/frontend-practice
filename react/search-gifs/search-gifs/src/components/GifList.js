const GifList = ({ gifs }) => {
  return (
    <div className="gifList">
      {gifs.map(({ title, url }, index) => (
        <img key={index} alt={title} src={url} />
      ))}
    </div>
  );
};

export default GifList;
