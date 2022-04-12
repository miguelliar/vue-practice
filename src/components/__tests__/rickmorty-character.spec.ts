import { mount } from "@vue/test-utils";
import { getCharacterStubs } from "@/__stubs__/character-stubs.factory";
import { getDataTestSelector } from "@/__tests__/utils";
import RickMortyCharacter from "@/components/RickMortyCharacter.vue";

const characterStub = getCharacterStubs(1)[0];

describe("Character component tested", () => {
  const wrapper = mount(RickMortyCharacter, {
    props: {
      character: "",
    },
  });
  wrapper.setData({
    characterProperties: characterStub,
    photoDescription: characterStub.photoDescription,
  });
  it("Should render a post", () => {
    expect(wrapper).toBeTruthy();
    const image = wrapper.find(getDataTestSelector("img"));
    expect(image).toBeTruthy();
    const attribute = wrapper.findAll(getDataTestSelector("attribute"));
    expect(attribute.length).toEqual(3);
  });
});
