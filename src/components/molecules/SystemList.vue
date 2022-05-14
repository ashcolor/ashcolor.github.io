<script setup lang="ts">
import SYSTEMDATA from "../../data/systems.json";

const systems = computed(() => {
    return SYSTEMDATA;
});
// this.systems.forEach((system) => {
//     ["frontend", "backend", "infrastructure"].forEach((type) => {
//         tags = tags.concat(system[type]);
//     });
// });
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
