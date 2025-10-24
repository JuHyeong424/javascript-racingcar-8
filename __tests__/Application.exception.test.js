import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE } from "../src/constants/errorConstants.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("자동차 경주 - 예외 테스트", () => {
  test("자동차 이름에 공백이 포함된 경우 에러를 발생시킨다", async () => {
    const inputs = ["pobi,,woni", "1"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGE.EMPTY_CAR_NAME);
  });

  test("자동차 이름이 5글자를 초과하는 경우 에러를 발생시킨다", async () => {
    const inputs = ["pobi,javaji"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGE.INVALID_CAR_NAME_LENGTH);
  });

  test("자동차 이름이 중복되는 경우 에러를 발생시킨다", async () => {
    const inputs = ["pobi,pobi"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGE.DUPLICATE_CAR_NAME);
  });

  test("시도 횟수에 숫자가 아닌 값을 입력한 경우 에러를 발생시킨다", async () => {
    const inputs = ["pobi,woni", "abc"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGE.EMPTY_TRIAL_COUNT);
  });

  test("시도 횟수에 정수가 아닌 값을 입력한 경우 에러를 발생시킨다", async () => {
    const inputs = ["pobi,woni", "1.1"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGE.NOT_INTEGER_TRIAL_COUNT);
  });

  test("시도 횟수에 0을 입력한 경우 에러를 발생시킨다", async () => {
    const inputs = ["pobi,woni", "0"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGE.ZERO_TRIAL_COUNT);
  });

  test("시도 횟수에 음수를 입력한 경우 에러를 발생시킨다", async () => {
    const inputs = ["pobi,woni", "-1"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGE.MINUS_TRIAL_COUNT);
  });
});
