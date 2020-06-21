<template>
    <div class="slide-container" :class="'slide-' + newIndex">
        <a class="agreement-doc" target="_blank" href="/finish-club_web-site_cookies_policy.docx">{{ $t('policy') }}</a>

        <div class="slide">
            <projector v-if="newIndex !== 0" :projector="content.projector" />

            <div class="slide-bg"></div>
            <div class="slide-text-container" :class="{ 'is-ready': showAnimation }">
                <div class="text-1" v-html="content.text_1"></div>
                <div class="text-2" v-html="content.text_2"></div>
                <div class="text-3" v-html="content.text_3"></div>
            </div>
            <div v-if="content.image" class="slide-image-container"
                :style="{'background-image': 'url(' + content.image + ')'}"></div>

            <div v-if="newIndex === 5" class="slide-image-container">
                <div class="slide-image-container__title" v-html="$t('slide5.title')"></div>
                <div class="slide-image-container__first">
                    <div class="slide-image-container__icon">
                        <img src="/img/kran.png" />
                    </div>
                    <div class="slide-image-container__litrs">
                        <img src="/img/160-litr.png" />
                    </div>
                    <div class="slide-image-container__text" v-html="$t('slide5.desc1')"></div>
                </div>
                <div class="slide-image-container__second">
                    <div class="slide-image-container__icon">
                        <img src="/img/machine-img.png" />
                    </div>
                    <div class="slide-image-container__litrs">
                        <img src="/img/12-litr.png" />
                    </div>
                    <div class="slide-image-container__text" v-html="$t('slide5.desc2')"></div>
                </div>
            </div>

            <div class="slider-button">
                <buy-button :fakeIndex="newIndex" />
            </div>

            <div v-if="content.disclimer" class="disclimer" v-html="content.disclimer"></div>
        </div>

        <template v-if="newIndex !== 6">
            <slide-counter
                :slideIndex="slideIndex"
                :arrowsColor="content.arrows_color"
            />
        </template>
    </div>
</template>

<script>
import BuyButton from '@/components/buy-button.vue';
import Projector from '@/components/projector.vue';
import SlideCounter from '@/components/slide-counter.vue';

export default {
    components: {
        BuyButton,
        Projector,
        SlideCounter,
    },

    props: {
        content: {
            type: Object,
            default: undefined,
        },
        slideIndex: {
            type: Number,
            default: 0,
        },
        fakeIndex: {
            type: Number,
            default: undefined,
        },
        showAnimation: {
            type: Boolean,
            default: false,
        }
    },

    i18n: {
        messages: {
            ru: {
                policy: 'политика по использованию файлов cookies',
                slide5: {
                    title: 'Расход воды',
                    desc1: 'при мытье посуды<br /> руками',
                    desc2: 'при мытье посуды в посудомоечной машине',
                }
            },
            az: {
                policy: 'çerez siyasəti',
                slide5: {
                    title: 'Su istehlakı',
                    desc1: 'əlləri ilə qab<br/> yuyarkən',
                    desc2: 'qabyuyan maşında qab yuyarkən',
                }
            },
        },
    },

    computed: {
        newIndex() {
            let newIndex;

            if (this.fakeIndex !== undefined && this.slideIndex === 0) {
                newIndex = this.fakeIndex + 1;
            } else {
                newIndex = this.slideIndex + 1;
            }
            if (this.fakeIndex !== undefined && this.fakeIndex + 1 === this.slideIndex + 1) {
                newIndex = 1;
            }

            return newIndex;
        },
    },
};
</script>

