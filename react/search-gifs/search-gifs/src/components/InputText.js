const InputText = ({ ...props }) => {
  return (
    <div className="inputText">
      <input type="text" {...props} />
    </div>
  );
};

export default InputText;
