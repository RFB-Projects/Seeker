import React from 'react';
// import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import QuestionsPage from './Pages/QuestionsPage/QuestionsPage.jsx';
import TopicsPage from './Pages/TopicsPage/TopicsPage.jsx';
import CompanyPage from './Pages/CompanyPage/CompanyPage.jsx';
import WelcomePage from './Pages/WelcomePage/WelcomePage.jsx';

const container = document.getElementById('app');
const root = createRoot(container);

const fakeUserId = 1;

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
          <Route path='companies' element={<WelcomePage/>}></Route>
          <Route path='questions' element={<QuestionsPage userId={fakeUserId}/>}></Route>
          <Route path='topics' element={<TopicsPage userId={fakeUserId}/>}></Route>
          <Route path='/' element={<CompanyPage userId={fakeUserId} />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  // document.getElementById('app')
);
