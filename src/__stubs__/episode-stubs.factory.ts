import { randomIntFromInterval } from "@/__stubs__/factory-utils";

export function getEpisodeStubs(amount = 2): any[] {
  return Array.from({ length: amount }, () => createEpisodeStub(amount));
}

export function createEpisodeStub(amount: number): any {
  return {
    episode: {
      episode: randomIntFromInterval(1, amount * 100),
      name: randomIntFromInterval(1, amount * 100),
      air_date: randomIntFromInterval(1, amount * 100),
      id: randomIntFromInterval(1, amount * 100),
    },
  };
}
