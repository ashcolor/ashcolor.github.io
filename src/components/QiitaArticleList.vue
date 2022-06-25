<script setup lang="ts">
import { useFetch } from "@vueuse/core";
import { useSort } from "~/composables/useSort";
import { useTagStore } from "~/stores/tag";
import { CONSTS } from "~/utils/constants";

const tagStore = useTagStore();
const { qiitaTags } = storeToRefs(tagStore);

const { isFetching, error, data } = useFetch(CONSTS.QIITA_ITEMS_API_URL);

const articles = computed(() => {
    if (!data.value) return [];
    const tmpArticles = JSON.parse(data.value);
    tmpArticles.forEach((article, index) => {
        tmpArticles[index]["tags"] = article.tags.map((tag) => tag.name);
    });
    return tmpArticles;
});

const { sortedList: sortedArticles } = useSort(articles, "likes_count", "desc");

watch(articles, (newArticles) => {
    if (!newArticles.value) return;
    const tags = newArticles.value.map((article) => article.tags).flat();
    qiitaTags.value.push(...tags);
});
</script>

<template>
    <div class="h-64 overflow-y-scroll border-2 border-accent-content">
        <template v-if="isFetching">Loading...</template>
        <template v-else>
            <table class="table h-32">
                <tbody>
                    <template v-for="(article, index) in sortedArticles">
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
