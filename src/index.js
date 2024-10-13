import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Home from './pages/home';
// import About from './pages/about';
// import Course from './pages/course';
// import Blog from './pages/blog';
// import BlogDetails from './pages/blogDetails';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Error404 from './pages/Error404';


const root = ReactDOM.createRoot(document.getElementById('root'));
// let allRouts= createBrowserRouter(
//     [
//       {
//         path: '/',
//         element: <Home />,
//       },
//       {
//         path: '/about',
//         element: <About/>
//       },
//       {
//         path: '/course',
//         element: <Course/>
//       },
//       {
//         path: '/blog',
//         element: <Blog/>
//       },
//       {
//         path: '/blog/:id',
//         element: <BlogDetails/>
//       },
//       {
//         path: '*',
//         element: <Error404/>
//       }
//     ]
//   )

root.render(
  <React.StrictMode>
    {/* <RouterProvider router={allRouts}/> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
