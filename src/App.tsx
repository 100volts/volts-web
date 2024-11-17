import { useState } from 'react'
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "./main-nav"
import './App.css'
import { Button } from './components/ui/button';

const Home = () => (
  <>
    <div>
      <h1>Home</h1>
      <a>Home</a>
      <h1 className="text-3xl font-bold underline">
      Hello world!
      <div>
      <Button>Click me</Button>
    </div>
    </h1>
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
      <h1>Login</h1>
      <a>Login</a>
    </div>
  </>
);

const Layout = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
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
  const [count, setCount] = useState(0)

  return (
     <RouterProvider router={router} />
  )
}

export default App
