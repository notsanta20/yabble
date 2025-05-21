import ErrorText from "../../../components/errors/ErrorText";
import { HeadingSmall } from "../../../components/texts/Heading";

function Error() {
  return (
    <main className="flex flex-col gap-2 p-2 h-dvh">
      <HeadingSmall />
      <div className="flex-1 flex justify-center items-center">
        <ErrorText />
      </div>
    </main>
  );
}

export default Error;
