import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Info/>
      <AddItem/>
    </div>
  );
}

function Info(){
  const title = "this is my title";
  const showTitle = true;
  return (
    <div>
      <h1>{showTitle ? title: ""}</h1>
      <p>Manage your stuff.</p>
    </div>
  )
}

function AddItem() {
  return (
    <div>
      <form>
        <label for="text-form">Type something</label>
        <input type="text" id="text-form"/>
      </form>
    </div>
  )
}

export default App;
