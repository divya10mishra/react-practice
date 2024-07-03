import "./App.css";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./features/Header/Header";
import Calculator from "./features/calculator/Calculator";
import { Provider } from "react-redux";
import store from "./Store/store";

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
        path: "/calculator",
        element: <Calculator />,
        errorElement: <>Error fallback page</>,
      },
    ],
  },
]);

export default App;
