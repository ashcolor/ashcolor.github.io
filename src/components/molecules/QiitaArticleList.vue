<script setup lang="ts">
import { useFetch } from "@vueuse/core";
import { useTagStore } from "~/stores/tag";
import { CONSTS } from "~/utils/constants";

const tagStore = useTagStore();
const { qiitaTags } = storeToRefs(tagStore);

const { isFetching, error, data } = useFetch(CONSTS.QIITA_ITEMS_API_URL);

const articles = computed(() => {
    if (!data.value) return [];
    const articles = JSON.parse(data.value);
    return articles.sort((a, b) => b["likes_count"] - a["likes_count"]);
});

watch(articles, (newArticles) => {
    const tags = newArticles.map((article) => article.tags.map((tag) => tag.name)).flat();
    qiitaTags.value.push(...tags);
});
</script>

<template>
    <div class="h-64 overflow-y-scroll border-2 border-accent-content">
        <template v-if="isFetching">Loading...</template>
        <template v-else>
            <table class="table h-32">
                <tbody>
                    <template v-for="(article, index) in articles">
                        <ReposArticleItem
                            :count="article.likes_count"
                            :tags="article.tags"
                            :name="article.title"
                            :href="article.url"
                        />
                    </template>
                </tbody>
            </table>
        </template>
    </div>
</template>
