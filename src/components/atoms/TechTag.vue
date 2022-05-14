<script setup lang="ts">
interface Props {
    name: string;
    count: number;
}
const props = withDefaults(defineProps<Props>(), {
    name: "",
    number: 1,
});

const getSizeClass = (count) => {
    if (count >= 3) {
        return "default";
    } else if (count >= 2) {
        return "small";
    } else {
        return "x-small";
    }
};
</script>

<template>
    <span class="badge" :class="[getSizeClass(count)]">{{ name }} </span>
</template>
