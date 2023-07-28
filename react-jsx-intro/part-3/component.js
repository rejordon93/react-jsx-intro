const Person = (props) => {
  let displayName = props.name;
  if (props.name.length > 8) {
    displayName = props.name.slice(0, 6); // Show the first six characters if the name is longer than 8 characters
  }

  return (
    <div>
      {props.age > 18 ? <h3>'please go vote!'</h3> : <h3>you must be 18</h3>}

      {props.name.length < 8 ? (
        <p>Name: {props.name}</p>
      ) : (
        <p>Name: {displayName}</p>
      )}

      <p>Age: {props.age}</p>

      {props.hobbies && props.hobbies.length > 0 ? (
        <div>
          <p>Hobbies:</p>
          <ul>
            {props.hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
