import { defineStore } from "pinia";

export const useTagStore = defineStore("tag", {
    state: () => ({
        systemTags: [],
        qiitaTags: [],
        githubTags: [],
    }),
    getters: {
        allTags: (state) => {
            return [...state.systemTags, ...state.qiitaTags, ...state.githubTags];
        },
        uniqueTags: (state) => {
            return Array.from(new Set(state.allTags));
        },
        tagCounts: (state) => {
            const tagCounts = [];
            state.uniqueTags.forEach((tag) => {
                tagCounts.push({
                    name: tag,
                    count: state.allTags.filter((t) => tag === t).length,
                });
            });
            return tagCounts.sort((a, b) => b["count"] - a["count"]);
        },
    },
});
