import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import routes from './routes';
import './styles/reset.css'
import './styles/styles.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="routes">
      {routes}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
