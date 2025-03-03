import Button from "./components/Button";
import PlayerStatistic from "./components/PlayerStatistic/PlayerStatistic";
import Result from "./components/Result";
import Status from "./components/Status/Status";

function App() {
  return (
    <>
      <Button />
      <Status value="finished" />
      <Status value="live" />
      <Status value="waiting" />
      <PlayerStatistic userName="User1" result={4} />
      <Result points="+50" killings={7} position={6} />
    </>
  );
}

export default App;
