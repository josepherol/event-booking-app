import { Navigate, Route, Routes } from "react-router-dom";
// import HomeLayout from "./layout/homeLayout/HomeLayout.jsx";

import Home from "./pages/home/Home.jsx";
import Login from "./pages/auth/login/Login.jsx";
import Register from "./pages/auth/register/Register.jsx";
import Details from "./pages/details/Details.jsx";

import { Toaster } from "react-hot-toast";
import Events from "./pages/events/Events.jsx";
// import { useQuery } from "@tanstack/react-query";
// import Loading from "./components/common/Loading.jsx";

function App() {
  // const { data: authUser, isLoading } = useQuery({
  //   queryKey: ["authUser"],
  //   queryFn: async () => {
  //     try {
  //       const res = await fetch("/api/auth/me");
  //       const data = await res.json();
  //       if (data.error) return null;
  //       if (!res.ok) {
  //         throw new Error(data.error || "Something went wrong");
  //       }
  //       console.log("authUser is here:", data);
  //       return data;
  //     } catch (error) {
  //       throw new Error(error);
  //     }
  //   },
  //   retry: false,
  // });

  // if (isLoading) {
  //   return (
  //     <div className="h-screen flex justify-center items-center">
  //       <Loading size="lg" />
  //     </div>
  //   );
  // }

  const authUser = true;

  return (
    <>
      {/* <HomeLayout /> */}
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!authUser ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!authUser ? <Register /> : <Navigate to="/" />}
        />
        <Route
          path="/events"
          element={<Events />}
        />
        <Route path="/details/:eventId" element={<Details />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
