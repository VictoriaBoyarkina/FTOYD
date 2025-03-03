import Button from "./components/Button";
import MatchInfo from "./components/MatchInfo/MatchInfo";
import Status from "./components/Status/Status";

function App() {
  return (
    <>
      <Button />
      <Status value="finished" />
      <Status value="live" />
      <Status value="waiting" />
      <MatchInfo />
    </>
  );
}

export default App;
