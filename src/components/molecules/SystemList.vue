<script setup lang="ts">
import { useTagStore } from "~/stores/tag";
import SYSTEMDATA from "../../data/systems.json";

const tagStore = useTagStore();
const { systemTags } = storeToRefs(tagStore);

const systems = computed(() => {
    return SYSTEMDATA;
});

onMounted(() => {
    saveTags(systems.value);
});

const saveTags = (systems: Array<any>) => {
    systems.forEach((system) => {
        ["frontend", "backend", "infrastructure"].forEach((type) => {
            systemTags.value.push(...system[type]);
        });
    });
};
</script>

<template>
    <div class="flex flex-wrap justify-center gap-8 p-4">
        <SystemCard
            class="d-inline-block ma-6"
            style="position: relative"
            v-for="system in systems"
            :system="system"
        />
    </div>
</template>
