import { QueryClient, QueryClientProvider } from 'react-query';
import RoutesComponent from './routes/componentsRoutes';

function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <RoutesComponent />
        </QueryClientProvider>
    );
}

export default App;