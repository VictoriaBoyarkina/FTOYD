import Button from "./components/Button";
import MatchInfo from "./components/MatchInfo/MatchInfo";
import Status from "./components/Status/Status";
import Error from "./components/Error/Error";

function App() {
  return (
    <>
      <Button />
      <Status value="finished" />
      <Status value="live" />
      <Status value="waiting" />
      <Error />
      <MatchInfo />
    </>
  );
}

export default App;
