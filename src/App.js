import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    now: new Date(),
    daysOfWeek: ["Niedz.", "Pon.", "Wt.", "Śr.", "Czw.", "Pi.", "Sb."]
  };
  //day - numer dnia w tygodniu (0-6) od niedzieli
  //date - numer dnia w miesiącu
  //month = numer miesiąca (0-11)
  //fullYear - numer roku (2019)
  createHeaders = () => {
    const dates = [];
    const firstDateOfWeek = new Date(this.state.now.getTime());
    firstDateOfWeek.setDate(
      this.state.now.getDate() - this.state.now.getDay() + 1
    );

    const lastDateOfWeek = new Date(firstDateOfWeek.getTime());
    lastDateOfWeek.setDate(lastDateOfWeek.getDate() + 6);

    //31 maja -> 1 czerwiec
    //23:40 31 grudnia 2019 -> date.setHours(date.getHours() + 1) -> 00:40 1 styccznia 2020
    for (
      let d = new Date(firstDateOfWeek.getTime());
      d <= lastDateOfWeek;
      d.setDate(d.getDate() + 1)
    ) {
      console.log(this.state.now.getTime() == d.getTime());
      dates.push(
        <div key={d.getTime()} className="calendar-header">
          <p>{this.state.daysOfWeek[d.getDay()]}</p>
          <div
            className="calendar-date"
            style={{
              color: this.state.now.getTime() == d.getTime() ? "white" : "gray",
              backgroundColor:
                this.state.now.getTime() == d.getTime() ? "blue" : "white"
            }}
          >
            {d.getDate()}
          </div>
        </div>
      );
    }
    return dates;
  };

  render() {
    return (
      <div className="calendar">
        <div className="calendar-headers">{this.createHeaders()}</div>
      </div>
    );
  }
}

export default App;
