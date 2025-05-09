interface props {
  id: string;
  name: string;
  type: string;
  error: error | null;
}

interface error {
  message: string;
}

function Input({ id, name, type, error }: props) {
  return (
    <div className="flex flex-col gap-2 text-white font-[space_grotesk] w-[330px]">
      <label htmlFor={id} className="px-2 text-xl">
        {name}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        className="p-2 rounded-2xl border-2 border-(--glass-border-dark) bg-(--glass-fill-dark) backdrop-blur-(--glass-blur) outline-none focus:bg-(--glass-fill-white)"
      />
      <div className="px-2 text-red-400 h-[30px]">
        {error ? error.message : ""}
      </div>
    </div>
  );
}

export default Input;
