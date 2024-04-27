import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Components/ErrorPage.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';
import Register from './Components/Register.jsx';
import LOgIn from './Components/LOgIn.jsx';
import AllTouristsSpot from './Components/AllTouristsSpot.jsx';
import AddTouristsSpot from './Components/AddTouristsSpot.jsx';
import MyLIst from './Components/MyLIst.jsx';
import UpdateTourists from './Components/UpdateTourists.jsx';
import Home from './Components/Home.jsx';
import Tourist from './Components/Tourist.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: () =>fetch('http://localhost:5000/tourist')
      },
      {
        path:'/register',
        element:<Register></Register>
    },
    {
      path:'/login',
      element:<LOgIn></LOgIn>
    },
    {
      path:'/allTourists',
      element:<AllTouristsSpot></AllTouristsSpot>
    },
    {
      path:'/addTourists',
      element:<AddTouristsSpot></AddTouristsSpot>
    },
    {
      path:'/allTourists',
      element:<AllTouristsSpot></AllTouristsSpot>,
      loader: () =>fetch('http://localhost:5000/tourist')
    },
    {
      path:'/myList',
      element:<MyLIst></MyLIst>
    },
    {
      path:'/updateTourists',
      element:<UpdateTourists></UpdateTourists>
    },
  {
    path:'/tourist/:id',
    element:<Tourist></Tourist>,
    loader: ({params}) =>fetch(`http://localhost:5000/tourist/${params.id}`)
  },
  {
    path:'/updateTourist/:id',
    element:<UpdateTourists></UpdateTourists>

  },

  ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
