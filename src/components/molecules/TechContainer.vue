<script setup lang="ts">
import { useAudio } from "../composables/useAudio";
import { useAudioStore } from "../stores/audio";
import { CONSTS } from "../utils/constants";
import { utils } from "../utils/utils";

const textareaRef = ref();
const buffers = [];

const audioStore = useAudioStore();
const audioContext = computed(() => audioStore.audioContext);
const selectedSwitch = computed(() => audioStore.selectedSwitch);
const { play } = useAudio(audioContext.value, buffers);

onMounted(() => {
    loadSample(selectedSwitch.value.file);
    textareaRef.value.focus();
});

watch(selectedSwitch, () => {
    loadSample(selectedSwitch.value.file);
    textareaRef.value.focus();
});

const loadSample = async (id: string) => {
    buffers.splice(0);
    for (let i = 0; i < selectedSwitch.value.sample; i++) {
        buffers[i] = await utils.getAudioBufferFromUrl(`${CONSTS.STORAGE_PATH}/${id}${i}.mp3`);
    }
};
</script>

<template>
    <v-list-item :href="href" target="_blank">
        <v-list-item-icon>
            <v-icon color="yellow">mdi-star</v-icon>
            {{ count }}
        </v-list-item-icon>
        <v-list-item-content>
            <v-chip v-for="tag in tags" :key="tag" outlined small>
                {{ tag }}
            </v-chip>
            <v-list-item-title v-text="name"></v-list-item-title>
            <v-list-item-subtitle v-text="description"></v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>
</template>
