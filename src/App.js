import './App.css';
import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";
import { Route, Routes, BrowserRouter as Router, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navigation from './components/Naviagation';
import { Login } from './components/Login';
import { LeaderBoard } from './components/LeaderBoard';
import { AnswerQuestion } from './components/AnswerQuestion';
import { Home } from './components/Home';
import { CreateQuestion } from './components/CreateQuestion';
import { PageNotFound } from './components/PageNotFound';
import { useSelector, useDispatch } from 'react-redux';
import { getQuestions } from './slices/question';

function App() {
  const location = useLocation();
  const currentUser = useSelector(state => (state.currentUser.value));
  
  return (
    <div className="App">
      {currentUser?.length && <Navigation />}
      <Routes>
        {currentUser?.length && currentUser[1]?.id?.length ? <>
          <Route path='/' exact element={<Login />} />
          <Route path='/home' exact element={<Home />} />
          <Route path='/leaderboard' exact element={<LeaderBoard />} />
          <Route path='/add' exact element={<CreateQuestion />} />
          <Route path='/questions/:question_id' exact element={<AnswerQuestion />} />
        </>
        : <Route path='*' exact element={<Login />}/>
        }
        <Route path='/404' element={<PageNotFound />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
