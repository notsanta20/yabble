function ButtonFunc({
  text,
  callback,
  page,
  isPending,
}: {
  text: string;
  callback?: Function;
  page?: string;
  isPending: boolean;
}) {
  return (
    <button
      className={
        "font-[Syncopate] text-white text-xs font-bold p-3 rounded-2xl border-2 border-(--glass-border-light) flex justify-center" +
        (callback ? " hover:bg-(--glass-fill-light) cursor-pointer" : "") +
        (page === text ? " bg-(--glass-fill-dark)" : "") +
        (isPending ? " w-[100px]" : "")
      }
      onClick={(e) => {
        callback && callback(e);
      }}
      disabled={isPending}
    >
      {isPending ? (
        <img
          src="/assets/loaders/spinner.svg"
          alt="loader"
          className="w-[20px] h-auto"
        />
      ) : (
        text
      )}
    </button>
  );
}

export default ButtonFunc;
