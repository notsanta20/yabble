function ButtonFunc({
  text,
  callback,
  page,
}: {
  text: string;
  callback?: Function;
  page?: string;
}) {
  return (
    <button
      className={
        "font-[Syncopate] text-white text-xs font-bold p-3 rounded-2xl border-2 border-(--glass-border-light)" +
        (callback ? " hover:bg-(--glass-fill-light) cursor-pointer" : "") +
        (page === text ? " bg-(--glass-fill-dark)" : "")
      }
      onClick={(e) => {
        callback && callback(e);
      }}
    >
      {text}
    </button>
  );
}

export default ButtonFunc;
