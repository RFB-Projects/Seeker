import React from 'react';
// import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import QuestionsPage from './Pages/QuestionsPage/QuestionsPage';
import TopicsPage from './Pages/TopicsPage/TopicsPage';
import CompanyPage from './Pages/CompanyPage/CompanyPage.jsx';
import WelcomePage from './Pages/WelcomePage/WelcomePage.jsx';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}>
        <Route path='welcome' element={<WelcomePage/>}></Route>
        <Route path='questions' element={<QuestionsPage/>}></Route>
        <Route path='topics' element={<TopicsPage/>}></Route>
        <Route path='companies' element={<CompanyPage/>}></Route>
    </Route>

  </Routes>
  </BrowserRouter>,
  // document.getElementById('app')
);
