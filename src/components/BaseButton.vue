<script>
export default {
  name: 'BaseButton',
  props: {
    type: {
      type: String,
      default: 'info',
      validator(value) {
        return [
          'info',
          'primary',
          'warning',
          'error',
          'tertiary',
          'quaternary',
        ].includes(value)
      },
    },
    htmlType: {
      type: String,
      default: undefined,
    },
    size: {
      type: String,
      default: 'base',
      validator(value) {
        return [
          'tiny',
          'extra-small',
          'small',
          'base',
          'medium',
          'large',
        ].includes(value)
      },
    },
    secondary: {
      type: Boolean,
      default: false,
    },
    to: {
      type: [String, Object],
      default: undefined,
    },
    href: {
      type: String,
      default: undefined,
    },
  },
  data() {
    return {
      elChild: '',
    }
  },
  computed: {
    eventListeners() {
      const buttonEvents = ['click', 'mousedown', 'mouseup']
      return Object.fromEntries(
        Object.entries(this.$listeners).filter(
          ([key]) => !buttonEvents.includes(key)
        )
      )
    },
    tag() {
      if (this.to) {
        return 'nuxt-link'
      }

      if (this.href) {
        return 'a'
      }

      return 'button'
    },
  },
  methods: {
    handleMouseDown(evt) {
      this.$refs.test.classList.remove('circle', 'grow')
      const x = evt.offsetX - 10
      const y = evt.offsetY - 10
      this.$refs.test.classList.add('circle', 'grow')
      this.$refs.test.style.left = x + 'px'
      this.$refs.test.style.top = y + 'px'
    },
  },
}
</script>

<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :type="htmlType"
    class="inline-flex items-center font-sans justify-center rounded overflow-hidden relative disabled:(bg-gray-400 cursor-not-allowed)"
    :class="[
      {
        'button-tiny': size === 'tiny',
        'button-xs': size === 'extra-small',
        'button-sm': size === 'small',
        'button-base': size === 'base',
        'button-lg': size === 'large',
      },
      secondary
        ? {
            'bg-transparent text-white border border-bordergrey border-opacity-40': type === 'info',
            'bg-white text-secondary border border-secondary':
              type === 'primary',
            'bg-white text-primary border border-primary': type === 'warning',
            'bg-white text-error border border-error': type === 'error',
          }
        : {
            'bg-sky-700 text-white border-sky-700': type === 'info',
            'bg-secondary text-white border-secondary': type === 'primary',
            'bg-primary text-white ': type === 'warning',
            'bg-error text-white border-primary': type === 'error',
            'bg-light-500 text-secondary border-error': type === 'tertiary',
          },
    ]"
    v-bind="$attrs"
    @mousedown="handleMouseDown"
  >
    <!-- v-on="$listeners" -->
    <div ref="test" class="circle"></div>
    <slot class="pointer-events-none"></slot>
  </component>
</template>

<style>
.circle {
  height: 25px;
  width: 25px;
  background-color: #ffffff39;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 5;
  pointer-events: none;
  transform: scale(0);
}

@keyframes grow {
  0% {
    background-color: rgba(50 50 50 50%);
    transform: scale(1);
    z-index: 2;
  }

  100% {
    background-color: rgba(50 50 50 60%);
    transform: scale(30);
    opacity: 0;
    z-index: -1;
  }
}

.grow {
  animation: grow 1.4s ease-out forwards;
}
</style>
