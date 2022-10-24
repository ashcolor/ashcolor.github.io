import ReposArticleItem from "./ReposArticleItem.vue";

export default {
    component: ReposArticleItem,
    argTypes: {
        href: {
            name: "href",
            type: { name: "string", required: true },
            description: "遷移先URL",
            control: {
                type: "text",
            },
        },
        count: {
            name: "count",
            type: { name: "number", required: true },
            description: "カウント",
            control: { type: "range", min: 1, max: 30, step: 1 },
        },
        tags: {
            name: "tags",
            type: { name: "string", required: true },
            description: "タグ",
            control: {
                type: "text",
            },
        },
        title: {
            name: "title",
            type: { name: "string", required: true },
            description: "タイトル",
            control: {
                type: "text",
            },
        },
        description: {
            name: "description",
            type: { name: "string", required: false },
            description: "説明",
            control: {
                type: "text",
            },
        },
        date: {
            name: "date",
            type: { name: "string", required: false },
            description: "日付",
            control: {
                type: "text",
            },
        },
        onClick: {},
    },
};

const Template = (args) => ({
    components: { ReposArticleItem },
    setup() {
        return { args };
    },
    template: '<ReposArticleItem v-bind="args" />',
});

export const Normal = Template.bind({});
Normal.args = {
    href: "https:example.com",
    count: 10,
    tags: ["Vue.js", "NuxtJS"],
    title: "タイトルテキスト",
    description: "説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。説明文。",
    date: "2020/01/01",
};
