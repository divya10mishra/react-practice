import "./App.css";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./features/Header/Header";
import UseMemoEx from "./concepts/useMemo/index";
import UseCallbackEx from "./concepts/useCallback/parent";
import ComponentA from "./concepts/StateUplift/ComponentA";
import ClassComponentA from "./concepts/StateUpliftClassComponent/ComponentA";
import UseRef from "./concepts/UseRef";
import ReduxUseCase from "./concepts/ReduxUseCase/reduxUseCase";
import store from "../src/store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </Provider>
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
        path: "/reduxuse",
        element: <ReduxUseCase />,
      },
    ],
  },
]);

export default App;
