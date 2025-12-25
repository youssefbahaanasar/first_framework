import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css'
import Layout from './Layout/Layout'
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';

function App() {
const routers= createBrowserRouter([
  {path:'/',element:<Layout/>,children:
    [
    {index:true,element:<Home/>},
    {path:'about',element:<About/>},
    {path:'portfolio',element:<Portfolio/>},
    {path:'contact',element:<Contact/>},
    {path:'/*',element:<NotFound/>},
    ]
  }
]);
return <>
    <RouterProvider router={routers}></RouterProvider>
  </>
}

export default App
