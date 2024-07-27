// src/components/MealTable.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MealTable.css'; // Import the CSS file for styling

function MealTable() {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);

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
    const mealTypes = ['breakfast', 'lunch', 'supper'];

    return (
        <div className="meal-table">
            {days.map((day) => (
                <div key={day} className="day-container">
                    <h2>{day}</h2>
                    {mealTypes.map((type) => (
                        <div key={type} className="meal-type">
                            <h3>{type.charAt(0).toUpperCase() + type.slice(1)}</h3>
                            <div className="meal-items">
                                {meals
                                    .filter((meal) => meal.day === day && meal.type === type)
                                    .map((meal) => (
                                        <div key={meal.id} className="meal-item">
                                            {meal.image && (
                                                <img
                                                    src={`data:image/jpeg;base64,${meal.image}`}
                                                    alt={meal.name}
                                                    className="meal-image"
                                                />
                                            )}
                                            <div className="meal-name">{meal.name}</div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default MealTable;
