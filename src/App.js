import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import Blog from "./components/Blog/Blog";
import Quiz from "./components/Quiz/Quiz";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () =>
            fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>,
        },
        {
          path: "statistics",
          element: <Statistics></Statistics>,
        },
        {
          path: "blog",
          element: <Blog></Blog>,
        },
        {
          path: "quiz/:id",
          loader: async ({ params }) =>
            fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element: <Quiz></Quiz>,
        },
      ],
    },
    {
      path: "*",
      element: <div>404, not found!</div>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
