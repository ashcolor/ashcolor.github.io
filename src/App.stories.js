import App from "./App.vue";

export default {
    component: App,
    argTypes: {},
};

const Template = (args) => ({
    components: { App },
    setup() {
        return { args };
    },
    template: "<App />",
});

export const Normal = Template.bind({});
Normal.args = {};
