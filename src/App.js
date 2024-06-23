import "./App.css";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./features/Header/Header"
import Counter from './features/counter/Counter'
import UseMemoEx from './concepts/useMemo/index'
import UseCallbackEx from './concepts/useCallback/parent';
import ComponentA from "./concepts/StateUplift/ComponentA";
import ClassComponentA from "./concepts/StateUpliftClassComponent/ComponentA";
import Pagination from "./features/Pagination/Pagination.js";
import UseRef from './concepts/UseRef'
import Accordian from "./features/Accordian/Accordian.js";

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
        path:'/pagination',
        element:<Pagination/>,
        errorElement:<>Error fallback page</>
      },
      {
        path: '/counter',
        element: <Counter/>,
        errorElement:<>Error fallback page</>
      },
      {
        path:'/usememo',
        element: <UseMemoEx/>
      },
      {
        path:'/usecallback',
        element: <UseCallbackEx/>
      },
      {
        path:'/stateUplift',
        element:<ComponentA/>
      },
      {
        path:'/stateUpliftClass',
        element:<ClassComponentA/>
      },
      {
        path:'/useRef',
        element:<UseRef/>
      },
      {
        path:'/accordian',
        element:<Accordian/>,
        errorElement:<>Error fallback page</>
      },
      
    ],
  },
]);

export default App;
