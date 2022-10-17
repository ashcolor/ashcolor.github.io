import ReposArticleItem from "./ReposArticleItem.vue";

export default {
    component: ReposArticleItem,
    argTypes: {
        href: {
            name: "遷移先URL",
            type: { name: "string", required: true },
            description: "名前",
            control: {
                type: "text",
            },
        },
        count: {
            name: "カウント",
            type: { name: "number", required: true },
            description: "カウント",
            control: { type: "range", min: 1, max: 30, step: 1 },
        },
        tags: {
            name: "遷移先URL",
            type: { name: "string", required: true },
            description: "名前",
            control: {
                type: "text",
            },
        },
        title: {
            name: "タイトル",
            type: { name: "string", required: true },
            description: "カウント",
            control: {
                type: "text",
            },
        },
        description: {
            name: "説明",
            type: { name: "string", required: true },
            description: "カウント",
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
};
