import "./App.css";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./features/Header/Header";
import Registration from "./features/RegistrationForm/Registration.tsx";
import Login from "./features/LoginForm/Form.tsx";

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
        path: "/registration",
        element: <Registration />,
        errorElement: <>Error fallback page</>,
      },
      {
        path: "/login",
        element: <Login />,
        errorElement: <>Error fallback page</>,
      },
    ],
  },
]);

export default App;
