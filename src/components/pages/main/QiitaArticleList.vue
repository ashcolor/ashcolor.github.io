<script setup lang="ts">
import { useFetch } from "@vueuse/core";
import { useSort } from "~/composables/useSort";
import { useTagStore } from "~/stores/tag";
import { CONSTS } from "~/utils/constants";
import { util } from "~/utils/util";

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
    <ListContainer :isLoading="isFetching">
        <ul class="h-32 divide-y-2">
            <template v-for="(article, index) in sortedArticles">
                <ReposArticleItem
                    :count="article.likes_count"
                    :tags="article.tags"
                    :title="article.title"
                    :href="article.url"
                    :date="util.transportFromISOStringToString(article.updated_at)"
                />
            </template>
        </ul>
    </ListContainer>
</template>
