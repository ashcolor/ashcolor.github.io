import ContentTitle from "./ContentTitle.vue";

export default {
    component: ContentTitle,
    argTypes: {
        title: {
            title: "title",
            type: { title: "string", required: true },
            description: "タイトル",
            control: {
                type: "text",
            },
        },
    },
};

const Template = (args) => ({
    components: { ContentTitle },
    setup() {
        return { args };
    },
    template: '<ContentTitle v-bind="args" />',
});

export const Normal = Template.bind({});
Normal.args = {
    title: "タイトル",
};
