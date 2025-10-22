import {Console} from "@woowacourse/mission-utils";
import {handleInputCarName} from "./utils/handleInputCarName.js";
import {handleTrialCount} from "./utils/handleTrialCount.js";
import {handleResult} from "./utils/handleResult.js";

class App {
  async run() {
    const carNames = await handleInputCarName();
    const trialCount = await handleTrialCount();
    handleResult(carNames, trialCount);
  }
}

export default App;
