import React from 'react'
import "./Topbar.css"
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
          <div className="topLeft">
              <span className="logo">
                Thamarai Admin
              </span>
          </div>
          <div className="topRight">
              <div className="topbarIconContainer">
                <NotificationsNone/>
                <span className="topIconBadge">2</span>
              </div>
              <div className="topbarIconContainer">
                <Language/>
                <span className="topIconBadge">2</span>
              </div>
              <div className="topbarIconContainer">
                <Settings/>
              </div>
              <img src="https://thamaraiselvan2020.github.io/portfolio/img/MyFoto.jpg"alt="" className="topAvatar" />
          </div>
      </div>
    </div>
  )
}

export default Topbar
