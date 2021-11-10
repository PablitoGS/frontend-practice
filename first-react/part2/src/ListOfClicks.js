const ListOfClicks = ({ clicks }) => {
  return <span>{clicks.join(",")}</span>;
};

export default ListOfClicks;
