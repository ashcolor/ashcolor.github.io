<script setup></script>

<template>
    <div class="flex flex-col md:flex-row">
        <ProfileContainer />
        <MainContainer />
    </div>
    <MyFooter />
</template>

<style>
::-webkit-scrollbar {
    width: 12px; /* 横幅 */
}

::-webkit-scrollbar-thumb {
    background: #e4e4e7; /* ハンドルの色 */
}

::-webkit-scrollbar-track {
    background: #00000000; /* 背景色 */
}
</style>
