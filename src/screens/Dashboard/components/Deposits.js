import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits({ events }) {
  // const [upcomingEvent, setUpcomingEvent] = React.useState(false)

  // React.useEffect(async() => {
  //   const utoken = localStorage.getItem('utoken')
  //   const response = await fetch(`https://adityaiyer2k7.pythonanywhere.com/userdata?utoken=${utoken}`);
  //   const data = await response.json();

  // }, [])

const findMostUpcomingEvent = (events) => {
    let upcomingEventName = null;
    let earliestTime = null;

    for (const key in events) {
        if (events.hasOwnProperty(key)) {
          console.log(events[key])
            const { date, time, name } = events[key];
            const eventDateTime = new Date(`${date}T${time}`);

            if (!earliestTime || eventDateTime < earliestTime) {
                earliestTime = eventDateTime;
                console.log("events key", events[key]);
                upcomingEventName = name;
            }
        }
    }

    return upcomingEventName;
};



  return (
    <React.Fragment>
      <Title>{ "Upcoming Events"}</Title>
      <Typography color={"primary"} variant="h4">
        {findMostUpcomingEvent(events) || "TBD"}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
         13 August, 2024
      </Typography>
      {/* <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Event
        </Link>
      </div> */}
    </React.Fragment>
  );
}
