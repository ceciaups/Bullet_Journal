import { useEffect, useState } from 'react'
import logo from '/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCalendarDays, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Header(props) {
  const menu = <FontAwesomeIcon icon={faBars} size="2x"/>;
  const year = <FontAwesomeIcon icon={faCalendarDays} size="2x"/>;
  const add = <FontAwesomeIcon icon={faPlus} size="2x"/>;
  const [status, setStatus] = useState([]);

  useEffect (() => {
    if (props.user || testing) {
      async function getJournal() {
        const resJournal = await fetch("https://bullet-journal-db.ceciaups.com/journal?userId=" + props.user);
        if (resJournal.status === 200) {
          const resultJournal = await resJournal.json();
          const res = await fetch("https://bullet-journal-db.ceciaups.com/spread/all?id=" + resultJournal._id);
          if (res.status === 200) {
            const result = await res.json();

            result.map(spread => {
              if (spread.spread_type_id.spread_type_name === "Yearly Log") {
                spread.spread_type_id.spread_type_icon = year;
              }
            });

            props.setSpreads(result);
          }
        }
      }
      getJournal();
    }
  }, [status]);

  function changeSpread(spread){
    props.setSpread(spread);
  }

  return (
    <header>
      <ul id="journal-nav">
        {props.spreads?.map(spread => (
          <li key={spread._id}>
            <button className="journal-button" onClick={() => changeSpread(spread)}>
              {spread.spread_type_id.spread_type_icon}
            </button>
          </li>
        ))}
        <li id="journal-add" className="journal-button">
          <button className="journal-button" onClick={() => props.activatePanel({})}>
            {add}
          </button>
        </li>
      </ul>
      <Link to="/" id="logo">
        <img src={logo} className="header-icon" alt="logo" />
      </Link>
      <nav id="nav-bar" className="nav-bar">
        <div className="header-icon">{menu}</div>
        <ul>
          {/* <li key="nav-toggle" id="nav-toggle"><i className="fa-solid fa-bars"></i></li>
          <li className="nav-item"><a href="#sec-home">HOME</a></li> */}
        </ul>
      </nav>
    </header>
  )
}

export default Header