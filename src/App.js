import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import GalleryPage from "./pages/GalleryPage";
import Home from "./pages/Home";
import Post from "./pages/Post";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/galleryPage",
      element: <GalleryPage />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/post/:id",
      element: <Post />
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
