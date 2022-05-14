<script setup lang="ts">
import { useTagStore } from "~/stores/tag";
import { CONSTS } from "~/utils/constants";

const tagStore = useTagStore();
const { githubTags } = storeToRefs(tagStore);

const repos = ref([]);

onMounted(async () => {
    const response = await axios.get(CONSTS.GITHUB_REPOS_API_URL);
    if (response.status !== 200) {
    }
    repos.value = response.data.sort((a, b) => b["stargazers_count"] - a["stargazers_count"]);
    repos.value = repos.value.filter((repo) => repo.fork === false);
    repos.value.forEach((repo) => {
        githubTags.value.push(...repo.topics);
    });
});
</script>

<template>
    <div class="h-64 overflow-y-scroll border-2 border-accent-content">
        <table class="table h-32">
            <tbody>
                <template v-for="(repo, index) in repos">
                    <ReposArticleItem
                        :count="repo.stargazers_count"
                        :tags="repo.topics"
                        :name="repo.name"
                        :description="repo.description"
                        :href="repo.html_url"
                    />
                </template>
            </tbody>
        </table>
    </div>
</template>
