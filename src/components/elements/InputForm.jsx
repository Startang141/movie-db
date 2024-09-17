const InputForm = (props) => {
  const { onChange } = props;
  return (
    <>
      <input
        className="w-1/2 xl:w-1/4 py-2 px-3 rounded-lg mt-10"
        type="text"
        placeholder="Cari Film Kesukaanmu"
        onChange={onChange}
      />
    </>
  );
};

export default InputForm;
