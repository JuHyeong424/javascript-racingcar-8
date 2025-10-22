import {Console} from "@woowacourse/mission-utils";
import {getRandomNumber} from "./getRandomNumber.js";

export function handleResult(carNames, trialCount) {
  const racingCars = carNames.map(name => ({
    name: name,
    position: 0,
  }));

  Console.print('실행 결과\n');

  for (let i = 0; i < trialCount; i++) {
    racingCars.forEach(car => {
      const randomNumber = getRandomNumber();
      if (randomNumber >= 4) {
        car.position += 1;
      }
    });

    racingCars.forEach(car => {
      const dashes = '-'.repeat(car.position);
      Console.print(`${car.name} : ${dashes}`);
    });

    Console.print('');
  }
}
