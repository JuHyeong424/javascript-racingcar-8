import {Console} from "@woowacourse/mission-utils";
import {getRandomNumber} from "./getRandomNumber.js";
import {EXECUTE_RESULT} from "../constants/consoleConstants.js";

function moveCars(racingCars) {
  racingCars.forEach(car => {
    const randomNumber = getRandomNumber();
    if (randomNumber >= 4) {
      car.position += 1;
    }
  });
}

function printRoundResult(racingCars) {
  racingCars.forEach(car => {
    const dashes = '-'.repeat(car.position);
    Console.print(`${car.name} : ${dashes}`);
  });
}

export function handleResult(carNames, trialCount) {
  const racingCars = carNames.map(name => ({
    name: name,
    position: 0,
  }));

  Console.print(EXECUTE_RESULT);

  for (let i = 0; i < trialCount; i++) {
    moveCars(racingCars);
    printRoundResult(racingCars);
    Console.print('');
  }

  return racingCars;
}
