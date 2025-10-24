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
  test("자동차 이름이 공백인 경우", async () => {
    const inputs = ["pobi,,woni", "1"];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow(ERROR_MESSAGE.EMPTY_CAR_NAME);
  });

  test("자동차 이름이 5글자를 초과하는 경우", async () => {
    const inputs = ["pobi,javaji"];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow(ERROR_MESSAGE.INVALID_CAR_NAME_LENGTH);
  });

  test("자동차 이름이 중복되는 경우", async () => {
    const inputs = ["pobi,pobi"];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow(ERROR_MESSAGE.DUPLICATE_CAR_NAME);
  });
});
