<template>
  <button 
    class="my-button" 
    :class="{ 'my-button--primary': primary }"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  primary?: boolean
}

defineProps<Props>()
defineEmits<{
  click: [event: MouseEvent]
}>()
</script>

<style scoped>
.my-button {
  padding: 12px 24px;
  border: 2px solid #42b883;
  background: transparent;
  color: #42b883;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.my-button:hover {
  background: #42b883;
  color: white;
}

.my-button--primary {
  background: #42b883;
  color: white;
}

.my-button--primary:hover {
  background: #369870;
}
</style> 