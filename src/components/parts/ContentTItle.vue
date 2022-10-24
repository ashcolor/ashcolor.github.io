<script setup lang="ts">
interface Props {
    title: string;
}
const props = withDefaults(defineProps<Props>(), {
    title: "",
});
</script>

<template>
    <p class="text-2xl font-bold mb-2">{{ title }}</p>
</template>
