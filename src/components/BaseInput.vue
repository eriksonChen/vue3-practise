<template>
  <label
    >{{ label }} <span v-if="required" class="errorMessage">＊</span></label
  >
  <input
    ref="input"
    v-bind="$attrs"
    :placeholder="label"
    class="field"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {}
  },
}
</script>

<style scoped></style>
