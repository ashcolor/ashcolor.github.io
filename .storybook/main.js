const AutoImport = require("unplugin-auto-import/vite");
const Components = require("unplugin-vue-components/vite");
const path = require("path");
const { mergeConfig } = require("vite");

module.exports = {
    stories: [
        "../src/App.stories.@(js|jsx|ts|tsx)",
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],
    framework: "@storybook/vue3",
    core: {
        builder: "@storybook/builder-vite",
    },
    features: {
        storyStoreV7: true,
    },
    viteFinal: async (config) => {
        return mergeConfig(config, {
            resolve: {
                alias: {
                    "~": path.resolve(__dirname, "../src"),
                },
            },
            plugins: [
                AutoImport({
                    include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
                    imports: [
                        "vue",
                        {
                            "@vueuse/core": ["useMouse", ["useFetch", "useMyFetch"]],
                            axios: [["default", "axios"]],
                            pinia: ["storeToRefs"],
                        },
                    ],
                    dts: "./src/auto-imports.d.ts",
                }),
                Components({
                    dts: "./src/components.d.ts",
                }),
            ],
        });
    },
};
