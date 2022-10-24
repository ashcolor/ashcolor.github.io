<script setup lang="ts">
interface Props {
    name: string;
    count: number;
}
const props = withDefaults(defineProps<Props>(), {
    name: "",
    count: 1,
});

const getBadgeSizeClass = (count) => {
    if (count >= 4) {
        return "basge-lg";
    } else if (count >= 3) {
        return "badge-md";
    } else if (count >= 2) {
        return "badge-sm";
    } else {
        return "badge-xs";
    }
};
</script>

<template>
    <div class="m-0.5">
        <span class="badge py-2" :class="[getBadgeSizeClass(count)]">
            <span class="">{{ count }}</span>
        </span>
        <span class="badge badge-outline py-2" :class="[getBadgeSizeClass(count)]">
            <span>{{ name }}</span>
        </span>
    </div>
</template>
