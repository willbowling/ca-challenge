import React, {
  Component
} from 'react';
import Moment from 'react-moment';
import './App.css';

// 1.  Using your preferred Javascript framework, build a screen which shows a list of hour long slots from 9am to 5pm.
// 2.  When one time slot is clicked, pop up a modal which asks for name and phone number.
// 3.  When the name and phone number is submitted, the time slot selected should change to red, indicating the time slot is no longer available.
// 4.   If the red time slot is clicked on again, the modal will pop up with the name and phone number for that appointment pre - populated.Users will be able to edit the name and phone number to change the user for the appointment.

class Challenge extends Component {

  render() {

    const time = new Date().getHours();

    // const dateToFormat;

    // Moment('2016-03-12 13:00:00').add(24, 'hours').format('LLL')

    return (
      console.log('date', Moment),

      <
      section className = "Challenge" >
      <
      header className = "App-header" >
      <
      h1 className = "App-title" > Welcome to Cox Automotive Code Challenge < /h1> <
      /header> <
      p > Please select desired appointment time < /p> <
      select name = "time" >
      <
      option value = "9:00am" > 9: 00 am < /option> <
      option value = "10:00am" > 10: 00 am < /option> <
      option value = "11:00am" > 11: 00 am < /option> <
      option value = "12:00pm" > 12: 00 pm < /option> <
      option value = "1:00pm" > 1: 00 pm < /option> <
      option value = "2:00pm" > 2: 00 pm < /option> <
      option value = "3:00pm" > 3: 00 pm < /option> <
      option value = "4:00pm" > 4: 00 pm < /option> <
      option value = "5:00pm" > 5: 00 pm < /option> <
      /select>

      <
      button label = "Confirm Time" > Confirm Time < /button>



      <
      Moment time = {
        time
      }
      /> <
      /section>
    );
  }
}

export default Challenge;
