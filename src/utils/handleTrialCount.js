import {Console} from "@woowacourse/mission-utils";
import {TRIAL_COUNT} from "../constants/consoleConstants.js";
import {ERROR_MESSAGE} from "../constants/errorConstants.js";

export async function handleTrialCount() {
  const trialCount = await Console.readLineAsync(TRIAL_COUNT);

  if (trialCount.trim() === '') {
    throw new Error(ERROR_MESSAGE.EMPTY_TRIAL_COUNT);
  }

  const numericTrialCount  = Number(trialCount);

  if (isNaN(numericTrialCount)) {
    throw new Error(ERROR_MESSAGE.EMPTY_TRIAL_COUNT);
  }

  if (!Number.isInteger(numericTrialCount)) {
    throw new Error(ERROR_MESSAGE.NOT_INTEGER_TRIAL_COUNT);
  }

  if (numericTrialCount === 0) {
    throw new Error(ERROR_MESSAGE.ZERO_TRIAL_COUNT);
  }

  if (numericTrialCount < 0) {
    throw new Error(ERROR_MESSAGE.MINUS_TRIAL_COUNT);
  }

  return numericTrialCount ;
}
