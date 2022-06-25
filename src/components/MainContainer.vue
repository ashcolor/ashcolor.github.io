<script setup></script>

<template>
    <div class="flex flex-col gap-y-8 m-8">
        <div>
            <p class="text-2xl font-bold">System</p>
            <SystemList />
        </div>
        <div>
            <p class="text-2xl font-bold">Github</p>
            <GithubReposList />
        </div>
        <div>
            <p class="text-2xl font-bold">Qiita</p>
            <QiitaArticleList />
        </div>
    </div>
</template>
