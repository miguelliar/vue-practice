import { mount, shallowMount } from "@vue/test-utils";
import App from "../App.vue";
import RickMortyPage from "@/views/RickMortyPage.vue";
import { getCharacterStubs } from "@/__stubs__/character-stubs.factory";

const propData : {characterStub : getCharacterStubs(4), ;

describe("Character page component", () => {
  it("Should render the app", () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(characterStub),
      })
    ) as jest.Mock;
    const wrapper = mount(RickMortyPage);
    wrapper.setData({
      filteredEpisodes: characterStub,
    });
    expect(wrapper.html()).toContain("<h1>Rick and Morty Episode Search</h1>");
  });
});
