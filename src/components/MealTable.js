// src/components/MealTable.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MealTable.css'; // Import the CSS file for styling

function MealTable() {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [collapsedDays, setCollapsedDays] = useState({});
    const [dayDirection, setDayDirection] = useState('row'); // Add a state to track the direction of the days

    useEffect(() => {
        async function fetchMeals() {
            try {
                const response = await axios.get('/api/meals');
                setMeals(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching meals:', error);
                setLoading(false);
            }
        }

        fetchMeals();
    }, []);

    if (loading) {
        return <div>Loading meals...</div>;
    }

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const handleDayClick = (day) => {
        setCollapsedDays((prevCollapsedDays) => ({
           ...prevCollapsedDays,
            [day]:!prevCollapsedDays[day],
        }));
    };

    const handleDirectionChange = (direction) => {
        setDayDirection(direction);
    };

    return (
        <div className="meal-table-container">
            <div className={`day-containers ${dayDirection}`}>
                {days.map((day) => (
                    <div key={day} className="day-container">
                        <h2 onClick={() => handleDayClick(day)} style={{ color: 'goldenrod' }}>
                            {day}
                            {collapsedDays[day]? '' : ''}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MealTable;