import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { 
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Wheather dark mode is enabled or not

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
// 
//   const removeBodyClasses = () => {
//     document.body.classList.remove('bg-light', 'bg-dark', 'bg-danger', 'bg-warning', 'bg-success', 'bg-primary')
//   }

  const toggleMode = () => {
    if(mode === 'light'){
      // removeBodyClasses();
      // console.log('primary')
      // document.body.classList.add('bg-'+cls)
      setMode('dark');
      document.body.style.backgroundColor= '#042743'
      showAlert('Dark mode enabled', 'success')
      // document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now'
      // }, 1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor= 'white'
      showAlert('Light mode enabled', 'success')
      // document.title = 'TextUtils - Light Mode'
    }
  }

  return (
    <>
    <Router>
    <Navbar title="Textutils"  mode={mode} toggleMode={toggleMode}/>   
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
        <Route exact path="/about" element={<About mode={mode}/>}/>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word counter, Character counter, Remove extra spaces" mode={mode} />}/>
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
