import { BrowserRouter } from "react-router-dom";

import AnimatedRoutes from "./components/AnimatedRoutes";

function Root() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default Root;
