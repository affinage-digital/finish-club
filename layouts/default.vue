<template>
    <div>
        <nuxt />
        <div class="languages">
            <nuxt-link v-if="$i18n.locale !== 'ru'" :to="switchLocalePath('ru')">RU</nuxt-link>
            <nuxt-link v-if="$i18n.locale !== 'az'" :to="switchLocalePath('az')">AZ</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
    .languages {
        position: absolute;
        top: 2vw;
        left: 4.323vw;
        font-family: $Akzidenz;
        font-size: 16px;
        font-weight: 500;

        @media screen and (max-width: 750px) {
            left: 6vw;
            font-size: 14px;
        }

        a {
            color: #fff;
        }
    }
</style>
