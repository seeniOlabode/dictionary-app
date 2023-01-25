<template>
  <section class="mt-8 border-t border-solid pt-11 relative">
    <h2
      class="font-bold absolute pr-4 bg-white text-lg italic heading-m"
      style="top: -15px; line-height: 21.78px; font-weight: 700"
    >
      {{ defData.figure }}
    </h2>
    <h3 class="heading-s text-dict-black-100">Meaning</h3>
    <ul class="mt-4">
      <li v-for="def in defData.defs" :key="def + 'keyboard'">
        <div>
          <p class="body-m">
            {{ typeof def == "object" ? def.def : def }}
          </p>
          <p
            class="body-m text-dict-black-100 mt-3"
            v-if="typeof def == 'object'"
          >
            "{{ def.example }}"
          </p>
        </div>
      </li>
    </ul>
    <div class="mt-6 flex items-center" v-if="showDefinitionSynonyms">
      <h3 class="heading-s text-dict-black-100">Synonyms</h3>
      <p
        class="ml-7 text-dict-purple font-bold text-base"
        style="line-height: 20px"
        v-for="synonym in defData.synonyms"
        :key="defData.figure + synonym"
      >
        {{ synonym }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "FigureDefinition",
  props: ["defData"],
  data() {
    return {
      definitions: [
        "(etc.) A set of keys used to operate a typewriter, computer etc.",
        "A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.",
        "A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.",
      ],
    };
  },
  computed: {
    showDefinitionSynonyms() {
      if (this.defData) {
        return Boolean(this.defData.synonyms);
      } else {
        return true;
      }
    },
  },
};
</script>

<style scoped>
ul li::before {
  content: "•";
  @apply text-dict-purple;
}

li {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;
}
</style>