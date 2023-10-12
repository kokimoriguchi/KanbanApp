<template>
  <!-- :はv-bindの省略形でclassesとdisableの値の変更検知するようにしている -->
  <button
    :class="classes"
    :disabled="disabled"
    type="button"
    @click="handleClick"
  >
    <!-- slotで親コンポーネントから渡されたテキストを表示する -->
    <slot />
  </button>
</template>

<script>
export default {
  name: "KbnButton",

  props: {
    type: {
      type: String,
      default: "button",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      // typeがtextの場合はクラス名に-textを付与し、それ以外の場合は何も返さずkbn-buttonクラスになる。
      const cls = this.type === "text" ? "-" + this.type : "";
      return [`kbn-button${cls}`];
    },
  },
  methods: {
    // ここでemitを使用し親コンポーネントにイベントを伝える
    handleClick(ev) {
      this.$emit("click", ev);
    },
  },
};
</script>

<style scoped>
.kbn-button {
  padding: 0.6rem 1.3em;
}
.kbn-button-text {
  border: none;
  padding-right: 0;
  padding-left: 0;
}
</style>
