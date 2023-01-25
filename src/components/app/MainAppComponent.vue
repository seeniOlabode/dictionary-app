<template>
  <main class="mb-24">
    <search-field />
    <section
      class="flex justify-between items-center mt-6 relative"
      style="border-color: #e9e9e9; margin-bottom: 42px"
    >
      <div class="">
        <h1 class="heading-l">keyboard</h1>
        <p class="body-m text-dict-purple mt-3">/'ki:bɔ:d/</p>
      </div>
      <play-button />
    </section>
    <FigureDefinition
      v-for="def in defList"
      :key="def.figure + def.defs[0]"
      :defData="def"
    >
    </FigureDefinition>
    <section class="mt-8 border-t border-solid pt-6">
      <p class="body-s underline text-dict-black-100">Source</p>
      <p
        class="
          body-s
          underline
          mt-2
          underline-offset-1
          text-dict-black-300
          flex
        "
      >
        https://en.wiktionary.org/wiki/keyboard
        <img class="ml-2" src="@/assets/external-link-icon.svg" alt="" />
      </p>
    </section>
  </main>
</template>

<script>
import SearchField from "../shared/SearchField.vue";
import PlayButton from "../shared/PlayButton.vue";
import FigureDefinition from "./FigureDefinition.vue";

export default {
  name: "MainAppComponent",
  components: {
    SearchField,
    PlayButton,
    FigureDefinition,
  },
  data() {
    return {
      defList: [
        {
          figure: "noun",
          defs: [
            "(etc.) A set of keys used to operate a typewriter, computer etc.",
            "A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.",
            "A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.",
          ],
          synonyms: ["electronic keyboard"],
        },
        {
          figure: "verb",
          defs: [
            {
              def: "To type on a computer keyboard.",
              example: "Keyboarding is the part of this job I hate the most.",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>