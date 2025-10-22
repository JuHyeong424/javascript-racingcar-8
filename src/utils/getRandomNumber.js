import {Random} from "@woowacourse/mission-utils";
import {END_RANDOM_NUMBER, START_RANDOM_NUMBER} from "../constants/randomNumberConstants.js";

export function getRandomNumber() {
  return Random.pickNumberInRange(START_RANDOM_NUMBER, END_RANDOM_NUMBER);
}
