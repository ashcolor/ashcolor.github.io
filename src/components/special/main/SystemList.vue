<script setup lang="ts">
import { useTagStore } from "~/stores/tag";
import SYSTEMDATA from "~/data/systems.json";

const tagStore = useTagStore();
const { systemTags } = storeToRefs(tagStore);

const systems = SYSTEMDATA;

systems.forEach((system) => {
    ["frontend", "backend", "infrastructure"].forEach((type) => {
        systemTags.value.push(...system[type]);
    });
});
</script>

<template>
    <div class="flex flex-row gap-8 w-full overflow-x-auto p-4 border">
        <SystemCard v-for="system in systems" :system="system" />
    </div>
</template>
