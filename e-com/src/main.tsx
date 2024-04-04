import ReactDOM from 'react-dom/client';
import './global.css';
import { store } from './store.ts';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './views/mainPage/MainPage.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

//TODO literówka duza litera w ProductList folderze ;)
import ProductList from './views/ProductList/ProductList.tsx';
import App from './App.tsx';
// import { mainPageLoader } from './api/mainPageLoader.ts';

const queryClient = new QueryClient();

//TODO zastanów sie nad tabami zamiast spacji jako wcięcia :D

// todo router do osobnego pliku daj, tu tylko import czysciej bedzie
const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '/:gender?',
        element: <MainPage />,
        // loader: mainPageLoader,
      },
      {
        path: '/:gender/:category/:subcategory?',
        element: <ProductList />,
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
