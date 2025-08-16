import { Route, Routes } from "react-router-dom";
import "./assets/tailwind.css";
import React from "react";
import { Suspense } from "react";

const Error401 = React.lazy(() => import("./pages/Error401"))
// import Error401 from "./pages/Error401";
const Error403 = React.lazy(() => import("./pages/Error403"))
// import Error403 from "./pages/Error403";
const Error404 = React.lazy(() => import("./pages/Error404"))
// import Error404 from "./pages/Error404";

const NotFound = React.lazy(() => import("./pages/NotFound"))
// import NotFound from "./pages/NotFound";
const MainLayout = React.lazy(() => import("./layouts/MainLayout"))
// import MainLayout from "./layouts/MainLayout";
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"))
// import AuthLayout from "./layouts/AuthLayout";
const Login = React.lazy(() => import("./layouts/auth/Login"))
// import Login from "./layouts/auth/Login";
const Register = React.lazy(() => import("./layouts/auth/Register"))
// import Register from "./layouts/auth/Register";
const Forgot = React.lazy(() => import("./layouts/auth/Forgot"))
// import Forgot from "./layouts/auth/Forgot";
const Loading = React.lazy(() => import("./components/Loading"));


import Portofolio from "./pages/Portofolio";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Favorites from "./pages/Favorites";
import Kontak from "./pages/Kontak";
import DetailProjects from "./pages/DetailProjects";




function App() {
  return (
    <Suspense fallback={<Loading />}>
      <main className="flex-1">

        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Portofolio />} />

            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/projects/:categoryId/:projectId" element={<DetailProjects />} />
            <Route path="/Favorites" element={<Favorites />} />
            <Route path="/Kontak" element={<Kontak />} />


            {/* Error Routes */}

            <Route path="*" element={<NotFound />} />
            <Route path="/Error401" element={<Error401 />} />
            <Route path="/Error403" element={<Error403 />} />
            <Route path="/Error404" element={<Error404 />} />
          </Route>


          <Route element={<AuthLayout />}>
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Forgot" element={<Forgot />} />
          </Route>
        </Routes>
      </main>
    </Suspense>


  );
}

export default App;
