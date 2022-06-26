<script setup lang="ts">
import { Icon } from "@iconify/vue";

interface Props {
    text: string;
    icon: string;
    class?: string;
}

const props = withDefaults(defineProps<Props>(), {
    text: "",
    icon: "",
    class: "",
});
</script>

<template>
    <button :class="class" class="btn btn-sm text-white gap-x-2 drop-shadow-md">
        <Icon :icon="icon" height="16" />
        {{ text }}
    </button>
</template>
