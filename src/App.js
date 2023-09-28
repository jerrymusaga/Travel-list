function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ 🇫AR AWAY 🛖</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your trip? 🏩 </h3>
    </div>
  );
}

function PackingList() {
  return <div className="list">LIST</div>;
}

function Stats() {
  return (
    <footer>
      <em> 🛍 You have X-Items on your list, and you already packed X (X%)</em>
    </footer>
  );
}

export default App;
