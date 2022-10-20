<script setup></script>

<template>
    <div class="flex-shrink-10 flex flex-col gap-y-8 m-8">
        <div>
            <ContentTItle title="System" />
            <SystemList />
        </div>
        <div>
            <ContentTItle title="Github" />
            <GithubReposList />
        </div>
        <div>
            <ContentTItle title="Qiita" />
            <QiitaArticleList />
        </div>
    </div>
</template>
