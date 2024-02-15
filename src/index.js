import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,RouterProvider,Routes, createBrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import { Home, Login } from '@mui/icons-material';
import HomePage from './pages/HomePage';
import LoginPage from './pages/Login';
import PatientLoginPage from './pages/PatientLoginPage';
import AdminPage from './pages/AdminPage';
import DoctorPage from './pages/DoctorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
          path : '/',
          element : <HomePage/>
      }
    ]
  },
  {
    path : '/login',
    element : <LoginPage/>
  },
  {
    path : '/patient_login',
    element : <PatientLoginPage/>
  },
  {
    path : '/admin/:id',
    element : <AdminPage/>
  },
  {
    path : '/doctor/:id',
    element : <DoctorPage/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
        <Routes>
            <Route path = '/' element = {<Layout/>}>
              <Route index element = {<HomePage/>}></Route>  
            </Route>
            <Route exact path = '/login' element={<LoginPage/>}></Route>
            <Route path = '/patient_login' element={<PatientLoginPage/>}></Route>
            <Route path = '/admin' element = {<AdminPage/>}></Route>
        </Routes>
    </BrowserRouter> */}
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
