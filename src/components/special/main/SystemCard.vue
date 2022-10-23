<script setup lang="ts">
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

const props = withDefaults(defineProps<Props>(), {
    system: {
        id: -1,
        created: "",
        name: "",
        frontend: [],
        backend: [],
        infrastructure: [],
        note: "",
        url: "",
        repository: "",
        image: "",
    } as System,
});

const openInNewTab = (url) => {
    window.open(url, "_blank");
};
</script>

<template>
    <div class="card min-w-[24rem] shadow">
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
                <ButtonWithIcon
                    v-if="system.url !== ''"
                    text="Link"
                    icon="akar-icons:link-out"
                    @click="openInNewTab(system.url)"
                >
                </ButtonWithIcon>
                <ButtonWithIcon
                    v-if="system.repository !== ''"
                    text="Github"
                    icon="akar-icons:github-fill"
                    @click="openInNewTab(system.repository)"
                >
                </ButtonWithIcon>
            </div>
        </div>
    </div>
</template>
