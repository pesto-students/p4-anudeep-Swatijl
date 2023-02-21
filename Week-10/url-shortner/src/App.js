import './App.css';
import URLShortner from "./url_shortner";

function App() {
  const gridDisplay = {
    display: "grid",
    gridColumnGap: "10px",
    gridTemplateColumns: "200px auto 200px",
  };

  return (
    <div style={gridDisplay}>
      <div></div>
      <div>
        <h1 className="center-all">URL Shortner</h1>
        <URLShortner />
      </div>
      <div></div>
    </div>
  );
}

export default App;
