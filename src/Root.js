import { BrowserRouter } from "react-router-dom";
import "./scss/main.scss";

import AnimatedRoutes from "./components/AnimatedRoutes";

function Root() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default Root;
