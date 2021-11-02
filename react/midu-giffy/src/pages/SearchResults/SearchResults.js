import UseGifs from "../../hooks/UseGifs";
import ListOfGifs from "../../components/ListOfGifs";

const SearchResults = ({ params }) => {
  const { search } = params;
  const { loading, gifs } = UseGifs({ search });

  if (loading) return <i>Cargando...</i>;

  return (
    <>
      <h2>{search}</h2>
      <ListOfGifs gifs={gifs} />
    </>
  );
};

export default SearchResults;
