import { useState } from "react";
import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { update } from "./store";
import DisplayCount from "./UI/DisplayCount";
import Buttons from "./UI/Buttons";
import Card from "./UI/Card";
import "./App.css";

function App() {
  const [usersData, setData] = useState([]);
  const dispatch = useDispatch();

  const fetchUsers = (list) => {
    const users = axios.get("http://localhost:3003/" + list);
    users.then((user) => {
      setData(user.data);
      dispatch(update(user.data.length));
    });
  };

  return (
    <div className="App">
      <DisplayCount></DisplayCount>
      <Buttons fetchUsers={fetchUsers}></Buttons>
      <Card data={usersData}></Card>
    </div>
  );
}

export default App;
