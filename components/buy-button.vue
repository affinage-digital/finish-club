<template>
    <a class="buy-button" :class="fakeIndex === 6 ? 'with-sell' : ''"
        :href="compoundUrl" target="_blank" rel="noopener noreferrer">
        <svg enable-background="new 0 0 100 125" viewBox="0 0 100 125" xmlns="http://www.w3.org/2000/svg">
            <path d="m85 5h-70c-5.5 0-10 4.5-10 10v70c0 5.5 4.5 10 10 10h70c5.5 0 10-4.5 10-10v-70c0-5.5-4.5-10-10-10zm6 80c0 3.3-2.7 6-6 6h-70c-3.3 0-6-2.7-6-6v-56h82zm0-60h-82v-10c0-3.3 2.7-6 6-6h70c3.3 0 6 2.7 6 6zm-72.6-9.4c.4.4.6.9.6 1.4v.4c0 .1-.1.2-.1.4 0 .1-.1.2-.2.4s-.1.2-.2.3-.2.2-.3.2-.2.1-.4.2c-.1 0-.2.1-.4.1-.1 0-.3 0-.4 0-.5 0-1-.2-1.4-.6-.1-.1-.2-.2-.2-.3-.1-.1-.1-.2-.2-.4-.1-.1-.1-.2-.1-.4 0-.1 0-.3 0-.4 0-.5.2-1 .6-1.4.5-.5 1.2-.7 1.8-.5.1 0 .2.1.4.1.1.1.2.1.4.2-.1.1 0 .2.1.3zm10 0c.4.4.6.9.6 1.4v.4c0 .1-.1.2-.1.4 0 .1-.1.2-.2.4-.1.1-.1.2-.2.3-.5.3-1 .5-1.5.5-.1 0-.3 0-.4 0s-.2-.1-.4-.1c-.1 0-.2-.1-.3-.2s-.2-.1-.3-.2-.2-.2-.2-.3c-.1-.1-.1-.2-.2-.4 0-.1-.1-.2-.1-.4 0-.1 0-.3 0-.4 0-.5.2-1 .6-1.4.1-.1.2-.2.3-.2s.2-.1.3-.2.2-.1.4-.1c.3-.1.5-.1.8 0 .1 0 .2.1.4.1.1.1.2.1.4.2s0 .1.1.2zm10 0c.4.4.6.9.6 1.4v.4c0 .1-.1.2-.1.4 0 .1-.1.2-.2.3s-.2.2-.2.3c-.5.4-1 .6-1.5.6s-1-.2-1.4-.6c-.1-.1-.2-.2-.2-.3-.1-.1-.1-.2-.2-.3 0-.1-.1-.2-.1-.4 0-.1 0-.3 0-.4 0-.5.2-1 .6-1.4.6-.8 2-.8 2.7 0zm46.6 1.4c0 1.1-.9 2-2 2h-36c-1.1 0-2-.9-2-2s.9-2 2-2h36c1.1 0 2 .9 2 2zm-68 68h66c1.1 0 2-.9 2-2v-46c0-1.1-.9-2-2-2h-66c-1.1 0-2 .9-2 2v46c0 1.1.9 2 2 2zm44.2-4h-18c1.8-3 2.8-6.4 2.8-10 0-.1 0-.3 0-.4v-.1c0-1.6-.3-3.2-.7-4.7.6-.2 1.2-.2 1.8-.2 3.3 0 6 2.2 6 5 0 1.1.9 2 2 2s2-.9 2-2c0-5-4.5-9-10-9-1.1 0-2.2.2-3.3.5-.6-1.2-1.4-2.3-2.3-3.3 2.5-1.8 5.4-2.8 8.5-2.8 3.8 0 7.4 1.4 10.1 4 1.6 1.5 2.9 3.3 3.7 5.4.7 1.6 1 3.4 1.1 5.2v.3.1c.1 3.7-1.3 7.2-3.7 10zm19.8 0h-14.9c1.9-3 2.9-6.4 2.9-10 0-.1 0-.3 0-.4v-.1c0-1.6-.3-3.2-.7-4.7.6-.2 1.2-.2 1.8-.2 3.3 0 6 2.2 6 5 0 1.1.9 2 2 2s2-.9 2-2c0-5-4.5-9-10-9-1.1 0-2.2.2-3.3.5-.6-1.2-1.4-2.3-2.3-3.3 2.5-1.8 5.4-2.8 8.5-2.8 2.8 0 5.6.8 8 2.3zm-62-42h62v14.8c-2.5-1.2-5.2-1.8-8-1.8-4.2 0-8.2 1.4-11.5 3.9-3.3-2.5-7.3-3.9-11.5-3.9s-8.2 1.4-11.5 3.9c-3.3-2.5-7.3-3.9-11.5-3.9-2.8 0-5.5.6-8 1.8zm0 28.8c1.1-1.4 3-2.3 5-2.3 3.3 0 6 2.2 6 5 0 1.1.9 2 2 2s2-.9 2-2c0-5-4.5-9-10-9-1.8 0-3.5.4-5 1.2v-4.4c2.4-1.5 5.1-2.3 8-2.3 3.8 0 7.4 1.4 10.1 4 1.6 1.5 2.9 3.3 3.7 5.4.7 1.6 1 3.4 1.1 5.2v.3.1c0 3.7-1.4 7.2-3.8 10h-19.1z"/>
        </svg> Купить <template v-if="fakeIndex !== 6"><span>со скидкой</span></template>
    </a>
