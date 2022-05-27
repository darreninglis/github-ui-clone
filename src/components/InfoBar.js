import { GoGear, GoChevronDown, GoDiffModified } from 'react-icons/go'
import { BsPersonPlus } from 'react-icons/bs'

const InfoBar = () => {
  return (
    <div className="info-bar">

      {/* Side Bar Section */ }
      <div className="side-bar">
        <div>
          <div className="side-bar-titles">
            <div className="changes">
              Changes
            <div className="pill"><small>1</small></div>
            </div>
            <div className="history">
              History
          <div className="pill-new">New</div>
            </div>
          </div>
          <div className="file-changed">
            <input type="checkbox" checked="checked" readOnly />
            <div className="file-changed-text">1 changed file</div>
          </div>
          <div className="file-changed-description">
            <input type="checkbox" checked="checked" readOnly />
            <div className="text">project/README.md</div>
            <GoDiffModified />
          </div>
        </div>

        {/* Submit Form Section*/ }
        <div className="submit-section">
          <div className="profile-section">
            <img className="profile-image" src="https://pbs.twimg.com/profile_images/590032796267085824/9zWq4o1U_400x400.jpg" alt="placeholder" />
            <input className="update-title" type="text" placeholder="Update journal.md"></input>
          </div>
          <div className="update-description"><small>Description</small>
            <BsPersonPlus />
          </div>
          <button className="primary-button">Commit to <span>main</span></button>
        </div>
      </div>

      {/* Page Section */ }
      <div className="file">
        <div><span>notes/</span>journal.md</div>
        <div className="file-end">
          <div><GoGear /> <GoChevronDown /></div>
          <div className="pill-new">New</div>
          <GoDiffModified style={ { marginLeft: '8px' } } />
        </div>
      </div>

    </div>
  );
}

export default InfoBar;