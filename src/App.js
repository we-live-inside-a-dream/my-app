// import { formatDistance, subDays } from 'date-fns'
import React, { useState } from 'react'
import 'date-fns'
import { DatePicker, TimePicker, DateTimePicker } from '@material-ui/pickers';
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
  const [dateSelected, setDateSelected] = useState(new Date())

  console.log("date selected",dateSelected)

  return (
    <div className="App">
      <div>
        <lable>date</lable>
        <DatePicker value={dateSelected} onChange={setDateSelected}/>
      </div>

      <div>
        <lable>Hour</lable>
        <TimePicker value={dateSelected} onChange={setDateSelected}/>
      </div>

      <div>
        <lable>Date and Time</lable>
        <DateTimePicker value={dateSelected} onChange={setDateSelected}/>
      </div>
      
    </div>
  );
}

export default App;
