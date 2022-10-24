import TechTagList from "./TechTagList.vue";

export default {
    component: TechTagList,
    argTypes: {},
};

const Template = (args) => ({
    components: { TechTagList },
    setup() {
        return { args };
    },
    template: "<TechTagList />",
});

export const Normal = Template.bind({});
Normal.args = {};
