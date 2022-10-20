import ProfileContainer from "./ProfileContainer.vue";

export default {
    component: ProfileContainer,
    argTypes: {},
};

const Template = (args) => ({
    components: { ProfileContainer },
    setup() {
        return { args };
    },
    template: '<ProfileContainer v-bind="args" />',
});

export const Normal = Template.bind({});
Normal.args = {};
