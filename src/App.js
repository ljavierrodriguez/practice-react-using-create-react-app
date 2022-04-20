import logo from './logo.svg';
import './App.css';
import { FaBootstrap, FaReact, FaTractor } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import Swal from 'sweetalert2';
import { toast, ToastContainer } from 'react-toastify';

import style from './styles/style.module.css';
import List from './components/List';
import ListItem from './components/ListItem';
import Button from './components/Button';

import clip from './sounds/Blop.mp3';

function App() {
  const notify = () => toast("Wow so easy!");

  let audio = new Audio(clip);
  //let audio = useRef();

  useEffect(() => {
    /* Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    ) */

    /* Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="">Why do I have this issue?</a>'
    }) */

    /* Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    }) */
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo animate__animated animate__fadeInDown" alt="logo" />
        <p className={style.warning}>
          Edit <code>src/App.js</code> and save to reload. <FaBootstrap />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React <FaReact />
          <FaTractor />
        </a>
        <button className="btn btn-success" onClick={notify}>Click</button>

        <List>
          <ListItem>
            Java
          </ListItem>
          <ListItem>
            Python
          </ListItem>
        </List>


        <Button className="btn btn-primary" onClick={() => { audio.play() }}>
          Hola has click aqui
        </Button>

        <Button className="btn btn-success" onClick={() => { audio.play() }}>
          Hola has click aqui 2
        </Button>

      </header>
      <ToastContainer />
      {/* <audio ref={t => audio = t} src={clip} controls></audio> */}
    </div>
  );
}

export default App;
