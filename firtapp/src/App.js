import logo from './logo.svg'; // Đặt tên cho đường dẫn tới file "logo.svg" là logo
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/tien26200/ReactJS"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React By NEO
        </a>
      </header>
    </div>
  );
}

export default App;
//xuất ra kiểu để gọi là App
