import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import {ERROR_MESSAGE} from "../src/constants/errorConstants.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 경주", () => {
  test("기능 테스트 - 최종 우승자가 발생하는 경우", async () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "1"];
    const logs = ["pobi : -", "woni : ", "최종 우승자 : pobi"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, STOP]);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("기능 테스트 - 공동 우승자가 발생하는 경우", async () => {
    const MOVING_FORWARD = 4;
    const inputs = ["pobi,woni", "1"];
    const logs = ["pobi : -", "woni : -", "최종 우승자 : pobi,woni"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, MOVING_FORWARD]);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("기능 테스트 - 여러 라운드가 정상적으로 진행되는 경우", async () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "2"];
    const logs = [
      "pobi : -",
      "woni : ",
      "pobi : --",
      "woni : -",
      "최종 우승자 : pobi",
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, STOP, MOVING_FORWARD, MOVING_FORWARD]);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("기능 테스트 - 모든 자동차가 움직이지 않는 경우", async () => {
    const STOP = 3;
    const inputs = ["pobi,woni,jun", "1"];
    const logs = ["pobi : ", "woni : ", "jun : ", "최종 우승자 : pobi,woni,jun"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([STOP, STOP, STOP]);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("예외 테스트 - 자동차 이름이 공백인 경우", async () => {
    const inputs = ["pobi,,woni", "1"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGE.EMPTY_CAR_NAME);
  });

  test("예외 테스트 - 자동차 이름 5글자 초과", async () => {
    const inputs = ["pobi,javaji"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGE.INVALID_CAR_NAME_LENGTH);
  });

  test("예외 테스트 - 자동차 이름 중복", async () => {
    const inputs = ["pobi, pobi"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGE.DUPLICATE_CAR_NAME);
  });

  test("예외 테스트 - 시도 횟수에 숫자를 입력하지 않은 경우", async () => {
    const inputs = ["pobi,woni", "abc"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGE.EMPTY_TRIAL_COUNT);
  });

  test("예외 테스트 - 시도 횟수에 0을 입력한 경우", async () => {
    const inputs = ["pobi,woni", "0"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGE.ZERO_TRIAL_COUNT)
  });

  test("예외 테스트 - 시도 횟수에 음수를 입력한 경우", async () => {
    const inputs = ["pobli,woni", "-1"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGE.MINUS_TRIAL_COUNT)
  });
});
