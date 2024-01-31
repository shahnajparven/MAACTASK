import { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Spinner from "./component/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Navbar from "./component/Navbar";

function App() {
  const dispatch = useDispatch();
  const { isLoading, error, message, isLoggedIn,status } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success('success');
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message, isLoggedIn,status]);

  return (
    <>
      {isLoading ? (
        <p> Loading</p>
      ) : (
        <>
        <Navbar/>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route index element={<Home />} />
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
}

export default App;