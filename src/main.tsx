import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// pages
import Home from './route/Home.tsx'
import Mapa from './route/Mapa.tsx'
import NeedHelp from './route/NeedHelp.tsx'
import Forum from './route/Forum.tsx'
import Post from './route/Post.tsx'
import LoginUser from './route/LoginUser.tsx'
import LoginAdmin from './route/LoginAdmin.tsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/mapa",
        element: <Mapa/>
      },
      {
        path: "/testes",
        element:  <Mapa/>
      },
      {
        path:"/preciso-ajuda",
        element: <NeedHelp/>
      },
      {
        path:"/vozes-noticias",
        element: <Forum/>
      },
      {
        path:"/vozes-noticias/:id",
        element: <Post/>
      },
      {
        path: "/login-user",
        element: <LoginUser/>
      },
      {
        path: "/login-admin",
        element: <LoginAdmin/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
