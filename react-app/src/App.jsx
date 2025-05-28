import "./App.css"

function Title(){
  return <h1>I'm the title</h1>
}


function App() {
  const appTitle = "React Concepts Demo";
  const appMessage = "Using React Fragment, JSX curly braces, structured components, and styled components.";

  return (
    <>
      <Header title={appTitle} />
      <Content message={appMessage} />
    </>
  );
}

export default App;

