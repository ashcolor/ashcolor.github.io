<script setup></script>

<template>
    <div class="grid gap-8 m-8">
        <div class="xl:col-start-1 xl:col-end-3">
            <ContentTItle title="System" />
            <SystemList />
        </div>
        <div class="xl:col-start-1 xl:col-end-2">
            <ContentTItle title="Github" />
            <GithubReposList />
        </div>
        <div class="xl:col-start-2 xl:col-end-3">
            <ContentTItle title="Qiita" />
            <QiitaArticleList />
        </div>
    </div>
</template>
