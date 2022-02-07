import React from 'react';
import './WidgetSm.css';
import {Visibility} from '@material-ui/icons'
const WidgetSm = () => {
  return (
    <div className='widgetSm'>
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img className="widgetSmImg" src="https://thamaraiselvan2020.github.io/portfolio/img/MyFoto.jpg" alt="" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Tom Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img className="widgetSmImg" src="https://thamaraiselvan2020.github.io/portfolio/img/MyFoto.jpg" alt="" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Tom Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img className="widgetSmImg" src="https://thamaraiselvan2020.github.io/portfolio/img/MyFoto.jpg" alt="" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Tom Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img className="widgetSmImg" src="https://thamaraiselvan2020.github.io/portfolio/img/MyFoto.jpg" alt="" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Tom Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img className="widgetSmImg" src="https://thamaraiselvan2020.github.io/portfolio/img/MyFoto.jpg" alt="" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Tom Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility /> Display
          </button>
        </li>
      </ul>
    </div>
  )
}

export default WidgetSm
