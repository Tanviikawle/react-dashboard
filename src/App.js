import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import MainDashboard from "./components/MainDashboard/MainDashboard";

function App() {
  return (
    <div className="App d-flex">
    <div className="row rowBody">
      <div className="col-lg-1 col-md-2"><Sidebar /></div>
      <div className="col-lg-11 col-md-10 p-0 pt-3"><MainDashboard />
    </div>
    </div>
    </div>
  );
}

export default App;
