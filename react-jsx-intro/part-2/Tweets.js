const Tweets = (props) => {
  // Sample data

  return (
    <div>
      <h1>Welcome to Twitter Clone</h1>
      <p>
        Name: {props.name} Username: {props.username} Data: {props.data}
      </p>
    </div>
  );
};
