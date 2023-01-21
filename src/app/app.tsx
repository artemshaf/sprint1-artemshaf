// import { AppRouter } from './components/business';
import { AppRouter } from './components';
import { withLayout } from './components/layout';

const App = () => <AppRouter />;

export const AppWithLayout = withLayout(App);
