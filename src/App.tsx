import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> } />
        <Route path="*" element={ <h1>Not Found</h1> } />
      </Route>
    </Routes>
  );
}

export default App;
