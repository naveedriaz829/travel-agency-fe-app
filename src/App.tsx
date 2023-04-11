import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Footer } from './Features/Footer/Footer';
import { Header } from './Features/Header/Header';
import { Tour } from './Features/Tour/Tour';

function App() {
  return (
    <>
      <Header /> 
      <Tour />
      <Footer />
    </>
  );
}

export default App;
