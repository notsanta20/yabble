import { HeadingLarge } from "../../components/texts/Heading";
import { ButtonLarge } from "../../components/ui/buttons/Button";
import IntroText from "../../components/texts/IntroText";

function Landing() {
  return (
    <main className="flex flex-col h-screen p-3">
      <HeadingLarge />
      <div className="flex-1 flex justify-center items-center">
        <ButtonLarge url="/signup" name="GET STARTED" />
      </div>
      <IntroText />
    </main>
  );
}

export default Landing;
