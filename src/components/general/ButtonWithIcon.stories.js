import ButtonWithIcon from "./ButtonWithIcon.vue";

export default {
    component: ButtonWithIcon,
    argTypes: {
        text: {
            name: "name",
            type: { name: "string", required: true },
            description: "テキスト",
            control: {
                type: "text",
            },
        },
        icon: {
            name: "icon",
            type: { name: "string", required: true },
            description:
                "アイコンクラス<br />Use Iconify<br />See https://icon-sets.iconify.design/",
            control: {
                type: "text",
            },
        },
    },
};

const Template = (args) => ({
    components: { ButtonWithIcon },
    setup() {
        return { args };
    },
    template: '<ButtonWithIcon v-bind="args" />',
});

export const Add = Template.bind({});
Add.args = {
    text: "新規追加",
    icon: "carbon:add-alt",
};

export const Edit = Template.bind({});
Edit.args = {
    text: "編集",
    icon: "ant-design:edit-outlined",
    class: "badge-primary",
};

export const Delete = Template.bind({});
Delete.args = {
    text: "削除",
    icon: "ant-design:delete-outlined",
    class: "badge-error",
};
