

import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import './App.css';
import Form from './components/Form';
import Data from './components/Data'
import Transaction from './components/Transaction';
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Report from './components/Report';

function App() {

  const [items,setItems] = useState([])

  const [reportAmount,setReportAmount] = useState(0)

  const onAddNewItem = (newItem) => {
    setItems((prevItem)=>{
      return [newItem,...prevItem]
    })
  }

  useEffect(()=>{
    const amount = items.map(items=>items.amount)
    const answer = amount.filter(element=>element>0).reduce((total,element)=>total+=element,0)
    setReportAmount(answer)
  },[items,reportAmount])

  const design = {textAlign:'center'}



  return (
      <Data.Provider value={{answer:reportAmount}}>
        <div className="container">
        <h1 style={design}>ข้อมูลรายได้ของคนงาน</h1>

      <Router>
        <div>
        <ul className="horizontal-menu">
          <li>
            <Link to="/">ข้อมูลบัญชี</Link>
          </li>
          <li>
            <Link to="/insert">บันทึกข้อมูล</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/" exact>
              <Report/>
          </Route>
          <Route path="/insert">
            <Form onAddItem={onAddNewItem}/>
            <Transaction items={items}/>
          </Route>
          </Switch>

    </div>
</Router>
    </div>
      </Data.Provider>
  );
}

export default App;
