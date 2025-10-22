import {Console} from "@woowacourse/mission-utils";

export function handleWinner(racingResult) {
  const maxPosition = Math.max(...racingResult.map(car => car.position));

  const winners = racingResult
    .filter(car => car.position === maxPosition)
    .map(car => car.name);

  Console.print(`최종 우승자 : ${winners}`);
}
