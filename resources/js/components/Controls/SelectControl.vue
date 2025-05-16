<template>
  <div class="flex relative" :class="$attrs.class">
    <select
      v-bind="defaultAttributes"
      :value="selected"
      @change="handleChange"
      class="w-full block form-control form-control-bordered form-input"
      ref="selectControl"
      :disabled="disabled"
      :class="{
        'h-8 text-xs': size === 'sm',
        'h-7 text-xs': size === 'xs',
        'h-6 text-xs': size === 'xxs',
        'form-control-bordered-error': hasError,
        'form-input-disabled': disabled,
      }"
      :data-disabled="disabled ? 'true' : null"
    >
      <slot />
    </select>

    <span
      class="pointer-events-none absolute inset-y-0 right-[11px] flex items-center"
    >
      <icon-arrow />
    </span>
  </div>
</template>

<script>
import IconArrow from '../Icons/IconArrow.vue';

export default {
  components: {
    IconArrow,
  },
  inheritAttrs: false,
  props: {
    hasError: { type: Boolean, default: false },
    selected: { default: null },
    disabled: { type: Boolean, default: false },
    size: {
      type: String,
      default: 'md',
      validator: val => ['xxs', 'xs', 'sm', 'md'].includes(val),
    },
  },

  emits: ['change'],

  computed: {
    defaultAttributes() {
      return Object.keys(this.$attrs)
        .filter(key => key !== 'class')
        .reduce((obj, key) => {
          obj[key] = this.$attrs[key];
          return obj;
        }, {});
    }
  },

  methods: {
    handleChange(event) {
      this.$emit('change', event.target.value);
    },

    resetSelection() {
      this.$refs.selectControl.selectedIndex = 0;
    }
  }
}
</script>
