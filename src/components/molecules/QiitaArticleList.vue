<script setup lang="ts">
import { useTagStore } from "~/stores/tag";
import { CONSTS } from "~/utils/constants";

const tagStore = useTagStore();
const { qiitaTags } = storeToRefs(tagStore);

const articles = ref([]);

onMounted(async () => {
    const response = await axios.get(CONSTS.QIITA_ITEMS_API_URL);
    if (response.status !== 200) {
    }
    articles.value = response.data.sort((a, b) => b["likes_count"] - a["likes_count"]);
    articles.value = articles.value.map((article) => {
        article.tags = article.tags.map((tag) => tag.name);
        return article;
    });
    articles.value.forEach((article) => {
        qiitaTags.value.push(...article.tags);
    });
});
</script>

<template>
    <div class="h-64 overflow-y-scroll border-2 border-accent-content">
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
    </div>
</template>
