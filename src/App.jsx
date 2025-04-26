//rafce - statemnet to generate that default code format in a new component

import { useState } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/navbar/navbar';
import Form from './Components/Form/Form';
import FormattedOutput from './Components/FormattedOutput/FormattedOutput';
import Loading from './Components/Loading/Loading';
import Flight from './pages/Flights/Flight';
import SignIn from './pages/SignIn/SingIn';
import Hotel from './pages/Hotels/Hotel';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [answer, setAnswer] = useState('');
  const apiKey = import.meta.env.VITE_apiKey;
  async function generate(prompt) {
    setAnswer('Loading...');

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        method: 'POST',
        data: {
          contents: [
            {
              role: 'user',
              parts: [{ text: prompt }]
            }
          ]
        }
      });

      setAnswer(response.data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error('Error fetching from Gemini:', error);
      setAnswer('Something went wrong. Try again.');
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/itinerary-planner' element={
          <>
            <Navbar />
            <Form onGenerate={generate} />
            <div className="itinerary-output">
              <h2>Your Itinerary</h2>
              {
                answer && answer !== 'Loading...' ? <FormattedOutput text={answer} /> : (
                  answer === 'Loading...' ? <Loading /> : '')
                  // <p>{answer === 'Loading...' ? 'Generating your itinerary...' : ''}</p>
                  
              }
            </div>
          </>
        } />
        <Route path='/Home' element={<Home />}/>
        <Route path='/Flights' element={<Flight />}/>
        <Route path='/Hotels' element={<Hotel />}/>
        <Route path='/SignIn' element={<SignIn />}/>

        <Route path='*' element={<div>Error 404! No page found</div>} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;