<style lang="scss">
    .slide-container {
        width: 100%;
        height: 100%;
    }

    .agreement-doc {
        position: absolute;
        z-index: 9998;
        bottom: 2vw;
        left: 4.323vw;
        width: 13vw;
        font-size: 15px;
        text-decoration: none;
        cursor: pointer;

        @media screen and (max-width: 750px) {
            right: 6vw;
            width: auto;
            font-size: 8px;
            text-align: right;
        }
    }

    .slide {
        .slide-text-container {
            .text-1 {
                opacity: 0;
                transform: translate3d(-100%, 0, 0);
                transition: opacity 1s $easeOutExpo, transform 1s $easeOutExpo;
            }

            .text-2 {
                opacity: 0;
                transform: translate3d(-100%, 0, 0);
                transition: opacity 1s 0.15s $easeOutExpo, transform 1s 0.15s $easeOutExpo;
            }

            .text-3 {
                opacity: 0;
                transform: translate3d(-100%, 0, 0);
                transition: opacity 1s 0.3s $easeOutExpo, transform 1s 0.3s $easeOutExpo;
            }

            &.is-ready {
                .text-1,
                .text-2,
                .text-3 {
                    opacity: 1;
                    transform: none;
                }
            }
        }
    }

    // $textTransitionDelay: left 1000ms, opacity 1000ms;

    .slide-1 {
        .agreement-doc {
            color: #fff;
        }

        .slide-bg {
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('/img//bg1@2x.jpg');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;

            @media screen and (max-width: 1600px) {
                background-image: url('/img//bg1.jpg');
            }

            @media screen and (max-width: 750px) {
                background-image: url('/img//bg-1-mobile@2x.jpg');
            }
        }

        .text-1 {
            position: absolute;
            top: 9.438vw;
            left: 5.841vw;
            font-family: $Akzidenz;
            font-size: 2.674vw;
            line-height: 2.712vw;
            font-weight: 500;
            color: hsl(0, 0%, 100%);

            @media screen and (min-width: 1920px) {
                top: calc(9.438vw * 0.8);
                font-size: calc(2.674vw * 0.8);
                line-height: calc(2.712vw * 0.8);
            }

            @media screen and (min-width: 1024px) and (max-height: 800px) {
                top: calc(9.438vw * 0.8);
                font-size: calc(2.674vw * 0.8);
                line-height: calc(2.712vw * 0.8);
            }
        }

        .text-2 {
            position: absolute;
            top: 18vw;
            left: 14.614vw;
            font-family: $Akzidenz;
            font-size: 3.731vw;
            line-height: 3.856vw;
            font-weight: 500;
            color: hsl(175, 100%, 50%);

            @media screen and (min-width: 1920px) {
                top: calc(18vw * 0.8);
                font-size: calc(3.731vw * 0.8);
                line-height: calc(3.856vw * 0.8);
            }

            @media screen and (min-width: 1024px) and (max-height: 800px) {
                top: calc(18vw * 0.8);
                font-size: calc(3.731vw * 0.8);
                line-height: calc(3.856vw * 0.8);
            }
        }

        .text-3 {
            position: absolute;
            top: 26vw;
            left: 24.378vw;
            font-family: $Gilroy;
            font-size: 1.617vw;
            font-weight: 500;
            color: hsl(0, 0%, 100%);
            margin-bottom: 0.933vw;

            @media screen and (min-width: 1920px) {
                top: calc(26vw * 0.8);
                font-size: calc(1.617vw * 0.8);
            }

            @media screen and (min-width: 1024px) and (max-height: 800px) {
                top: calc(26vw * 0.8);
                font-size: calc(1.617vw * 0.8);
            }
        }

        .text-3 ul {
            list-style: none;
        }

        .text-3 ul li {
            font-family: $Gilroy;
            font-size: 1.617vw;
            font-weight: 500;
            color: hsl(0, 0%, 100%);
            margin-bottom: 0.933vw;

            @media screen and (max-width: 1920px) {
                font-size: calc(1.617vw * 0.9);
            }

            @media screen and (min-width: 1024px) and (max-height: 800px) {
                font-size: calc(1.617vw * 0.8);
            }
        }

        .text-3 ul li::before {
            content: '';
            display: inline-block;
            width: 0.311vw;
            height: 0.311vw;
            font-weight: 700;
            border-radius: 50%;
            background-color: hsl(179, 100%, 55%);
            margin-right: 1.2vw;
            margin-left: -1.175em;
        }
    }

    .slide-2 {
        .agreement-doc {
            color: #62474c;
        }

        .slide-bg {
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('/img//bg2@2x.jpg');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;

            @media screen and (max-width: 1600px) {
                background-image: url('/img//bg2.jpg');
            }

            @media screen and (max-width: 750px) {
                background-image: url('/img//bg-2-mobile@2x.jpg');
            }
        }

        .text-1 {
            position: absolute;
            top: 12.438vw;
            left: 5.841vw;
            font-family: $Akzidenz;
            font-size: 2.674vw;
            line-height: 2.712vw;
            font-weight: 500;
            color: hsl(338, 86%, 14%);

            @media screen and (min-width: 1920px) {
                top: calc(12.438vw * 0.8);
                font-size: calc(2.674vw * 0.8);
                line-height: calc(2.712vw * 0.8);
            }

            @media screen and (min-width: 1024px) and (max-height: 800px) {
                top: calc(12.438vw * 0.8);
                font-size: calc(2.674vw * 0.8);
                line-height: calc(2.712vw * 0.8);
            }
        }

        .text-2 {
            position: absolute;
            top: 18vw;
            left: 14.614vw;
            font-family: $Akzidenz;
            font-size: 3.731vw;
            line-height: 3.856vw;
            font-weight: 500;
            color: hsl(338, 92%, 36%);

            @media screen and (min-width: 1920px) {
                top: calc(18vw * 0.8);
                font-size: calc(3.731vw * 0.8);
                line-height: calc(3.856vw * 0.8);
            }

            @media screen and (min-width: 1024px) and (max-height: 800px) {
                top: calc(18vw * 0.8);
                font-size: calc(3.731vw * 0.8);
                line-height: calc(3.856vw * 0.8);
            }
        }

        .text-3 {
            position: absolute;
            top: 30vw;
            left: 24.378vw;
            font-family: $Gilroy;
            font-size: 1.617vw;
            line-height: 2.7vw;
            font-weight: 500;
            color: hsl(349, 16%, 33%);
            margin-bottom: 0.933vw;

            @media screen and (min-width: 1920px) {
                top: calc(30vw * 0.8);
                font-size: calc(1.617vw * 0.8);
                line-height: calc(2.7vw * 0.8);
            }

            @media screen and (min-width: 1024px) and (max-height: 800px) {
                top: calc(30vw * 0.8);
                font-size: calc(1.617vw * 0.8);
                line-height: calc(2.7vw * 0.8);
            }
        }
    }

    .slide-3 {
        .agreement-doc {
            color: #62474c;
        }

        .slide-bg {
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('/img//bg2@2x.jpg');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;

            @media screen and (max-width: 1600px) {
                background-image: url('/img//bg2.jpg');
            }

            @media screen and (max-width: 750px) {
                background-image: url('/img//bg-2-mobile@2x.jpg');
            }
        }

        .text-1 {
            position: absolute;
            top: 12.438vw;
            left: 5.841vw;
            font-family: $Akzidenz;
            font-size: 2.674vw;
            line-height: 2.712vw;
            font-weight: 500;
            color: hsl(338, 86%, 14%);

            @media screen and (min-width: 1920px) {
                top: calc(12.438vw * 0.8);
                font-size: calc(2.674vw * 0.8);
                line-height: calc(2.712vw * 0.8);
            }

            @media screen and (min-width: 1024px) and (max-height: 800px) {
                top: calc(12.438vw * 0.8);
                font-size: calc(2.674vw * 0.8);
                line-height: calc(2.712vw * 0.8);
            }
        }

        .text-2 {
            position: absolute;
            top: 18vw;
            left: 14.614vw;
            font-family: $Akzidenz;
            font-size: 3.731vw;
            line-height: 3.856vw;
            font-weight: 500;
            color: hsl(338, 92%, 36%);

            @media screen and (min-width: 1920px) {
                top: calc(18vw * 0.8);
                font-size: calc(3.731vw * 0.8);
                line-height: calc(3.856vw * 0.8);
            }

            @media screen and (min-width: 1024px) and (max-height: 800px) {
                top: calc(18vw * 0.8);
                font-size: calc(3.731vw * 0.8);
                line-height: calc(3.856vw * 0.8);
            }
        }

        .text-3 {
            position: absolute;
            top: 27vw;
            left: 24.378vw;
            font-family: $Gilroy;
            font-size: 1.617vw;
            line-height: 2.7vw;
            font-weight: 500;
            color: hsl(349, 16%, 33%);
            margin-bottom: 0.933vw;

            @media screen and (min-width: 1920px) {
                top: calc(27vw * 0.8);
                font-size: calc(1.617vw * 0.8);
                line-height: calc(2.7vw * 0.8);
            }

            @media screen and (min-width: 1024px) and (max-height: 800px) {
                top: calc(27vw * 0.8);
                font-size: calc(1.617vw * 0.8);
                line-height: calc(2.7vw * 0.8);
            }
        }
    }

    .slide-4 {
        .agreement-doc {
            color: #fff;
        }

        .slide-bg {
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('/img//bg3@2x.jpg');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;

            @media screen and (max-width: 1600px) {
                background-image: url('/img//bg3.jpg');
            }

            @media screen and (max-width: 750px) {
                background-image: url('/img//bg-4-mobile@2x.jpg');
            }
        }

        .text-1 {
            position: absolute;
            top: 12.438vw;
            left: 5.841vw;
            font-family: $Akzidenz;
            font-size: 2.674vw;
            line-height: 2.712vw;
            font-weight: 500;
            color: hsl(0, 0%, 100%);

            @media screen and (min-width: 1920px) {
                top: calc(12.438vw * 0.8);
                font-size: calc(2.674vw * 0.8);
                line-height: calc(2.712vw * 0.8);
            }

            @media screen and (min-width: 1024px) and (max-height: 800px) {
                top: calc(12.438vw * 0.8);
                font-size: calc(2.674vw * 0.8);
                line-height: calc(2.712vw * 0.8);
            }
        }

        .text-2 {
            position: absolute;
            top: 18vw;
            left: 14.614vw;
            font-family: $Akzidenz;
            font-size: 3.731vw;
            line-height: 3.856vw;
            font-weight: 500;
            color: hsl(160, 100%, 17%);

            @media screen and (min-width: 1920px) {
                top: calc(18vw * 0.8);
                font-size: calc(3.731vw * 0.8);
                line-height: calc(3.856vw * 0.8);
            }

            @media screen and (min-width: 1024px) and (max-height: 800px) {
                top: calc(18vw * 0.8);
                font-size: calc(3.731vw * 0.8);
                line-height: calc(3.856vw * 0.8);
            }
        }

        .text-3 {
            position: absolute;
            top: 30vw;
            left: 24.378vw;
            font-family: $Gilroy;
            font-size: 1.617vw;
            line-height: 2.7vw;
            font-weight: 500;
            color: hsl(0, 0%, 100%);
            margin-bottom: 0.933vw;

            @media screen and (min-width: 1920px) {
                top: calc(30vw * 0.8);
                font-size: calc(1.617vw * 0.8);
                line-height: calc(2.7vw * 0.8);
            }

            @media screen and (min-width: 1024px) and (max-height: 800px) {
                top: calc(30vw * 0.8);
                font-size: calc(1.617vw * 0.8);
                line-height: calc(2.7vw * 0.8);
            }
        }
    }

    .slide-5 {
        .agreement-doc {
            color: #fff;
        }

        .slide-bg {
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('/img//bg5@2x.jpg');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;

            @media screen and (max-width: 1600px) {
                background-image: url('/img//bg5.jpg');
            }

            @media screen and (max-width: 750px) {
                background-image: url('/img//bg5.jpg');
            }
        }

        .text-1 {
            position: absolute;
            top: 12.438vw;
            left: 5.841vw;
            font-family: $Akzidenz;
            font-size: 2.674vw;
            line-height: 2.712vw;
            font-weight: 500;
            color: #051243;

            @media screen and (min-width: 1920px) {
                top: calc(12.438vw * 0.8);
                font-size: calc(2.674vw * 0.8);
                line-height: calc(2.712vw * 0.8);
            }

            @media screen and (min-width: 1024px) and (max-height: 800px) {
                top: calc(12.438vw * 0.8);
                font-size: calc(2.674vw * 0.8);
                line-height: calc(2.712vw * 0.8);
            }
        }

        .text-2 {
            position: absolute;
            top: 18vw;
            left: 14.614vw;
            font-family: $Akzidenz;
            font-size: 3.731vw;
            line-height: 3.856vw;
            font-weight: 500;
            color: #c70ea2;

            @media screen and (min-width: 1920px) {
                top: calc(18vw * 0.8);
                font-size: calc(3.731vw * 0.8);
                line-height: calc(3.856vw * 0.8);
            }

            @media screen and (min-width: 1024px) and (max-height: 800px) {
                top: calc(18vw * 0.8);
                font-size: calc(3.731vw * 0.8);
                line-height: calc(3.856vw * 0.8);
            }
        }

        .text-3 {
            position: absolute;
            top: 26vw;
            left: 24.378vw;
            width: 35%;
            font-family: $Gilroy;
            font-size: 1.617vw;
            line-height: 2.7vw;
            font-weight: 500;
            color: #333446;
            margin-bottom: 0.933vw;

            @media screen and (min-width: 1920px) {
                top: calc(30vw * 0.8);
                font-size: calc(1.617vw * 0.8);
                line-height: calc(2.7vw * 0.8);
            }

            @media screen and (min-width: 1024px) and (max-height: 800px) {
                top: calc(30vw * 0.8);
                width: 41%;
                font-size: calc(1.617vw * 0.8);
                line-height: calc(2.7vw * 0.8);
            }
        }

        .slide-image-container {
            background-color: #fff;

            &__first {
                display: flex;
                align-items: center;
                margin-left: 4vw;

                @media screen and (max-width: 750px) {
                    margin-left: 12vw;
                }
            }

            &__second {
                display: flex;
                align-items: center;
                margin-top: 3vw;
                margin-left: 4vw;

                @media screen and (max-width: 750px) {
                    margin-left: 12vw;
                }

                .slide-image-container__icon {
                    width: 5vw;

                    @media screen and (max-width: 750px) {
                        width: 7vw;
                    }
                }

                .slide-image-container__litrs {
                    margin-left: 2.9vw;

                    @media screen and (min-width: 1600px) {
                        margin-left: 2.3vw;
                    }

                    @media screen and (max-width: 750px) {
                        margin-left: 3.4vw;
                    }
                }

                .slide-image-container__text {
                    font-family: $Gilroy;
                    margin-left: 1.7vw;

                    @media screen and (max-width: 750px) {
                        font-size: 2.5vw;
                        margin-left: 2.4vw;
                    }
                }
            }

            &__icon {
                width: 4vw;

                @media screen and (max-width: 750px) {
                    width: 7vw;
                }
            }

            &__litrs {
                width: 4vw;
                margin-left: 2vw;

                @media screen and (max-width: 750px) {
                    width: 6vw;
                }
            }

            &__text {
                font-size: 1.5vw;
                margin-left: 1vw;

                @media screen and (max-width: 750px) {
                    margin-left: 2vw;
                }
            }

            &__title {
                font-family: $Gilroy;
                font-size: 3.2vw;
                font-weight: 700;
                text-align: center;
                color: #051243;
                margin-top: 7vw;
                margin-bottom: 3vw;

                @media screen and (max-width: 750px) {
                    font-size: 4.2vw;
                }
            }

            img {
                width: 100%;
                height: auto;
            }
        }

        .disclimer {
            color: #fff;
        }
    }

    .slide-6 {
        .slide-image-container {
            top: 4vw;
            right: 7vw;
            width: 26vw;
            height: 26vw;
            border-radius: 0;
            background-repeat: no-repeat;
            background-size: contain !important;
        }

        .disclimer {
            font-size: 10px;
            color: #fff;
        }

        .agreement-doc {
            color: #fff;
        }

        .slide-bg {
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('/img//bg6@2x.jpg');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;

            @media screen and (max-width: 1600px) {
                background-image: url('/img//bg6.jpg');
            }

            @media screen and (max-width: 750px) {
                background-image: url('/img//bg-6-mobile@2x.jpg');
            }
        }

        .text-1 {
            position: absolute;
            top: 9.438vw;
            left: 5.341vw;
            font-family: $Akzidenz;
            font-size: 2.974vw;
            line-height: 3.3vw;
            font-weight: 500;
            color: #fff;

            @media screen and (min-width: 750px) {
                &.text-enter-active {
                    left: 5.341vw !important;
                }
            }

            @media screen and (min-width: 1920px) {
                top: calc(9.438vw * 0.8);
                font-size: calc(3.874vw * 0.8);
                line-height: calc(3.912vw * 0.8);
            }

            @media screen and (min-width: 1024px) and (max-height: 800px) {
                top: calc(9.438vw * 0.8);
                font-size: calc(3.874vw * 0.8);
                line-height: calc(3.912vw * 0.8);
            }
        }

        .text-2 {
            position: absolute;
            top: 23vw;
            left: 5.614vw;
            font-family: $Gilroy;
            font-size: 2.331vw;
            line-height: 2.156vw;
            font-weight: 500;
            color: hsl(0, 0%, 100%);

            @media screen and (min-width: 750px) {
                &.text-enter-active {
                    left: 5.614vw !important;
                }
            }

            @media screen and (min-width: 1920px) {
                top: calc(23vw * 0.8);
                font-size: calc(2.331vw * 0.8);
                line-height: calc(2.156vw * 0.8);
            }

            @media screen and (min-width: 1024px) and (max-height: 800px) {
                top: calc(23vw * 0.8);
                font-size: calc(2.331vw * 0.8);
                line-height: calc(2.156vw * 0.8);
            }
        }

        .text-3 {
            position: absolute;
            top: 30vw;
            left: 26.378vw;
            font-family: $Gilroy;
            font-size: 1.617vw;
            line-height: 2.7vw;
            font-weight: 500;
            color: hsl(190, 27%, 18%);
            margin-bottom: 0.933vw;

            @media screen and (min-width: 1920px) {
                top: calc(30vw * 0.8);
                font-size: calc(1.617vw * 0.8);
                line-height: calc(2.7vw * 0.8);
            }

            @media screen and (min-width: 1024px) and (max-height: 800px) {
                top: calc(30vw * 0.8);
                font-size: calc(1.617vw * 0.8);
                line-height: calc(2.7vw * 0.8);
            }
        }
    }

    @media screen and (max-width: 750px) {
        .slide {
            .text-1 {
                position: absolute;
                z-index: 1;
                top: 36.438vw;
                font-size: 4.267vw;
                line-height: 4.2vw;
            }

            .text-2 {
                position: absolute;
                z-index: 1;
                top: 56.438vw;
                left: 6vw;
                font-size: 6vw;
                line-height: 6vw;
            }

            .text-3 {
                position: absolute;
                z-index: 1;
                top: 79vw;
                left: 6vw;
                font-size: 3.8vw;
                line-height: 5vw;

                ul {
                    padding-left: 4.667vw;
                    margin: 0;

                    li {
                        font-size: 3.8vw;
                        line-height: 5vw;
                        margin-bottom: 3vw;

                        &::before {
                            width: 1.311vw;
                            height: 1.311vw;
                            margin-right: 2.4vw;
                        }
                    }
                }
            }
        }

        .slide-2 {
            .slide {
                .text-1 {
                    top: 16.438vw;
                }

                .text-2 {
                    top: 32.438vw;
                }

                .text-3 {
                    top: 55vw;
                }
            }
        }

        .slide-3 {
            .slide {
                .text-1 {
                    top: 30.438vw;
                }

                .text-2 {
                    top: 46.438vw;
                }

                .text-3 {
                    top: 63vw;
                }
            }
        }

        .slide-4 {
            .slide {
                .text-1 {
                    top: 40.438vw;
                }

                .text-3 {
                    top: 78vw;
                }
            }
        }

        .slide-5 {
            .slide {
                .text-1 {
                    top: 36.438vw;
                }

                .text-2 {
                    top: 50.438vw;
                }

                .text-3 {
                    top: 65vw;
                    width: 85%;
                }

                .disclimer {
                    font-size: 1.9vw;
                }

                .slide-image-container {
                    &__title {
                        margin-top: 22vw;
                    }

                    &__text {
                        font-size: 2vw;
                    }

                    &__first {
                        .slide-image-container__litrs {
                            margin-left: 3.6vw;
                        }
                    }

                    &__second {
                        .slide-image-container__text {
                            width: 50%;
                        }
                    }
                }
            }
        }

        .slide-6 {
            .slide-image-container {
                top: 4vw;
                right: 7vw;
                width: 45vw;
                height: 50vw;
            }

            .disclimer {
                top: 69vw;
                bottom: auto;
                left: 6vw;
                right: 6vw;
                font-size: 2.2vw;
            }

            .slide {
                .text-1 {
                    top: 47.438vw;
                    left: 6vw;
                    font-family: $Gilroy;
                    font-size: 3.6vw;
                    line-height: 5.5vw;
                }

                .text-2 {
                    top: 18.438vw;
                    width: 53vw;
                    font-family: $Akzidenz;
                    font-size: 6vw;
                    line-height: 8vw;
                }

                .slide-bg {
                    background-position: 61%;
                }
            }
        }
    }

    .scroll {
        position: absolute;
        bottom: 4.789vw;
        left: 50%;
        width: 1.733vw;
        margin-left: -0.8665vw;

        @media screen and (max-width: 750px) {
            display: none;
        }

        @media screen and (min-width: 1024px) and (max-height: 800px) {
            bottom: 5.789vw;
        }

        @media screen and (min-width: 1920px) {
            bottom: 3.789vw;
        }
    }

    .disclimer {
        position: absolute;
        bottom: 2vw;
        left: 24.5vw;
        right: 16vw;
        font-size: 13px;
        color: #62474c;

        @media screen and (max-width: 750px) {
            bottom: 36vw;
            font-size: 10px;
        }
    }
</style>
