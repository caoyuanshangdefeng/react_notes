import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './store/stores';
import { persistor } from './store/stores';
import App from './App';
import { Provider } from 'react-redux'
import { BrowserRouter} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </PersistGate>
    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

