import { computed, Ref } from "vue";

export const useSort = (listRef: Ref<Array<any>>, key: string, order: "asc" | "desc" = "asc") => {
    const sortedList = computed(() => {
        return listRef.value.sort((a, b) => b[key] - a[key]);
    });
    return { sortedList };
};
