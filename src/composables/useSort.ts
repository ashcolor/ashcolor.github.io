import { computed, ref, Ref } from "vue";

type Direction = "asc" | "desc";
export const useSort = (listRef: Ref<Array<any>>, key: string, direction: Direction = "asc") => {
    const keyRef = ref(key);
    const directionRef = ref(direction);
    const sortedList = computed(() => {
        const sortedList = listRef.value.sort((a, b) => a[keyRef.value] - b[keyRef.value]);
        if (directionRef.value === "desc") {
            sortedList.reverse();
        }
        return sortedList;
    });
    return { sortedList, keyRef, directionRef };
};
