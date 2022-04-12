import { mount } from "@vue/test-utils";
import RickMortyPage from "../views/RickMortyPage.vue";
import { getEpisodeStubs } from "@/__stubs__/episode-stubs.factory";
import RickMortyEpisode from "@/components/RickMortyEpisode.vue";
// import { getDataTestSelector } from "@/__tests__/utils";

const episodeStub = getEpisodeStubs(5);

describe("Episodes page component", () => {
  it("Should render the page", () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(episodeStub),
      })
    ) as jest.Mock;
    const wrapper = mount(RickMortyPage);
    wrapper.setData({
      filteredEpisodes: episodeStub,
    });
    expect(wrapper.html()).toContain("<h1>Rick and Morty Episode Search</h1>");
    /*
    const attribute = wrapper.findAll(getDataTestSelector("episode-item"));
    expect(attribute.length).toEqual(5);
    */
  });
});
