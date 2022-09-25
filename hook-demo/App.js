import logo from './logo.svg';
import './App.css';
import Counter from './components/counterHook'
import UseStateTest from './components/useStateTest';
import UseStateLazy from './components/UseStateLazy';
import ContextTestF from './components/ContextTestF';
import UseEffectTest from './components/useEffectTest';
import EffectLifeCycle from './components/EffectLifeCycle';
import DropDownMenu from './components/DropDownMenu';


function App() {
  return (
    <div>
      {/* <UseStateLazy initialState={100}/> */}
      {/* <UseEffectTest/> */}
      {/* <EffectLifeCycle/> */}
      <DropDownMenu/>
    </div>
  )
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
