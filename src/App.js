import TodoContextProvider from './components/contexts/TodoContext';
import Routes from './Routes/Routes'

function App() {
  return (
    <TodoContextProvider>
      <Routes />
    </TodoContextProvider>
  );
}

export default App;
