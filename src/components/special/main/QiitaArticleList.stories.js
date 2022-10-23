import QiitaArticleList from "../QiitaArticleList.vue";

export default {
    component: QiitaArticleList,
    argTypes: {},
};

const Template = (args) => ({
    components: { QiitaArticleList },
    setup() {
        return { args };
    },
    template: '<QiitaArticleList v-bind="args" />',
});

export const Normal = Template.bind({});
Normal.args = {};
