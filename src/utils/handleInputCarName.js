import {Console} from "@woowacourse/mission-utils";
import {INPUT_CAR_NAME} from "../constants/consoleConstants.js";
import {ERROR_MESSAGE} from "../constants/errorConstants.js";

export async function handleInputCarName () {
  const inputCarNames = await Console.readLineAsync(INPUT_CAR_NAME);
  const carNames = inputCarNames.split(',').map(name => name.trim());
  const carNamesSet = new Set(carNames);

  carNames.forEach(car => {
    if (car.length === 0 ) {
      throw new Error(ERROR_MESSAGE.EMPTY_CAR_NAME);
    }

    if (car.length > 5) {
      throw new Error(ERROR_MESSAGE.INVALID_CAR_NAME_LENGTH);
    }
  })

  if (carNamesSet.size !== carNames.length) {
    throw new Error(ERROR_MESSAGE.DUPLICATE_CAR_NAME);
  }

  return carNames;
}
