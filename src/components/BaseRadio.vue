<template>
  <input
    type="radio"
    v-bind="$attrs"
    :checked="modelValue === value"
    :value="value"
    @change="$emit('update:modelValue', value)"
    :id="value"
  />
  <label v-if="label" :for="value">{{ label }}</label>
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
    value: {
      type: [String, Number],
      required: true,
    },
  },
}
</script>

<style scoped></style>
