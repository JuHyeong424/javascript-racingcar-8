import {Console} from "@woowacourse/mission-utils";
import {handleInputCarName} from "./utils/handleInputCarName.js";

class App {
  async run() {
    const carNames = await handleInputCarName();
    Console.print(`${carNames}`);
  }
}

export default App;
