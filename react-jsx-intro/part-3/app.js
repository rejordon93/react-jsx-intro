const App = () => {
  const person1 = {
    name: "John Doe",
    age: 25,
    hobbies: ["Reading", "Cooking", "Hiking"],
  };

  const person2 = {
    name: "Jane Smith",
    age: 10,
    hobbies: ["Painting", "Photography", "Traveling"],
  };

  const person3 = {
    name: "Mike Johnson",
    age: 30,
    hobbies: ["Gardening", "Playing Guitar", "Movies"],
  };

  return (
    <div>
      <Person {...person1} />
      <Person {...person2} />
      <Person {...person3} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
