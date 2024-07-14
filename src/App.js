import "./App.css";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./features/Header/Header";
import UseMemoEx from "./concepts/useMemo/index";
import UseCallbackEx from "./concepts/useCallback/parent";
import ComponentA from "./concepts/StateUplift/ComponentA";
import ClassComponentA from "./concepts/StateUpliftClassComponent/ComponentA";
import UseRef from "./concepts/UseRef";
import Timer from "./features/Timer/ParentTimer";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/usememo",
        element: <UseMemoEx />,
      },
      {
        path: "/usecallback",
        element: <UseCallbackEx />,
      },
      {
        path: "/stateUplift",
        element: <ComponentA />,
      },
      {
        path: "/stateUpliftClass",
        element: <ClassComponentA />,
      },
      {
        path: "/useRef",
        element: <UseRef />,
      },
      {
        path: "/timer",
        element: <Timer />,
      },
    ],
  },
]);

export default App;
