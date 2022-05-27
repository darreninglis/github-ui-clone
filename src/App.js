import './App.css';
import InfoBar from './components/InfoBar';
import MenuBar from './components/MenuBar';
import MacButtons from './components/MacButtons';

function App () {
  return (
    <div className="window">
      <MacButtons />
      <MenuBar />
      <InfoBar />
    </div>
  );
}

export default App;
