import {handleInputCarName} from "./utils/handleInputCarName.js";
import {handleTrialCount} from "./utils/handleTrialCount.js";
import {handleResult} from "./utils/handleResult.js";
import {handleWinner} from "./utils/handleWinner.js";

class App {
  async run() {
    const carNames = await handleInputCarName();
    const trialCount = await handleTrialCount();
    const racingResult = handleResult(carNames, trialCount);
    handleWinner(racingResult);
  }
}

export default App;
