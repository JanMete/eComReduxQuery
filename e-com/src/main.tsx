import ReactDOM from 'react-dom/client';
import './index.css';
import { store } from './store.ts';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout.tsx';
import MainPage from './views/mainPage/MainPage.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import ProductList from './views/ProductList/ProductList.tsx';
// import { mainPageLoader } from './api/mainPageLoader.ts';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: '/:gender?',
        element: <MainPage />,
        // loader: mainPageLoader,
      },
      // {
      //   path: '/:gender/:category/:subcategory?',
      //   element: <ProductList />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </QueryClientProvider>
);
