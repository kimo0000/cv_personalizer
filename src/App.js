import './App.css';
import Sidebar from './components/sidebar/User/Sidebar';
import Profile from './components/main/Profil';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Profile />
    </div>
  );
}

export default App;
