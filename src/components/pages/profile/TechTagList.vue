<script setup lang="ts">
import { useTagStore } from "~/stores/tag";

const tagStore = useTagStore();
const tagCounts = computed(() => tagStore.tagCounts);
</script>

<template>
    <div class="flex flex-wrap">
        <template v-for="tagCount in tagCounts">
            <TechTagWithCount :name="tagCount.name" :count="tagCount.count" />
        </template>
    </div>
</template>
