/* TODO:
*
*
*/

import { GoLock, GoGitBranch, GoSync, GoChevronDown } from 'react-icons/go'

const MenuBar = () => {
  return (
    <div className="menu-bar">
      <div className="menu-bar-item">
        <GoLock />
        <div className="menu-bar-item-text">
          <small>Current Repository</small>
          <div><strong>notes</strong></div>
        </div>
        <GoChevronDown />
      </div>

      <div className="menu-bar-item">
        <GoGitBranch />
        <div className="menu-bar-item-text">
          <small>Current Branch</small>
          <div><strong>main</strong></div>
        </div>
        <GoChevronDown />
      </div>

      <div className="menu-bar-item">
        <GoSync />
        <div className="menu-bar-item-text">
          <div><strong>Fetch origin</strong></div>
          <small>Last fetched 7 minutes ago</small>
        </div>
        <GoChevronDown />
      </div>
    </div>
  );
}

export default MenuBar;