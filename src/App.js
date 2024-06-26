import "./App.css";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./features/Header/Header"
import Accordion from "./features/Accordion/Accordion.js";

function App() {
  return (
    <div className="App">
      <Header/> 
      <Outlet/>
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      
      {
        path:'/accordion',
        element:<Accordion/>,
        errorElement:<>Error fallback page</>
      },
      
    ],
  },
]);

export default App;
