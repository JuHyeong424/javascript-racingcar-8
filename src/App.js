import {Console} from "@woowacourse/mission-utils";
import {handleInputCarName} from "./utils/handleInputCarName.js";
import {handleTrialCount} from "./utils/handleTrialCount.js";

class App {
  async run() {
    const carNames = await handleInputCarName();
    const trialCount = await handleTrialCount();
    Console.print(`${carNames}, ${trialCount}`);
  }
}

export default App;
