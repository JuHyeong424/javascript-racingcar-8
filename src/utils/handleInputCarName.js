import {Console} from "@woowacourse/mission-utils";
import {INPUT_CAR_NAME} from "../constants/consoleConstants.js";

export async function handleInputCarName () {
  const inputCarNames = await Console.readLineAsync(INPUT_CAR_NAME);
  const carNames = inputCarNames.split(',');

  carNames.map(car => {
    if (car.trim().length === 0 ) {
      throw new Error('[Error] 자동차 이름이 공백입니다.');
    }

    if (car.length > 5) {
      throw new Error('[Error] 자동차 이름은 5글자를 초과할 수 없습니다.');
    }
  })

  return carNames;
}
