import GithubReposList from "./GithubReposList.vue";

export default {
    component: GithubReposList,
    argTypes: {},
};

const Template = (args) => ({
    components: { GithubReposList },
    setup() {
        return { args };
    },
    template: '<GithubReposList v-bind="args" />',
});

export const Normal = Template.bind({});
Normal.args = {};
