import {StarshipProvider} from './context/StarshipContext';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <StarshipProvider>
      <AppRouter/>
    </StarshipProvider>
  );
}

export default App;
