import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import Hoome from './pages/Hoome'
import ToliqMalumod from './pages/ToliqMalumod'
import MeinLeaut from './layout/MeinLeaut'
import Masala6 from './pages/Masala6'
import Masala5 from './pages/Masala5'
import Masala1 from './pages/Masala1'
import Masala2 from './pages/Masala2'
import Masala3 from './pages/Masala3'
import Masala4 from './pages/Masala4'
function App() {
  const router =createBrowserRouter([
    {
      path:'/',
      element:<MeinLeaut/>,
      children:[
        {
          path:'/',
          element:<Hoome/>
        },
        {
          path:'/toliq',
          element:<ToliqMalumod/>
        },
        {
          path:'/mashiq1',
          element:<Masala1/>
        },,
        {
          path:'/mashiq2',
          element:<Masala2/>
        },
        {
          path:'/mashiq3',
          element:<Masala3/>
        },
        {
          path:'/mashiq4',
          element:<Masala4/>
        },
        {
          path:'/mashiq5',
          element:<Masala5/>
        },
        {
          path:'/mashiq6',
          element:<Masala6/>
        },

      ]
    },
  ])
  return (<>
   <RouterProvider router={router}/>
  </>
  )
}

export default App
