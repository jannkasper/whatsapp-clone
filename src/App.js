import './App.css';
import Content from "./components/Content";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
        <div className="inner">
            <Sidebar />
            {/*<Home />*/}
            <Content />
        </div>
    </div>
  );
}

export default App;
