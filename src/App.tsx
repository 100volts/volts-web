import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "./main-nav"
import './App.css'
//import { WorkplaceApp } from "./workplace/workapp"
import UserLogin from "./workplace/UserLogin"
import HomeScreen from "./home/Home"

const Home = () => (
  <>
    <div>
      <HomeScreen/>
    </div>
  </>
);

const Workspace = () => (
  <>
    <div>
      <h1>Worlplace</h1>
      <a>Workplase</a>
      
    </div>
  </>
);
//<WorkplaceApp/>
const ProfilePage = () => (
  <>
    <div>
      <h1>Profile</h1>
      <a>ProfilePage</a>
    </div>
  </>
);

const Login = () => (
  <>
    <div>
      <UserLogin client:only/>
    </div>
  </>
);

const Layout = () => (
  <div className="min-h-screen bg-background">
    <Navbar/>
    <div className="container mx-auto px-4 py-8">
      <Outlet />
    </div>
  </div>
);

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "workspace", element: <Workspace /> },
    ],
  },
]);

function App() {
  return (
     <RouterProvider router={router} />
  )
}

export default App
