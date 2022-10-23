import SystemCard from "../SystemCard.vue";
import ButtonWithIcon from "../../atoms/ButtonWithIcon.vue";

export default {
    component: SystemCard,
    argTypes: {
        system: {},
    },
};

const Template = (args) => ({
    components: { SystemCard, ButtonWithIcon },
    setup() {
        return { args };
    },
    template: '<SystemCard v-bind="args" />',
});

export const Normal = Template.bind({});
Normal.args = {
    system: {
        id: 1,
        created: "2020/01/01",
        name: "title",
        frontend: ["test"],
        backend: ["test", "test"],
        infrastructure: ["test", "test", "test"],
        note: "システムの備考",
        url: "https://example.com/",
        repository: "https://github.com",
        image: "https://placehold.jp/150x150.png",
    },
};
