import SystemList from "../SystemList.vue";

export default {
    component: SystemList,
    argTypes: {},
};

const Template = (args) => ({
    components: { SystemList },
    setup() {
        return { args };
    },
    template: "<SystemList />",
});

export const Normal = Template.bind({});
Normal.args = {};
