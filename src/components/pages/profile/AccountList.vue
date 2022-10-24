<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
    <div class="flex gap-2">
        <a href="mailto:ashcolor27@gmail.com" target="_blank">
            <Icon icon="entypo:mail" height="24" />
        </a>
        <a href="https://github.com/ashcolor" target="_blank">
            <Icon icon="akar-icons:github-fill" height="24" />
        </a>

        <a href="https://twitter.com/ashcolor06" target="_blank">
            <Icon icon="akar-icons:twitter-fill" height="24" />
        </a>

        <div class="relative overflow-hidden h-6 w-12">
            <a href="https://qiita.com/ashcolor" target="_blank" class="absolute -top-3">
                <Icon icon="simple-icons:qiita" height="48" />
            </a>
        </div>
    </div>
</template>
