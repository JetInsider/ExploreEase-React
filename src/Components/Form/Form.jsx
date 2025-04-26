import React, { useState } from 'react';
import './Form.css';

const Form = ({ onGenerate }) => {
  const [startPlace, setStartPlace] = useState('');
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [budget, setBudget] = useState('');
  const [numPeople, setNumPeople] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    // Calculate number of days
    const days =
      (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24);

    const prompt = `create an itinerary from ${startPlace} to ${destination} for ${Math.round(
      days
    )} days with a budget of ₹${budget} for ${numPeople} ${
      numPeople === 1 ? 'person' : 'people'
    }. give only the plan with no extra explanation, also along with day1, 2 etc show a date, and day in bracket for better clarity and no extra tips or "ok here is you itinerary...." give just the itinerary`;

    onGenerate(prompt); // Call parent function with prompt
  }

  return (
    <form id="itineraryForm" onSubmit={handleSubmit}>
      <h2>Plan Your Trip</h2>

      <label htmlFor="startPlace">Starting Place:</label>
      <input
        type="text"
        id="startPlace"
        value={startPlace}
        onChange={(e) => setStartPlace(e.target.value)}
        placeholder="e.g., Delhi"
        required
      />

      <label htmlFor="destination">Destination:</label>
      <input
        type="text"
        id="destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        placeholder="e.g., New York"
        required
      />

      <label htmlFor="numPeople">Number of People:</label>
      <input
        type="number"
        id="numPeople"
        value={numPeople}
        onChange={(e) => setNumPeople(parseInt(e.target.value) || 1)}
        min="1"
        required
      />

      <label htmlFor="startDate">Trip Start Date:</label>
      <input
        type="date"
        id="startDate"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        required
      />

      <label htmlFor="endDate">Trip End Date:</label>
      <input
        type="date"
        id="endDate"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        required
      />

      <label htmlFor="budget">Budget (in ₹):</label>
      <input
        type="number"
        id="budget"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        placeholder="e.g., 200000"
        required
      />

      <button type="submit">Generate Itinerary</button>
    </form>
  );
};

export default Form;