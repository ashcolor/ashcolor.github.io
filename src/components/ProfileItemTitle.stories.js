import ProfileItemTitle from "./ProfileItemTitle.vue";

export default {
    component: ProfileItemTitle,
    argTypes: {
        slot: {
            control: "string",
            description: "タイトル",
        },
    },
};

const Template = (args) => ({
    components: { ProfileItemTitle },
    setup() {
        return { args };
    },
    template: "<ProfileItemTitle> {{ args.slot }} </ProfileItemTitle>",
});

export const Normal = Template.bind({});
Normal.args = {
    slot: "タイトル",
};
