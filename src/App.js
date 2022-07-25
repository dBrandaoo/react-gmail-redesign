import logo from './logo.svg';
import './App.css';
import Sidebar from './containers/Sidebar';
import CardList from './containers/CardList';
import Email from './containers/Emails';

function App() {
  return (
    <div className="pageBackground bg-gradient-to-r from-[#E13D47] to-[#AA1D26]"> {/* Body (background) */}
      <div className="wrapper drop-shadow-2xl"> {/* Wrapper */}

        <Sidebar />

        <CardList />

        <Email />

      </div>
    </div>
  );
}

export default App;
