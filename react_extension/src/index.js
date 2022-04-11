import React from "react";
// import  ReactDOM  from "react-dom";
import App from "./App";
// ReactDOM.render(<App/>,document.getElementById('root'))
/*
react-dom.development.js:86 Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot

警告：React 18 不再支持 ReactDOM.render。请改用 createRoot。 在您切换到新的 API 之前，您的应用程序的行为就像它正在运行 React 17
*/



import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
// const container = ;
const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>

);