import { HeadingLarge } from "../../components/texts/Heading";
import IntroText from "../../components/texts/IntroText";

function Landing() {
  return (
    <main className="flex flex-col h-screen p-3">
      <HeadingLarge />
      <button className="flex-1">Get Started</button>
      <IntroText />
    </main>
  );
}

export default Landing;
