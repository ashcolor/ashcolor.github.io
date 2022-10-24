import AccountList from "./AccountList.vue";

export default {
    component: AccountList,
    argTypes: {},
};

const Template = (args) => ({
    components: { AccountList },
    setup() {
        return { args };
    },
    template: "<AccountList />",
});

export const Normal = Template.bind({});
Normal.args = {};
