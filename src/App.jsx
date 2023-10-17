import {createBrowserRouter,RouterProvider,Route} from "react-router-dom"
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";

const router = createBrowserRouter([
  {
     path: "/", element: <span> Hello World ! </span> },
   { path: "/category/:name", element: <Products/> },
   { path: "/product/:name", element : <Product/>},

]);


function App() {
  return (
    <>
    <div>
      <RouterProvider router={router} />
    </div>
    </>
  )
}

export default App
