
import './App.css';
import DropDownPage from './pages/DropdownPage';
import ButtonsPage from './pages/ButtonsPage';
import AccordionsPage from './pages/AccordionPage';
function App() {
  return (
    <div className="App min-h-screen justify-center flex flex-col">
   <ButtonsPage/>
   <AccordionsPage/>
   <DropDownPage />
    </div>
  );
}

export default App;
