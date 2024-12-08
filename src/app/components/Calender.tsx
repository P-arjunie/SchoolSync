import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";


const localizer = momentLocalizer(moment);


interface Event {
  title: string;
  start: Date;
  end: Date;
}

const DailyCalendar = () => {
  
  const events: Event[] = [
    {
      title: "Cloud Computing Class",
      start: new Date(2024, 11, 9, 14, 0), // Dec 9, 2024
      end: new Date(2024, 11, 9, 16, 0),
    },
    {
      title: "Data Analytics Deadline",
      start: new Date(2024, 11, 12, 10, 0), 
      end: new Date(2024, 11, 12, 11, 0),
    },
    {
      title: "UI/UX Class",
      start: new Date(2024, 11, 15, 18, 0), 
      end: new Date(2024, 11, 15, 20, 0),
    },
    {
      title: "Project Submission",
      start: new Date(2024, 11, 20, 12, 0), 
      end: new Date(2024, 11, 20, 13, 0),
    },
  ];

  return (
    <div className="h-screen p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Month View Calendar</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{
          height: "80vh",
          background: "#ffffff",
          padding: "20px",
          borderRadius: "10px",
        }}
        defaultView="month" 
        views={["month"]} 
        onSelectEvent={(event) => alert(`Event: ${event.title}`)} 
        onSelectSlot={(slotInfo) =>
          alert(
            `Selected date: ${moment(slotInfo.start).format("YYYY-MM-DD")}`
          )
        } 
        selectable // select dates
      />
    </div>
  );
};

export default DailyCalendar;
