import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import ToDoList from '@/components/context/ToDoList/ToDoList';

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {},
    queries: {
      staleTime: 1 * 60 * 1000, // default stale
      cacheTime: 1 * 60 * 1000, // default 5 minutos
      // refetchOnWindowFocus: false, // default true
    },
  },
});

function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToDoList />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default Layout;
