import { getCharacterStubs } from "../__stubs__/character-stubs.factory";

const characterCollection = getCharacterStubs(5);

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(characterCollection),
  })
) as jest.Mock;

describe("Character service", () => {
  it("Should fetch data", async () => {
    const data = await BlogService.fetchPosts();
    expect(fetch).toHaveBeenCalledWith(BlogService.api);
    expect(data.length).toEqual(5);
  });
});
