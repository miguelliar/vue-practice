import { randomIntFromInterval } from "@/__stubs__/factory-utils";

export function getCharacterStubs(amount = 2): any[] {
  return Array.from({ length: amount }, () => createCharacterStub(amount));
}

export function createCharacterStub(amount: number): any {
  return {
    image: randomIntFromInterval(1, amount * 100),
    photoDescription: `Photo description ${randomIntFromInterval(
      1,
      amount * 100
    )}`,
    name: randomIntFromInterval(1, amount * 100),
    gender: amount,
    species: amount,
  };
}
