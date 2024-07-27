// src/RandomMeal.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RandomMeal = () => {
    const [meal, setMeal] = useState(null);

    const fetchRandomMeal = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/meals');
            const meals = response.data;
            if (meals.length > 0) {
                const randomIndex = Math.floor(Math.random() * meals.length);
                setMeal(meals[randomIndex]);
            }
        } catch (error) {
            console.error('Error fetching meals:', error);
        }
    };

    useEffect(() => {
        fetchRandomMeal();
    }, []);

    return (
        <div>
            <h2>Random Meal</h2>
            {meal ? (
                <div>
                    <h3>{meal.name}</h3>
                    <img
                        src={`data:image/jpeg;base64,${meal.image}`}
                        alt={meal.name}
                        style={{ width: '300px', height: '300px', borderRadius: '50%' }}
                    />
                    <p>Day: {meal.day}</p>
                    <p>Type: {meal.type}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default RandomMeal;
