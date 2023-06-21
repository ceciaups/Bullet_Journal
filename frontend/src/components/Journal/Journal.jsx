import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import Header from '../../components/Header'
import './Journal.css'

export default function Journal(props) {
  const [isActive, setIsActive] = useState(false);
  const [id, setId] = useState("");
  const [item, setItem] = useState({});
  const [items, setItems] = useState([]);
  const [spreadId, setSpreadId] = useState("");
  const [spread, setSpread] = useState({});
  const [spreads, setSpreads] = useState([]);
  const [text, setText] = useState([]);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const navigate = useNavigate();

  const add = <FontAwesomeIcon icon={faPlus} size="2x" />;
  const edit = <FontAwesomeIcon icon={faPenToSquare} size="2x" />;

  useEffect (() => {
    async function getSpread() {
      if (!props.user) {
        // navigate("/login")
      }
      if (Object.keys(spread).length === 0) {}
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
          pages.push(
            <div key="year-heading" id="year-heading">
              <h3>Year Log</h3>
              <button id="year-add" className="button" onClick={() => activatePanel({})}>{add}</button>
            </div>
          );
          for (let i = 0; i < 12; i++) {
            let des = [];
            descriptions[i].forEach(description => {
              des.push(
                <button key={description._id} id={description._id} className="year-item" onClick={(e) => activatePanel(e)}>{description.day}: {description.description}</button>
              )
            });
            sections.push(
              <div key={months[i]} className="year-month">
                <h4 className="year-title">{months[i]}</h4>
                <div className="year-description">
                  {des}
                </div>
              </div>
            );
          }
          pages.push(<div key="year-content" id="year-content">{sections}</div>)
          setText(pages);
          setItems(result);
          setSpreadId(spread._id);
        }
      }
    }
    getSpread();
  }, [spreadId, spread, items]);

  useEffect (() => {
    async function getItem() {
      if (id) {
        const curItem = items.find((item) => {
          return item._id === id;
        })
        setItem(curItem);
      }
      else {
        setItem({});
      }
    }
    getItem();
  }, [id]);

  function activatePanel(e){
    if (Object.keys(e).length != 0) {
      setId(e.currentTarget.id);
    }
    else {
      setId("");
    }
    setIsActive(true);
  }

  function deactivatePanel(){
    setIsActive(false);
  }

  async function addItem(e) {
    e.preventDefault();

    const option = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "id": id,
        "spreadId": spread._id,
        "month": e.target.fmonth.value,
        "day": e.target.fday.value,
        "description": e.target.fdes.value,
        "order": 1
      })
    }

    var res;
    if (id) {
      res = await fetch("https://bullet-journal-db.ceciaups.com/yearspread/edit", option)
    }
    else {
      res = await fetch("https://bullet-journal-db.ceciaups.com/yearspread/add", option)
    }
    const result = await res.json();

    if (res.status === 200){
      const res = await fetch("https://bullet-journal-db.ceciaups.com/yearspread?id=" + spread._id);
      const result = await res.json();
      if (res.status === 200){
        setItems(result);
      }
      setId("");
      deactivatePanel();
    }
    else {
      navigate("/error")
    }
  }

  async function deleteItem(e) {
    e.preventDefault();

    if (id) {
      const res = await fetch("https://bullet-journal-db.ceciaups.com/yearspread/delete?id=" + id);
      const result = await res.json();

      if (res.status === 200){
        const res = await fetch("https://bullet-journal-db.ceciaups.com/yearspread?id=" + spread._id);
        const result = await res.json();
        if (res.status === 200){
          setItems(result);
        }
        setId("");
        deactivatePanel();
      }
      else {
        navigate("/error")
      }
    }
  }

  return (
    <div id="journal">
      <Header user={props.user} spreads={spreads} setSpreads={setSpreads} setSpread={setSpread} activatePanel={activatePanel}/>
      <main id="book">
        <div id="page">{text}</div>
      </main>
      <div className={isActive ? "editPanel" : "hide"}>
        <form action="#" id="form-year" name="form-year" onSubmit={(e) => addItem(e)}>
          <div className="form-input">
            <label>Month:</label>
            <input type="number" id="form-month" className="form-content" name="fmonth" min={1} max={12}></input>
            <label>Day:</label>
            <input type="number" id="form-day" className="form-content" name="fday" min={1} max={31}></input>
            <label>Description:</label>
            <input type="text" id="form-des" className="form-content" name="fdes"></input>
          </div>
          <div className="form-button">
            <button type="submit" className="button">{id ? "Update" : "Add"}</button>
            {id ? <button type="reset" className="button" onClick={(e) => deleteItem(e)}>Delete</button> : ""}
            <button type="reset" className="button" onClick={() => deactivatePanel()}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}