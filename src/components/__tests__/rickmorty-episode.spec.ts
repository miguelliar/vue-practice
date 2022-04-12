import { mount } from "@vue/test-utils";
import Episode from "../RickMortyEpisode.vue";
import { getDataTestSelector } from "@/__tests__/utils";
import { getEpisodeStubs } from "../../__stubs__/episode-stubs.factory";

const episodeStubs = getEpisodeStubs(5);

describe("Blog post", () => {
  const wrapper = mount(Episode, {
    props: {
      episode: episodeStubs,
    },
  });
  it("Should render one episode", () => {
    expect(wrapper).toBeTruthy();
    const episode = wrapper.findAll(getDataTestSelector("attribute"));
    expect(episode.length).toEqual(4);
  });
});
