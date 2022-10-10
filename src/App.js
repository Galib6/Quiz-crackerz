import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './components/Components/Layout/Main';
import QuizPage from './components/Components/QuizPage/QuizPage';
import QuizBox from './components/QuizBox/QuizBox';

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


      ]
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
