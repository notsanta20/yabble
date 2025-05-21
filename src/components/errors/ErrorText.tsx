import { ButtonLarge } from "../ui/buttons/Button";

function ErrorText() {
  return (
    <div className="flex flex-col">
      <h1 className="text-white/25 text-9xl font-[Syncopate] font-bold text-shadow-xs/20">
        404
      </h1>
      <h2 className="text-xl text-white text-center font-[Syncopate] font-bold">
        Page not found
      </h2>
      <ButtonLarge url="/" name="back home" />
    </div>
  );
}

export default ErrorText;