</template>

<script>
export default {
    props: {
        fakeIndex: {
            type: Number,
            default: undefined,
        },
    },

    data: () => ({
        compoundUrl: ''
    }),

    mounted() {
        let query = window.location.search;
        let utmUrl = this.fakeIndex === 1
            ? "https://www.ozon.ru/highlight/31867/?utm_medium=vnd&utm_source=Reckittbenckiser&utm_campaign="
            : "https://www.ozon.ru/highlight/31528/?utm_medium=vnd&utm_source=Reckittbenckiser&utm_campaign=";

        if (query.includes("utm_campaign")) {
            if (query.includes("utm_source") && query.includes("utm_target")) {
                let utmSource = query.split("utm_source=").pop().split("&")[0];
                let utmTarget = query.split("utm_target=").pop().split("&")[0];
                let newUtmCampaign = `${ utmSource }_${ utmTarget }_finishpip`;

                utmUrl += newUtmCampaign;
            } else {
                utmUrl += "other";
            }
        } else {
            if (this.fakeIndex === 6) {
                utmUrl += "quantum_ultimate";
            } else {
                utmUrl += "other_finishpip";
            }
        }

        this.compoundUrl = utmUrl;
    },
};
</script>

<style lang="scss">
    .buy-button {
        display: block;
        height: 5.731vw; // было 3.731vw;
        padding: 1.306vw 2.425vw 0.622vw;
        font-family: $Akzidenz;
        font-size: 1.368vw;
        letter-spacing: 0.358vw;
        text-decoration: none;
        text-transform: uppercase;
        color: #fff;
        border-radius: 2.799vw;
        background: linear-gradient(45deg, hsl(338, 83%, 45%) 0%, hsl(358, 96%, 61%) 100%);
        transition: border ease-in 200ms, background ease-in 200ms;

        @media screen and (max-width: 750px) {
            height: 16vw; // было 8vw;
            padding: 4.306vw 6.425vw 3.622vw;
            font-size: 4.368vw;
            line-height: 2;
            border-radius: 7.867vw;
        }

        &:hover {
            border: 2px solid #fff;
            background: transparent;
            cursor: pointer;
        }

        &.with-sell {
            line-height: 3.2vw;

            @media screen and (max-width: 750px) {
                line-height: 2;
            }
        }

        svg {
            float: left;
            width: 3.109vw;
            height: auto;
            fill: #fff;
            margin-right: 0.622vw;

            @media screen and (max-width: 750px) {
                width: 8vw;
                margin-right: 1.622vw;
            }
        }

        span {
            display: block;
            font-family: $Akzidenz;
            font-size: 1.306vw;
            letter-spacing: 0;
            text-transform: lowercase;
            white-space: nowrap;

            @media screen and (max-width: 750px) {
                font-size: 3.506vw;
                line-height: 1;
            }
        }
    }

    .slide-5 {
        .buy-button {
            background: linear-gradient(45deg, rgb(205, 20, 212) 0%, rgb(251, 59, 140) 100%);
        }
    }

    .slide-4 {
        .buy-button {
            color: hsl(55, 100%, 16%);
            background: linear-gradient(45deg, hsl(57, 98%, 51%) 0%, hsl(52, 100%, 50%) 100%);
            transition: border ease-in 200ms, background ease-in 200ms, color ease-in 200ms;

            svg {
                fill: hsl(55, 100%, 16%);
                transition: fill ease-in 200ms;
            }

            &:hover {
                color: #fff;
                background: transparent;

                svg {
                    fill: #fff;
                }
            }
        }
    }
</style>
