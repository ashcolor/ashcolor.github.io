<script setup lang="ts">
const articles = ref([]);

onMounted(async () => {
    const response = await axios.get(
        "https://asia-northeast1-official-website-271208.cloudfunctions.net/qiita-items"
    );
    if (response.status !== 200) {
    }
    console.log(response);

    articles.value = response.data.sort((a, b) => b["likes_count"] - a["likes_count"]);
    articles.value = articles.value.map((article) => {
        article.tags = article.tags.map((tag) => tag.name);
        return article;
    });
});
// let tags = [];
// this.qiitaarticles.forEach((article) => {
//     tags = tags.concat(article.tags);
// });
</script>

<template>
    <div class="h-64 overflow-y-scroll border-2 border-accent-content">
        <table class="table h-32">
            <tbody>
                <template v-for="(article, index) in articles">
                    <TechList
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
