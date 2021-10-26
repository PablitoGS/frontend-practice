const Gif = ({ title, url }) => {
  return (
    <div>
      <h4>{title}</h4>
      <img src={url} alt="" />
    </div>
  );
};

export default Gif;
