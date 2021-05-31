/* TODO general:
* Check font
* Level of interaction on hover & click
*/

import './App.css';
import MacButtons from './components/MacButtons';
import MenuBar from './components/MenuBar';
import InfoBar from './components/InfoBar';

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
