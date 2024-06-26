import "./App.css";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./features/Header/Header"
import Counter from './features/counter/Counter'


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
        path:'/counter',
        element:<Counter/>,
        errorElement:<>Error fallback page</>
      }
    ],
  },
]);

export default App;
