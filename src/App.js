import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './components/Layout/Main';
import QuizPage from './components/QuizPage/QuizPage';
import QuizBox from './components/QuizBox/QuizBox';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <QuizBox></QuizBox>
        },
        {
          path: "/topics",
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <QuizBox></QuizBox>
        },
        {
          path: "/topics/:Id",
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.Id}`)
          },
          element: <QuizPage></QuizPage>
        },
        {
          path: "/stat",
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Statistics></Statistics>
        },
        {
          path: "/blog",
          element: <Blog></Blog>
        },
        {
          path: "*",
          element: <Error></Error>
        },
      ]
    },
    {
      path: "*",
      element: <Error></Error>
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
