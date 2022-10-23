<script setup lang="ts">
interface Props {
    isLoading: boolean;
}
const props = withDefaults(defineProps<Props>(), {
    isLoading: false,
});
</script>

<template>
    <div class="h-64 p-2 border overflow-y-scroll">
        <template v-if="isLoading">Loading...</template>
        <template v-else>
            <slot></slot>
        </template>
    </div>
</template>
