import './App.css';
import Chat from "./components/Chat/Chat";
import Sidebar from "./components/Sidebar/Sidebar";
import Connect from "./components/Connect/Connect";

function App() {
  return (
    <div className="App">
        <div className="inner">
            <Sidebar />
            <Connect />
        </div>
    </div>
  );
}

export default App;
