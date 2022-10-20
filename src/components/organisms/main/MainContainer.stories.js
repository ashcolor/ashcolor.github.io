import MainContainer from "./MainContainer.vue";

export default {
    component: MainContainer,
    argTypes: {},
};

const Template = (args) => ({
    components: { MainContainer },
    setup() {
        return { args };
    },
    template: "<MainContainer />",
});

export const Normal = Template.bind({});
Normal.args = {};
