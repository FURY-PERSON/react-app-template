import { 
  createHashRouter,
  createBrowserRouter,
  RouterProvider } from "react-router-dom";
import NotFoundPage from "@pages/NotFoundPage/NotFoundPage";
import ErrorPage from "@pages/ErrorPage/ErrorPage";
import LoginPage from "@pages/LoginPage/LoginPage";
import { ROUTES } from "@constants/routes";

const router = createHashRouter([
  {
    path: ROUTES.Login,
    element: <LoginPage />,
    errorElement: <ErrorPage />
  },
  {
    path: ROUTES.NotFound,
    element: <NotFoundPage />,
/*     loader: async () => {
      const p = () => new Promise((res) => {
        setTimeout(() => res('aaa'), 2000);
      })
      const result = await p();

      if(!p) {
        redirect('/404')
      }

      return {data: result}
    }, */
    errorElement: <ErrorPage />
  },
  {
    path: ROUTES.Any,
    element: <NotFoundPage/>
  }
]);


const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default AppRouter;