import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList'
import Accommodate from './chapter_07_hook/Accomommodate';

ReactDOM.render(
  <React.StrictMode>
    <Accommodate/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();