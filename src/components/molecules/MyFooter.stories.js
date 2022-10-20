import MyFooter from "./MyFooter.vue";

export default {
    component: MyFooter,
    argTypes: {},
};

const Template = (args) => ({
    components: { MyFooter },
    setup() {
        return { args };
    },
    template: '<MyFooter v-bind="args" />',
});

export const Normal = Template.bind({});
Normal.args = {};
