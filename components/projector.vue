<template>
    <div class="projector">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1600"
            height="900"
            viewBox="0 0 3200 1800"
        >
            <defs>
                <linearGradient
                    :id="'linear1' + uid"
                    x1="51"
                    x2="3190"
                    y1="-234"
                    y2="1883"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" :stop-color="projector.projector_color_1" />
                    <stop offset="1" :stop-color="projector.projector_color_2" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                    :id="'linear2' + uid"
                    x1="918"
                    x2="74"
                    y1="120"
                    y2="964"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" :stop-color="projector.second_cicle_color_1" />
                    <stop offset="1" :stop-color="projector.second_cicle_color_2" stop-opacity="0" />
                </linearGradient>
                <clipPath :id="'mask' + uid">
                    <path d="M-209-234l3690 2101-167 16L-240 834z" />
                </clipPath>
            </defs>

            <g>
                <g opacity="0.5">
                    <path :fill="`url(#linear1${uid})`" d="M-209-234l3690 2101-167 16L-240 834z" />
                </g>
                <g :clip-path="`url(#mask${uid})`" opacity="0.2">
                    <path
                        :fill="projector.cicles_color_1"
                        d="M421 299c233.064 0 422 188.936 422 422s-188.936 422-422 422S-1 954.064-1 721s188.936-422 422-422z"
                    />
                </g>
                <g :clip-path="`url(#mask${uid})`" opacity="0.1">
                    <path
                        :fill="projector.cicles_color_2"
                        d="M2438-24c390.465 0 707 326.608 707 729.5S2828.465 1435 2438 1435s-707-326.608-707-729.5S2047.535-24 2438-24z"
                    />
                </g>
                <g>
                    <path
                        :fill="`url(#linear2${uid})`"
                        d="M496 120c233.064 0 422 188.936 422 422S729.064 964 496 964 74 775.064 74 542s188.936-422 422-422z"
                    />
                </g>
            </g>
        </svg>
    </div>
</template>

<script>
export default {
    props: {
        projector: {
            type: Object,
            default: {
                projector_color_1: 'transparent',
                projector_color_2: 'transparent',
                cicles_color_1: 'transparent',
                cicles_color_2: 'transparent',
                second_cicle_color_1: 'transparent',
                second_cicle_color_2: 'transparent'
            },
        },
    },

    data: () => ({
        uid: '',
    }),

    created() {
        // digital-магия
        this.$nextTick(() => {
            this.uid = Math.random().toString().replace('.', '');
        });
    }
};
</script>

<style lang="scss">
    .projector {
        svg {
            width: 100%;
            height: 100%;
        }
    }

    @media screen and (max-width: 750px) {
        .projector {
            display: none;
        }
    }
</style>
