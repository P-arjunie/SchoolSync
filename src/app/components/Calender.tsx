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
    { title: "Cloud Computing Class", start: new Date(2024, 11, 9, 14, 0), end: new Date(2024, 11, 9, 16, 0) },
    { title: "Data Analytics Deadline", start: new Date(2024, 11, 12, 10, 0), end: new Date(2024, 11, 12, 11, 0) },
    { title: "UI/UX Class", start: new Date(2024, 11, 15, 18, 0), end: new Date(2024, 11, 15, 20, 0) },
    { title: "Project Submission", start: new Date(2024, 11, 20, 12, 0), end: new Date(2024, 11, 20, 13, 0) },
  ];

  return (
    <div className="w-full h-auto p-2 sm:p-4 bg-gradient-to-br from-[#e0f7fa] to-[#e3efff] rounded-lg shadow-xl">
      {/* Title Section */}
      <div className="flex items-center my-4 sm:my-8">
        <div className="flex-grow border-t border-[#3d5a80]"></div>
        <span className="px-2 sm:px-4 text-[#293241] font-extrabold text-2xl sm:text-4xl text-center">
          Monthly Calendar
        </span>
        <div className="flex-grow border-t border-[#3d5a80]"></div>
      </div>

      {/* Calendar */}
      <div className="w-full h-[65vh] sm:h-[80vh] bg-white rounded-lg shadow-lg overflow-auto">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ minHeight: "100%", width: "100%", padding: "10px" }}
          defaultView="month"
          views={["month"]}
          selectable
          onSelectEvent={(event) => alert(`Event: ${event.title}`)}
          onSelectSlot={(slotInfo) => alert(`Selected Date: ${moment(slotInfo.start).format("YYYY-MM-DD")}`)}
          eventPropGetter={() => ({
            style: {
              backgroundColor: "#ff6f61",
              color: "#fff",
              borderRadius: "8px",
              padding: "5px 8px",
              fontWeight: "bold",
              textAlign: "center",
            },
          })}
        />
      </div>
    </div>
  );
};

export default DailyCalendar;
