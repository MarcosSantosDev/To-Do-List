import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import ToDoList from './components/context/ToDoList/ToDoList';

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {},
    queries: {
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
