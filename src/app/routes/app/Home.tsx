import { HeadingSmall } from "../../../components/texts/Heading";
import Menu from "../../../components/ui/menu/Menu";

function Home() {
  return (
    <main className="flex flex-col gap-2 p-2">
      <HeadingSmall />
      <div className="flex-1 flex gap-2">
        <Menu />
        <div className="flex-1">Home</div>
      </div>
    </main>
  );
}

export default Home;
