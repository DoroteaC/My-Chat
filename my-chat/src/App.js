import { useState } from "react";
import "./App.css";
// // import Login from "./Components/Login/Login";
// import Messages from "./Components/Chat/Messages";
// import Input from "./Components/Chat/Input";
import Chat from "./Components/Chat/Chat";
import Login from "./Components/Login/Login";
import Header from "./Components/UI/Header"

function App(props) {
  const [userIsActive, setUserIsActive] = useState(false);
  // const [thisUser, setThisUser] = useState('');
  const setUser = () => {
    setUserIsActive(true);
};
  if (!userIsActive) {
    return (
      <div className="App">
        <Header></Header>
        <Login   onSubmit={setUser}/>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Header></Header>
        <Chat />
      </div>
    );
  }
}

export default App;
