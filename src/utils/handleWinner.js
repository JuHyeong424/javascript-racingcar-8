import {Console} from "@woowacourse/mission-utils";
import {FINAL_WINNER} from "../constants/consoleConstants.js";

export function handleWinner(racingResult) {
  const maxPosition = Math.max(...racingResult.map(car => car.position));

  const winners = racingResult
    .filter(car => car.position === maxPosition)
    .map(car => car.name);

  Console.print(`${FINAL_WINNER} ${winners}`);
}
