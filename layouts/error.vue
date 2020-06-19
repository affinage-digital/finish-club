<template>
    <div class="main-wrapper">
        <div class="container error">
            <h1 class="error__title">{{ error.statusCode }}</h1>
            <p class="error__message">{{ errorMessage }}</p>
            <nuxt-link to="/" class="error__link">Вернуться на главную</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        error: {
            type: Object,
            default: () => ({}),
        },
    },
    computed: {
        errorMessage() {
            switch (this.error.statusCode) {
            case 404:
                return 'Страница не найдена';
            case 500:
                return 'Ошибка сервера';
            default:
                return 'Ошибка!';
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.error {
    min-height: calc(100vh - 80px);
    padding-top: 140px;
    text-align: center;

    &__title {
        font-size: 288px;
        line-height: 351px;
        font-weight: 500;
        margin-bottom: 20px;
    }

    &__message {
        font-size: 40px;
        line-height: 49px;
        font-weight: 700;
        margin-bottom: 20px;
    }

    &__link {
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
    }
}
</style>
