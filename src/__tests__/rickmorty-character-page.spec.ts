import { mount, shallowMount } from "@vue/test-utils";
import App from "../App.vue";
import RickMortyEpisode from "@/views/RickMortyEpisode.vue";
import { getCharacterStubs } from "@/__stubs__/character-stubs.factory";

const propData = { episodeName: "test", characterStub: [] };

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
propData.characterStub = getCharacterStubs(4);

describe("Character page component", () => {
  it("Should render the app", () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(propData.characterStub),
      })
    ) as jest.Mock;
    // If we do not have params, what do we do
    const wrapper = mount(RickMortyEpisode);
    wrapper.setData({
      episodeName: propData.episodeName,
    });
    expect(wrapper.html()).toContain("<h1>Rick and Morty</h1>");
  });
});
