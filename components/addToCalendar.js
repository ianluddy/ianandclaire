import { useEffect } from 'react';
import { atcb_init } from "add-to-calendar-button";
import 'add-to-calendar-button/assets/css/atcb.css';

export default function ({ children }) {
  const config = {
    "name":"Ian and Claire",
    "description":"A Luddy Goode time",
    "startDate":"2023-02-03",
    "endDate":"2023-02-04",
    "startTime":"15:30",
    "endTime":"01:30",
    "location":"City Hall, Dame Street, Dublin",
    "label":"Add to calendar",
    "options":[
      "Apple",
      "Google",
      "Microsoft365",
      "Outlook.com",
      "Yahoo"
    ],
    "timeZone":"Europe/Dublin",
    "iCalFileName":"Reminder-Event"
  };
  useEffect(atcb_init, []);
  return (
    <div className="atcb">{JSON.stringify(config)}</div>
  );
}