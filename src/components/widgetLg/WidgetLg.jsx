import React from 'react';
import './WidgetLg.css';
const WidgetLg = () => {

    const Button =({ type }) => {
        return <button className={"widgetLgButton "+ type}>{type}</button>;
    };
  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">Large transaction</h3>
      <table className="widgetLgTable">
          <tr className="widgetLgTr">
              <th className="widgetLgTh">Customer</th>
              <th className="widgetLgTh">Date</th>
              <th className="widgetLgTh">Amount</th>
              <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
              <td className="widgetLgUser">
                  <img src="https://thamaraiselvan2020.github.io/portfolio/img/MyFoto.jpg" alt="" className="widgetLgImg" />
                  <span className="widgetLgName">Tom Space</span>
              </td>
              <td className="widgetLgDate">2 June 2021</td>
              <td className="widgetLgAmount">$122.00</td>
              <td className="widgetLgStatus"><Button type="Approved" /></td>
          </tr>
          <tr className="widgetLgTr">
              <td className="widgetLgUser">
                  <img src="https://thamaraiselvan2020.github.io/portfolio/img/MyFoto.jpg" alt="" className="widgetLgImg" />
                  <span className="widgetLgName">Tom Space</span>
              </td>
              <td className="widgetLgDate">2 June 2021</td>
              <td className="widgetLgAmount">$122.00</td>
              <td className="widgetLgStatus"><Button type="Declined" /></td>
          </tr>
          <tr className="widgetLgTr">
              <td className="widgetLgUser">
                  <img src="https://thamaraiselvan2020.github.io/portfolio/img/MyFoto.jpg" alt="" className="widgetLgImg" />
                  <span className="widgetLgName">Tom Space</span>
              </td>
              <td className="widgetLgDate">2 June 2021</td>
              <td className="widgetLgAmount">$122.00</td>
              <td className="widgetLgStatus"><Button type="Pending" /></td>
          </tr>
          <tr className="widgetLgTr">
              <td className="widgetLgUser">
                  <img src="https://thamaraiselvan2020.github.io/portfolio/img/MyFoto.jpg" alt="" className="widgetLgImg" />
                  <span className="widgetLgName">Tom Space</span>
              </td>
              <td className="widgetLgDate">2 June 2021</td>
              <td className="widgetLgAmount">$122.00</td>
              <td className="widgetLgStatus"><Button type="Approved" /></td>
          </tr>
      </table>
    </div>
  )
}

export default WidgetLg
