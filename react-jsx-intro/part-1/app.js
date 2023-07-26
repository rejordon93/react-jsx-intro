function App() {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Ethan" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
