import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';

import { ROUTES } from '@constants/routes';
import ErrorPage from '@pages/ErrorPage/ErrorPage';
import LoginPage from '@pages/LoginPage/LoginPage';
import NotFoundPage from '@pages/NotFoundPage/NotFoundPage';

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
    element: <NotFoundPage />
  }
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
