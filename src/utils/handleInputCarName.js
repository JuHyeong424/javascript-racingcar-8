import {Console} from "@woowacourse/mission-utils";
import {INPUT_CAR_NAME} from "../constants/consoleConstants.js";

export async function handleInputCarName () {
  const carNames = await Console.readLineAsync(INPUT_CAR_NAME);
  return carNames.split(',');
}
