import UserRoot from "../pages/user/UserRoot";
import Register from "../pages/user/Register";
import Login from "../pages/user/Login";
import Projects from "../pages/user/Projects";
import PostProject from "../pages/user/PostProject";

const routes = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        path: "/",
        element: <Projects />,
      },
      {
        path: "/postblog",
        element: <PostProject />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      }
      ,
      {
        path: "/users",
        element: <users/>,
      }
    ],
  }
  
];

export default routes;