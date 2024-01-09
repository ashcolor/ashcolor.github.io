<template>
    <div class="flex flex-col w-screen h-screen">
        <div
            class="
                flex-1
                grid grid-flow-row
                auto-rows-min
                md:grid-rows-none
                md:auto-rows-fr
                md:grid-flow-col md:grid-cols-min
            "
        >
            <div class="md:max-w-sm flex flex-col gap-y-12 bg-slate-100 p-8">
                <div>
                    <ProfileItemTitle>Web Engineer</ProfileItemTitle>
                    <h1 class="text-4xl">ashcolor</h1>
                </div>
                <div>
                    <ProfileItemTitle>accounts</ProfileItemTitle>
                    <AccountList />
                </div>
                <div>
                    <div>
                        <ProfileItemTitle>frontend</ProfileItemTitle>
                        <p>JavaScript/TypeScript/Vue.js/NuxtJS</p>
                    </div>
                    <div class="mt-2">
                        <ProfileItemTitle>backend</ProfileItemTitle>
                        <p>PHP/CakePHP/Laravel</p>
                    </div>
                </div>
                <div>
                    <ProfileItemTitle>Certification</ProfileItemTitle>
                    <p>FE(2012/11)</p>
                    <p>AP(2016/12)</p>
                    <p>Linuc Level1(2019/2)</p>
                </div>
                <div>
                    <ProfileItemTitle>Tags</ProfileItemTitle>
                    <TechTagList />
                </div>
            </div>
            <div class="grid gap-8 m-8">
                <div class="xl:col-start-1 xl:col-end-3 w-full overflow-x-auto">
                    <ContentTItle title="System" />
                    <SystemList />
                </div>
                <div class="xl:col-start-1 xl:col-end-2">
                    <ContentTItle title="Github" />
                    <GithubReposList />
                </div>
                <div class="xl:col-start-2 xl:col-end-3">
                    <ContentTItle title="Qiita" />
                    <QiitaArticleList />
                </div>
            </div>
        </div>
        <MyFooter />
    </div>
</template>

<style>
::-webkit-scrollbar {
    width: 12px;
}

::-webkit-scrollbar-thumb {
    background: #e4e4e7;
}

::-webkit-scrollbar-track {
    background: #00000000;
}
</style>
