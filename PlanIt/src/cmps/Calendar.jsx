import React, { useState } from 'react';
import Calendar from 'react-calendar';

export function Calendar() {
    const [date, setDate] = useState(new Date());

    const handleDateChange = (newDate) => {
        setDate(newDate);
    };

    return (
        <div className="calendar">
            <Calendar
                onChange={handleDateChange}
                value={date}
            />
            <p>Selected Date: {date.toDateString()}</p>
        </div>
    );
}
