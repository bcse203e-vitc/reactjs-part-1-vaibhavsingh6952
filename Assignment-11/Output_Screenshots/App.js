import React, { useState, useEffect } from "react";
import "./App.css";

function Welcome() {
  return <h1>Welcome to React!</h1>;
}

function Header() {
  return <h1>Welcome to My Website</h1>;
}

function Footer() {
  return <p>© 2025 My Website</p>;
}

const fruits = ["Apple", "Banana", "Cherry"];
function FruitList() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

function Greeting() {
  const isLoggedIn = false;
  return <h1>{isLoggedIn ? "Welcome Back!" : "Please Log In"}</h1>;
}

const myStyle = { color: "blue", fontSize: "20px" };
function StyledHeading() {
  return <h1 style={myStyle}>Styled Heading</h1>;
}

function ClickMe() {
  function handleClick() {
    alert("Button clicked!");
  }
  return <button onClick={handleClick}>Click Me</button>;
}

function CurrentTime() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <h2>Current Time: {time}</h2>;
}

function ProfilePicture() {
  return <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" width="250" height="300" alt="Profile" />;
}

const users = ["Vaibhav", "Aryan", "Rahul"];
function UserList() {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
}

function GreetingWithProps({ name }) {
  return <h1>Hello, {name}!</h1>;
}

function Info() {
  return (
    <>
      <h1>Title</h1>
      <p>This is a description.</p>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

function AgeChecker() {
  const [age, setAge] = useState("");
  return (
    <div>
      <input type="number" onChange={(e) => setAge(e.target.value)} />
      <p>{age >= 18 ? "You are an adult" : "You are a minor"}</p>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Greeting />
      <FruitList />
      <StyledHeading />
      <ClickMe />
      <CurrentTime />
      <ProfilePicture />
      <UserList />
      <GreetingWithProps name="Vaibhav" />
      <Info />
      <Counter />
      <AgeChecker />
      <Footer />
    </div>
  );
}

export default App;
