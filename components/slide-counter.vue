<template>
    <div class="slidecounter">
        <div class="slidecounter-container">
            <svg @click="prevSlide" :style="{ transform: 'rotate(180deg)' }"
                enable-background="new 0 0 684 742.5" viewBox="0 0 684 742.5" xmlns="http://www.w3.org/2000/svg">
                <path :fill="arrowsColor" clip-rule="evenodd" d="m0 0 342 594 342-594c-219 91-464 91-684 0z" fill-rule="evenodd"/>
            </svg>

            <div class="slidecounter-number">
                0{{ slideIndex + 1 }}
            </div>

            <svg @click="nextSlide" enable-background="new 0 0 684 742.5" viewBox="0 0 684 742.5" xmlns="http://www.w3.org/2000/svg">
                <path :fill="arrowsColor" clip-rule="evenodd" d="m0 0 342 594 342-594c-219 91-464 91-684 0z" fill-rule="evenodd"/>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        slideIndex: {
            type: Number,
            default: 0,
        },
        arrowsColor: {
            type: String,
            default: '#fff',
        },
    },

    methods: {
        prevSlide() {

        },

        nextSlide() {

        },
    }
};
</script>

<style lang="scss">
    .slidecounter {
        position: absolute;
        bottom: 5.526vw;
        right: 5.592vw;
        display: flex;
        flex-direction: column;
        align-items: center;

        @media screen and (min-width: 1024px) and (max-height: 800px) {
            bottom: 6.526vw;
        }
    }

    .slidecounter-container {
        display: flex;
        flex-direction: column;
        align-items: center;

        svg {
            width: 1.493vw;
            cursor: pointer;
        }
    }

    .slidecounter-number {
        font-family: $Gilroy;
        font-size: 2.678vw;
        font-weight: 300;
        color: #fff;
        margin-top: 0.498vw;
        margin-bottom: 0.498vw;
    }

    @media screen and (max-width: 750px) {
        .slidecounter {
            bottom: 6.5vw;
            left: 6vw;
            right: auto;

            svg {
                width: 6.493vw;
            }
        }

        .slidecounter-number {
            font-size: 9.678vw;
        }
    }

    @media screen and (min-width: 1800px) {
        .slidecounter {
            bottom: 3.526vw;
        }
    }
</style>
