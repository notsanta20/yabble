import { Routes, Route } from "react-router";
import Landing from "./routes/Landing";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route></Route>
    </Routes>
  );
}

export default Router;
