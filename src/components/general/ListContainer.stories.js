import ListContainer from "../molecules/ListContainer.vue";

export default {
    component: ListContainer,
    argTypes: {
        isLoading: {
            name: "isLoading",
            type: { name: "boolean", required: true },
            description: "ローディング判定",
            control: {
                type: "boolean",
            },
        },
    },
};

const Template = (args) => ({
    components: { ListContainer },
    setup() {
        return { args };
    },
    template: '<ListContainer v-bind="args" />',
});

export const Loading = Template.bind({});
Loading.args = {
    isLoading: false,
};

export const Loaded = Template.bind({});
Loaded.args = {
    isLoading: true,
};
