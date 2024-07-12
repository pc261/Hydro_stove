import { createBrowserRouter, createRoutesFromChildren, RouterProvider } from "react-router-dom"
import {ThemeProvider} from "styled-components"

import {Home} from './pages/Home'
import {Funcionamento} from "./pages/Funcionamento"

import {theme} from "./styles/theme.js"

import {GlobalStyle} from "./styles/global.js"
import {Grupo} from "./pages/Grupo.jsx"
import { Materiais } from "./pages/Materiais.jsx"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
    {
      path: '/funcionamento',
      element: <Funcionamento />,
    },
    {
      path: '/grupo',
      element: <Grupo/>,
    },
    {
      path: "/materiais",
      element: <Materiais/>
    }
])

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <GlobalStyle/>
    </ThemeProvider>
  ) 
}
