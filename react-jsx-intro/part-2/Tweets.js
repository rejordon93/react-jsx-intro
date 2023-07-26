const Tweets = (props) => {
  const tweetMessages = [
    "Words that have lost all meaning",
    "Be yourself; everyone else is already taken",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
  ];

  return (
    <div>
      <p>
        My name is {props.name}, username is {props.username}, and the data is{" "}
        {props.date}.
      </p>
      <p>Tweets:</p>
      {tweetMessages.map((tweet, index) => (
        <p key={index}>{tweet}</p>
      ))}
    </div>
  );
};
