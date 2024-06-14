import './global.css';
import ReactDOM from 'react-dom/client';
import { lazy, Suspense } from 'react';
import { store } from './redux/store.ts';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { deleteFavoriteAction } from './api/deleteFavoriteAction.ts';

const App = lazy(() => import('./App.tsx'));
const ProductList = lazy(() => import('./views/productList/ProductList.tsx'));
const GenderPage = lazy(() => import('./views/genderPage/GenderPage.tsx'));
const HomePage = lazy(() => import('./views/homePage/HomePage.tsx'));
const Favorites = lazy(() => import('./views/favorites/Favorites.tsx'));
const ProductCard = lazy(() => import('./views/productCard/ProductCard.tsx'));

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/delete-from-favorite/:favoriteId',
    action: deleteFavoriteAction,
  },
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: '/:gender?',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <GenderPage />
          </Suspense>
        ),
      },
      {
        path: '/:gender/:category/:subcategory?',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProductList />
          </Suspense>
        ),
      },
      {
        path: '/favorites',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Favorites />,
          </Suspense>
        ),
      },
      {
        path: '/:gender/:category/:subcategory/:productId',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProductCard />,
          </Suspense>
        ),
      },
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
