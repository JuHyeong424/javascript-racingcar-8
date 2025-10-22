import {Console} from "@woowacourse/mission-utils";
import {TRIAL_COUNT} from "../constants/consoleConstants.js";

export async function handleTrialCount() {
  return await Console.readLineAsync(TRIAL_COUNT);
}
