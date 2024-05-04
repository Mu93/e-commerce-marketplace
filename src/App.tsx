import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  AboutPage,
  ContactPage,
  ErrorPage,
  HomePage,
  RootLayout,
  SignUpPage,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/about",
        element: <AboutPage />,
        children: [],
      },
      {
        path: "/contact",
        element: <ContactPage />,
        children: [],
      },
      {
        path: "/signUp",
        element: <SignUpPage />,
        children: [],
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
