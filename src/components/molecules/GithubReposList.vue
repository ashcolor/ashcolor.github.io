<script setup lang="ts">
import { useFetch } from "@vueuse/core";
import { useTagStore } from "~/stores/tag";
import { CONSTS } from "~/utils/constants";

const tagStore = useTagStore();
const { githubTags } = storeToRefs(tagStore);

const { isFetching, error, data } = useFetch(CONSTS.GITHUB_REPOS_API_URL);

const repos = computed(() => {
    if (!data.value) return [];
    const repos = JSON.parse(data.value);
    const filterdRepos = repos.filter((repo) => repo.fork === false);
    return repos.sort((a, b) => b["stargazers_count"] - a["stargazers_count"]);
});

watch(repos, (newRepos) => {
    const tags = newRepos.map((repos) => repos.topics).flat();
    githubTags.value.push(...tags);
});
</script>

<template>
    <div class="h-64 overflow-y-scroll border-2 border-accent-content">
        <template v-if="isFetching">Loading...</template>
        <template v-else>
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
        </template>
    </div>
</template>
