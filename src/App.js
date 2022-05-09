import './App.css';
import Nav from './components/Nav';
import ContentWrapper from './components/ContentWrapper';
import Footer from './components/Footer';
import { useSelector, useDispatch, connect } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode);

  const toggleMode = () => {
    mode.darkMode ? dispatch(lightMode()) : dispatch(darkMode());
  };

  return (
    <div
      style={{ backgroundColor: mode.color1, color: mode.color }}
      className='App'
    >
      <Nav />
      <ContentWrapper />
      <Footer />
    </div>
  );
}

export default App;
