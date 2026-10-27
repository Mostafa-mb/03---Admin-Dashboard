import { RouterProvider, ScrollRestoration } from "react-router";
import router from "./routes";

function App() {
  return (
    <RouterProvider router={router}>
      <ScrollRestoration></ScrollRestoration>
    </RouterProvider>
  );
}

export default App;
