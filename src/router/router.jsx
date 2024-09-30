import { createBrowserRouter } from 'react-router-dom'
import About from '../pages/About'
import Interest from '../pages/Interest'
import Skills from '../pages/Skills'
import Awards from '../pages/Awards'
import Experience from '../pages/Experience'
import ErrorPage from '../pages/ErrorPage'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/interest',
        element: <Interest />,
      },
      {
        path: '/skills',
        element: <Skills />,
      },
      {
        path: '/awards',
        element: <Awards />,
      },
      {
        path: '/experience',
        element: <Experience />,
      },
    ],
  },
])

export default router