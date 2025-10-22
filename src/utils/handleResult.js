import {Console} from "@woowacourse/mission-utils";

export async function handleResult(carNames, trialCount) {
  const results = await Console.readLineAsync('실행 결과\n');
  Console.print(`${carNames}`)
}
