<script setup lang="ts">
import { useFetch } from "@vueuse/core";
import { useSort } from "~/composables/useSort";
import { useTagStore } from "~/stores/tag";
import { CONSTS } from "~/utils/constants";
import { util } from "~/utils/util";

const tagStore = useTagStore();
const { githubTags } = storeToRefs(tagStore);

const { isFetching, error, data } = useFetch(CONSTS.GITHUB_REPOS_API_URL);

const repos = computed(() => {
    if (!data.value) return [];
    const repos = JSON.parse(data.value);
    return repos.filter((repo) => repo.fork === false);
});

const { sortedList: sortedRepos } = useSort(repos, "stargazers_count", "desc");

watch(repos, (newRepos) => {
    const tags = newRepos.map((repos) => repos.topics).flat();
    githubTags.value.push(...tags);
});
</script>

<template>
    <ListContainer :isLoading="isFetching">
        <ul class="h-32 divide-y-2">
            <template v-for="(repo, index) in sortedRepos">
                <ReposArticleItem
                    :count="repo.stargazers_count"
                    :tags="repo.topics"
                    :title="repo.name"
                    :description="repo.description"
                    :href="repo.html_url"
                    :date="util.transportFromISOStringToString(repo.updated_at)"
                />
            </template>
        </ul>
    </ListContainer>
</template>
