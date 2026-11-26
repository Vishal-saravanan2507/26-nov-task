import Apptitude from "./APPTITUDE/apptitude";
import Learners from "./LEARNERS/learners";
import { aptitudeGuruHem, learnersData } from "./data";

function App() {
  return (
    <div>
      <Apptitude data={aptitudeGuruHem} />

      <Learners data={learnersData} />
    </div>
  );
}

export default App;
