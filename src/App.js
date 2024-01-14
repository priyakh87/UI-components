
import './App.css';
import SideBar from './components/SideBar';
import Router from './pages/Router';

function App() {
  return (
    <div className="App min-h-screen  flex ">
      <div className='w-1/4 bg-gray-200' >
      <SideBar/>
      </div>
      <div className='content'>
      
      <div><Router /></div></div>
    </div>
  );
}

export default App;
