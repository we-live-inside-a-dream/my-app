// import { formatDistance, subDays } from 'date-fns'
import React, { useState } from 'react'
import 'date-fns'
import { DatePicker, TimePicker, DateTimePicker } from '@material-ui/pickers';
import {BrowserRouter, Router, Routes, Route, Link} from 'react-router-dom'
import NavBar from './components/NavBar';
// import Grid from '@material-ui/core/Grid'
// import DateFnsUtils from '@date-io/date-fns'
// import{
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker
// }from '@material-ui/pickers'
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';

function App() {
  // const [dateSelected, setDateSelected] = useState(new Date())

  // console.log("date selected",dateSelected)

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" />
        <Route path="/employeeList" />
        <Route path="/dayView" />
      </Routes>
    </Router>


    // <div className="App">
    //   <div>
    //     <label>date</label>
    //     <DatePicker value={dateSelected} onChange={setDateSelected}/>
    //   </div>

    //   <div>
    //     <label>Hour</label>
    //     <TimePicker value={dateSelected} onChange={setDateSelected}/>
    //   </div>

    //   <div>
    //     <label>Date and Time</label>
    //     <DateTimePicker value={dateSelected} onChange={setDateSelected}/>
    //   </div>
      
    // </div>
  );
}

export default App;
