import TechTagWithCount from "./TechTagWithCount.vue";

export default {
    component: TechTagWithCount,
    argTypes: {
        name: {
            name: "name",
            type: { name: "string", required: true },
            description: "名前",
            control: {
                type: "text",
            },
        },
        count: {
            name: "count",
            type: { name: "number", required: true },
            description: "カウント",
            control: { type: "range", min: 1, max: 30, step: 1 },
        },
        onClick: {},
    },
};

const Template = (args) => ({
    components: { TechTagWithCount },
    setup() {
        return { args };
    },
    template: '<TechTagWithCount v-bind="args" />',
});

export const Large = Template.bind({});
Large.args = {
    name: "Vue.js",
    count: 3,
};

export const Normal = Template.bind({});
Normal.args = {
    name: "React.js",
    count: 2,
};
