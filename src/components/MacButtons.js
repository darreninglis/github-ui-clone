/* TODO:
* Add symbols on hover (use css ::before?)
* Color match the button backgrounds
* Create gradient for background color
*/


const MacButtons = () => {
  return (
    <div className="window-top-bar">
      <div className="buttons-container">
        <div className="circle close"></div>
        <div className="circle minimize"></div>
        <div className="circle zoom"></div>
      </div>
    </div>
  );
}

export default MacButtons;