<script setup lang="ts">
import { Icon } from "@iconify/vue";

interface Props {
    href: string;
    count: number;
    tags: Array<string>;
    name: string;
    description?: string;
}
const props = withDefaults(defineProps<Props>(), {
    href: "",
    count: 0,
    tags: [] as Array<string>,
    name: "",
    description: "",
});

const onClick = (href) => {
    open(href, "_blank");
};
</script>

<template>
    <tr class="cursor-pointer" @click="onClick(href)">
        <td>
            <Icon icon="ant-design:star" color="black" width="24" height="24" class="inline" />
            <span class="text-sm">+{{ count }}</span>
        </td>
        <td>
            <div v-for="tag in tags" class="badge badge-xs badge-outline">
                {{ tag }}
            </div>
            <p>{{ name }}</p>
            <p>{{ description }}</p>
        </td>
    </tr>
</template>
