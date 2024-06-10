import { RouterProvider, createBrowserRouter, useLocation } from "react-router-dom";
import Background from "./components/backgroud/Background"
import NavBar from "./components/navbar/NavBar"
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";


const router = createBrowserRouter([
  {
    path: "/",
    element: <About></About>,
  },
  {
    path: "/projects",
    element: <Projects></Projects>
  },
  {
    path: "/bg",
    element: <Background></Background>
  }
]);

function App() {
  const pathname = window.location.pathname;

  return (
    <>
      {/* <NavBar></NavBar> */}
      {pathname !== "/bg" && <NavBar />}
      <div className="router">
        <RouterProvider router={router}/>
      </div>
      <Background></Background>
    </>
  )
}

export default App
