<script setup lang="ts">
import { Icon } from "@iconify/vue";

interface Props {
    href: string;
    count: number;
    tags: Array<string>;
    title: string;
    description?: string;
}
const props = withDefaults(defineProps<Props>(), {
    href: "",
    count: 0,
    tags: [],
    title: "",
    description: "",
});

const onClick = (href: string) => {
    open(href, "_blank");
};
</script>

<template>
    <li class="p-2">
        <a class="link" @click="onClick(href)">{{ title }}</a>
        <p class="text-xs text-slate-500">{{ description }}</p>
        <div class="flex gap-2 text-slate-500">
            <div>
                <Icon icon="ant-design:star" width="16" height="16" class="inline" />
                <span class="text-xs">{{ count }}</span>
            </div>
            <div>
                <div v-for="tag in tags" class="badge badge-xs badge-outline">
                    {{ tag }}
                </div>
            </div>
        </div>
    </li>
</template>
