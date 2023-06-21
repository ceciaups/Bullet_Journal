import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import './Journal.css'

export default function Journal(props) {
  const [spread, setSpread] = useState({});
  const [spreads, setSpreads] = useState([]);
  const [pages, setPages] = useState([]);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  useEffect (() => {
    async function getSpread() {
      if (!spread) {}
      else if (spread.spread_type_id.spread_type_name === "Yearly Log") {
        const res = await fetch("https://bullet-journal-db.ceciaups.com/yearspread?id=" + spread._id);
        const result = await res.json();
        if (res.status === 200){
          let descriptions = [];
          let description = [];
          let curMonth = 1;
          for (let i = 0; i < result.length; i++) {
            if (i === 0) {
              for (let j = curMonth; j < result[i].month; j++) {
                descriptions.push([]);
              }
              curMonth = result[i].month;
            }
            else if (curMonth < result[i].month) {
              descriptions.push(description);
              description = [];
              for (let j = curMonth + 1; j < result[i].month; j++) {
                descriptions.push([]);
              }
              curMonth = result[i].month;
            }

            description.push(result[i]);

            if (i === (result.length - 1)) {
              descriptions.push(description);
            }
          }

          let pages = [];
          let sections = [];
          pages.push(<h3 key="year-heading">Year Log</h3>);
          for (let i = 0; i < 12; i++) {
            let des = [];
            descriptions[i].forEach(description => {
              des.push(
                <p key={description._id}>{description.day}: {description.description}</p>
              )
            });
            sections.push(
              <div key={months[i]} className="year-month">
                <h3 className="year-title">{months[i]}</h3>
                <div className="year-description">
                  {des}
                  {/* <form action="#" className="form-year" name="form-year">
                    <input type="text" className="year-input" name="fdes" placeholder=""></input>
                    <button type="submit" className="button">Add</button>
                  </form> */}
                </div>
              </div>
            );
          }
          pages.push(<div key="year-content" id="year-content">{sections}</div>)
          setPages(pages);
        }
      }
    }
    getSpread();
  }, [spread]);

  return (
    <div id="journal">
      <Header user={props.user} spreads={spreads} setSpreads={setSpreads} setSpread={setSpread} />
      <main id="book">
        <div id="page">{pages}</div>
      </main>
    </div>
  )
}