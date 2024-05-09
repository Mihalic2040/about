import { RouterProvider, createBrowserRouter } from "react-router-dom";
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
  }
]);

function App() {

  return (
    <>
      <NavBar></NavBar>
      <div className="router">
        <RouterProvider router={router}/>
      </div>
      <Background></Background>
    </>
  )
}

export default App
