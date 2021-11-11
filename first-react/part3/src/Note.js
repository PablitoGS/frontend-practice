//export nombrado
export const Note = ({ color, capacity, registration }) => {
  return (
    <li>
      <p>{color}</p>
      <p>{capacity}</p>
      <p>{registration}</p>
    </li>
  );
};

export default Note;
