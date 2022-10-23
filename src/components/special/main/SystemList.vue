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
    <div class="flex flex-wrap justify-center gap-8 p-4 border">
        <SystemCard
            class="d-inline-block ma-6"
            style="position: relative"
            v-for="system in systems"
            :system="system"
        />
    </div>
</template>
