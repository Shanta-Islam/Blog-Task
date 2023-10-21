import {createBrowserRouter} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MyCart from "../pages/MyCart/MyCart";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/addProduct",
          element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
        },
        {
          path: '/product/:brand_name',
          element: <Products></Products>,
          loader: ({params})=> fetch(`http://localhost:5000/product/${params.brand_name}`)
        },
        {
          path: '/product-details/:id',
          element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/product-details/${params.id}`)
        },
        {
          path: '/storeProduct/:email',
          element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/storeProduct/${params?.email}`)
        },
        {
          path: '/update/:id',
          element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/product-details/${params.id}`)
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>

        }
        
        
      ]
    },
  ]);

  export default router;