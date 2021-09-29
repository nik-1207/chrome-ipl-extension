import PlayerCard from "./components/PlayerCard";
import TeamCard from "./components/TeamCard";
import { initializeApp } from "firebase/app";
import { firebase } from "./config";

initializeApp(firebase);

function App() {
  return (
    <div className="App">
      <TeamCard />
      <PlayerCard />
    </div>
  );
}

export default App;
