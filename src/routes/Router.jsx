import {createBrowserRouter} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import AddBlog from "../pages/AddBlog/AddBlog";
import Contact from "../pages/Contact/Contact";
import MyFavorite from "../pages/MyFavorite/MyFavorite";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import MyBlog from "../pages/MyBlogs.jsx/MyBlogs";
import UpdateBlog from "../pages/UpdateBlog/UpdateBlog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: ()=> fetch(`http://localhost:5000/blogs`)
        },
        {
          path: '/addBlog',
          element: <PrivateRoute><AddBlog></AddBlog></PrivateRoute>
        },
        {
          path: '/blog-details/:id',
          element: <PrivateRoute><BlogDetails></BlogDetails> </PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/blog-details/${params.id}`)
        },
        {
          path: '/blogs/:userId',
          element: <PrivateRoute><MyBlog></MyBlog></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/myblogs/${params.userId}`)
        },
        {
          path: '/storeBlog/:email',
          element: <PrivateRoute><MyFavorite></MyFavorite></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/storedBlogs/${params.email}`)
        },
        {
          path: '/updateBlog/:id',
          element: <PrivateRoute><UpdateBlog></UpdateBlog></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/blog-details/${params.id}`)
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>

        },
        {
          path: '/contact',
          element: <Contact></Contact>

        }
      ]
    },
  ]);

  export default router;