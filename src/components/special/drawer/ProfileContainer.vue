<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
    <div class="md:max-w-sm flex flex-col gap-y-12 bg-slate-100 p-8">
        <div>
            <ProfileItemTitle>Web Engineer</ProfileItemTitle>
            <h1 class="text-4xl">ashcolor</h1>
        </div>
        <div>
            <ProfileItemTitle>accounts</ProfileItemTitle>
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
        </div>
        <div>
            <div>
                <ProfileItemTitle>frontend</ProfileItemTitle>
                <p>JavaScript/TypeScript/Vue.js/NuxtJS</p>
            </div>
            <div class="mt-2">
                <ProfileItemTitle>backend</ProfileItemTitle>
                <p>PHP/CakePHP/Laravel</p>
            </div>
        </div>
        <div>
            <ProfileItemTitle>Certification</ProfileItemTitle>
            <p>FE(2011/9)</p>
            <p>AP(2012/11)</p>
            <p>Linuc Level1(2019/2)</p>
        </div>
        <div>
            <ProfileItemTitle>Tags</ProfileItemTitle>
            <TechTagList />
        </div>
    </div>
</template>
