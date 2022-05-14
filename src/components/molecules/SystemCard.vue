<script setup lang="ts">
import { Icon } from "@iconify/vue";

type System = {
    id: number;
    created: string;
    name: string;
    frontend: Array<string>;
    backend: Array<string>;
    infrastructure: Array<string>;
    note: string;
    url: string;
    repository: string;
    image: string;
};
interface Props {
    system: System;
}
const props = defineProps<Props>();

// TODO error
// const props = withDefaults(defineProps<Props>(), {
//     system: {
//         id: -1,
//         created: "",
//         name: "",
//         frontend: [],
//         backend: [],
//         infrastructure: [],
//         note: "",
//         url: "",
//         repository: "",
//         image: "",
//     }
// });
</script>

<template>
    <div class="card w-96 shadow">
        <figure><img :src="system.image" class="h-64 object-contain" /></figure>
        <div class="card-body">
            <div class="card-title flex-col items-start gap-0">
                <p class="text-xs mx-0">{{ system.created }}</p>
                {{ system.name }}
            </div>
            <template v-for="type in ['frontend', 'backend', 'infrastructure']">
                <template v-if="system[type].length">
                    <div>
                        <div class="uppercase text-xs pb-0">
                            {{ type }}
                        </div>
                        <div v-for="tag in system[type]" class="badge badge-outline">
                            {{ tag }}
                        </div>
                    </div>
                </template>
            </template>
            <div class="card-actions justify-end mt-2">
                <button v-if="system.url !== ''" class="btn btn-sm bg-primary border-primary">
                    <a :href="system.url" target="_blank">
                        <Icon icon="akar-icons:link-out" height="16" class="inline" />
                        Link
                    </a>
                </button>
                <button
                    v-if="system.repository !== ''"
                    class="btn btn-sm bg-primary border-primary"
                >
                    <a :href="system.repository" target="_blank" class="text-white">
                        <Icon icon="akar-icons:github-fill" height="16" class="inline" />
                        Github
                    </a>
                </button>
            </div>
        </div>
    </div>
</template>
