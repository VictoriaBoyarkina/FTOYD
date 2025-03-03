import Button from "./components/Button";
import Status from "./components/Status/Status";

function App() {
  return (
    <>
      <Button />
      <Status value="finished" />
      <Status value="live" />
      <Status value="waiting" />
    </>
  );
}

export default App;
