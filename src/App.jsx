import { createBrowserRouter, RouterProvider } from "react-router-dom"
import {ThemeProvider} from "styled-components"

import {Home} from './pages/Home'
import {theme} from "./styles/theme.js"
import {Funcionamento} from "./pages/Funcionamento.jsx"

import {GlobalStyle} from "./styles/global.js"





const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />, 
  },

  {
    path: '/funcionamento',
    element: <Funcionamento/>
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
