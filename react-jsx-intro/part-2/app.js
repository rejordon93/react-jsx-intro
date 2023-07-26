function App() {
  return (
    <div>
      <Tweets username="Ethan1" name="Ethan" data="2023-07-25" />
      {/* You can pass the tweetMessages array directly as a prop */}
      <Tweets
        username="User1"
        name="User"
        data="2023-07-26"
        tweetMessages={tweetMessages}
      />
      <Tweets
        username="User2"
        name="User"
        data="2023-07-27"
        tweetMessages={tweetMessages}
      />
      <Tweets
        username="User3"
        name="User"
        data="2023-07-28"
        tweetMessages={tweetMessages}
      />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
