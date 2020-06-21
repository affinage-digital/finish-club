<template>
    <div ref="pageIndex" :style="{ height: windowHeight + 'px'}">
        <div class="rotate-phone" :style="{ height: windowHeight + 'px'}">
            <div class="text" v-html="$t('rotateDevice')"></div>
            <div class="icon">
                <svg enable-background="new 0 0 612 612" viewBox="0 0 612 612" xmlns="http://www.w3.org/2000/svg">
                    <path d="m419.475 63.75c84.15 38.25 142.8 119.85 153 216.75h38.25c-15.3-158.1-145.35-280.5-306-280.5-5.1 0-10.2 0-17.85 0l96.9 96.9zm-160.65-20.4c-15.3-15.3-38.25-15.3-53.55 0l-163.2 163.2c-15.3 15.3-15.3 38.25 0 53.55l306 306c15.301 15.301 38.25 15.301 53.551 0l163.199-163.2c15.301-15.301 15.301-38.25 0-53.551zm117.3 497.25-306-306 163.2-163.2 306 306zm-186.15 7.65c-84.15-38.25-142.8-119.85-153-216.75h-35.7c12.75 158.1 142.8 280.5 303.45 280.5h17.85l-96.899-96.9z"/>
                </svg>
            </div>
        </div>

        <div v-if="agreement" class="cookie-agreement">
            <div class="cookie-agreement__container">
                <div v-if="!nopeClicked" class="cookie-agreement__text" v-html="$t('cookie.bigDesc')"></div>
                <div v-else class="cookie-agreement__text" v-html="$t('cookie.repeatDesc')"></div>

                <div class="cookie-agreement__buttons">
                    <div class="cookie-agreement__okey" @click="agreement = false" v-html="$t('cookie.yes')"></div>
                    <div class="cookie-agreement__nope" :class="{ active: nopeClicked }" @click="nopeClicked = true" v-html="$t('cookie.no')"></div>
                </div>
            </div>
        </div>

        <template v-if="loaded">
            <slide v-show="i === slideIndex" v-for="(content, i) in $t('slides')" :key="i"
                :content="content"
                :slideIndex="i"
                :fakeIndex="fakeIndex"
                :showAnimation="showAnimation" />
        </template>
        <template v-else>
            Loading…
        </template>
    </div>
</template>

<script>
import Slide from '@/components/slide.vue';

export default {
    components: {
        Slide,
    },

    i18n: {
        messages: {
            ru: {
                rotateDevice: 'Пожалуйста,<br /> переверните устройство',
                cookie: {
                    bigDesc: `Внимание! На данном сайте используются файлы «cookies».
                        Подробное описание используемых cookies, а также
                        информация о том, как вы можете их заблокировать,
                        содержится в нашей <a href="/finish-club_web-site_cookies_policy.docx" download target="_blank">
                        «Политике по использованию файлов cookies»</a>. Продолжая использовать сайт, вы соглашаетесь с
                        установкой и использованием указанных файлов в соответствии с Политикой.`,
                    repeatDesc: `Для того, чтобы просмотреть данный сайт, подтвердите свое
                        согласие с <a href="/finish-club_web-site_cookies_policy.docx" download target="_blank">
                        «Политикой по использованию файлов cookies»</a>.`,
                    yes: 'согласен',
                    no: 'не согласен'
                },
                slides: [
                    {
                        index: 0,
                        text_1: `Настольная<br/>
                        посудомоечная<br/>
                        машина —<br/>
                        это...`,
                        text_2: `Удобный гаджет,<br/>
                        который:`,
                        text_3: `<ul>
                        <li>Поместится на любой кухне – просто<br/>
                        поставьте на стол в любое удобное место</li>
                        <li>Легко установить – просто включите<br/>
                        в розетку, можно даже не подсоединять к воде</li>
                        <li>Подходит даже для съемной квартиры –<br/>
                        легко забрать с собой при переезде</li>
                        </ul>`,
                        image: '/img/washingmachine.jpg',
                        bg: '/img/bg1.jpg',
                        bg_x2: '/img/bg1@2x.jpg',
                        mobile_bg_x2: '/img/bg-1-mobile@2x.jpg',
                        arrows_color: '#2b82ff',
                        projector: {
                            projector_color_1: '#6c00ff',
                            projector_color_2: '#6c00ff',
                            cicles_color_1: '#1300c5',
                            cicles_color_2: '#1300c5',
                            second_cicle_color_1: '#d92951',
                            second_cicle_color_2: '#d92951'
                        }
                    },
                    {
                        index: 1,
                        text_1: `Посудомоечная<br/>
                        машина —<br/>
                        это...`,
                        text_2: `+7 свободных<br/>
                        часов в неделю<br/>
                        для себя и семьи`,
                        text_3: `Посудомоечная машина экономит<br/>
                        до 1 часа в день, а это – 7 часов<br/>
                        в неделю, 30 часов в месяц и целых 2 недели<br/>
                        в году! Можно спать на час дольше, больше<br/>
                        времени заниматься с ребенком или выучить<br/>
                        иностранный язык!`,
                        image: '/img/babymom.jpg',
                        bg: '/img/bg2.jpg',
                        bg_x2: '/img/bg2@2x.jpg',
                        mobile_bg_x2: '/img/bg-2-mobile@2x.jpg',
                        arrows_color: '#b00745',
                        disclimer:
                        '* Расчет экономии основан на сравнении среднего времени загрузки/разгрузки посудомоечной машины (12 комплектов посуды, 280 циклов в год), и среднего времени, затрачиваемого потребителем в России при ручном мытье/сушке аналогичного объема посуды (исследования П. Беркхольц и др., Германия, 2009-2016)',
                        projector: {
                            projector_color_1: '#ff8186',
                            projector_color_2: '#ff8287',
                            cicles_color_1: '#9f006f',
                            cicles_color_2: '#c80025',
                            second_cicle_color_1: '#e5d3b6',
                            second_cicle_color_2: '#e5d3b6'
                        }
                    },
                    {
                        index: 2,
                        text_1: `Посудомоечная<br/>
                        машина —<br/>
                        это...`,
                        text_2: `Защита семьи<br/>
                        от бактерий`,
                        text_3: `Многие моют свою (и даже детскую)<br/>
                        посуду руками, несмотря на то, что губка<br/>
                        является рассадником таких бактерий,<br/>
                        как сальмонелла и кишечная палочка.<br/>
                        Посудомоечная машина нагревает воду<br/>
                        до 70 градусов, эффективно убивая бактерии.<br/>
                        Посуда вашего малыша будет по-настоящему чистой!`,
                        image: '/img/whitebottle.jpg',
                        bg: '/img/bg2.jpg',
                        bg_x2: '/img/bg2@2x.jpg',
                        mobile_bg_x2: '/img/bg2@2x.jpg',
                        disclimer:
                        '*Geobacillus stearothermophilus, Enterococcus faecium, Staphylococcus aureus',
                        arrows_color: '#b00745',
                        projector: {
                            projector_color_1: '#ff8186',
                            projector_color_2: '#ff8287',
                            cicles_color_1: '#9f006f',
                            cicles_color_2: '#c80025',
                            second_cicle_color_1: '#e5d3b6',
                            second_cicle_color_2: '#e5d3b6'
                        }
                    },
                    {
                        index: 3,
                        text_1: `Посудомоечная<br/>
                        машина —<br/>
                        это...`,
                        text_2: `Незаменимый<br/>
                        помощник<br/>
                        в новой квартире`,
                        text_3: `Новая квартира – это всегда волнительный<br/>
                        момент, желание сделать идеальный ремонт<br/>
                        и учесть все мелочи, чтобы не жалеть после<br/>
                        переезда. Одно из незаменимых устройств на<br/>
                        любой современной кухне – это посудомоечная<br/>
                        машина, пусть мытье руками навсегда<br/>
                        останется в прошлом!`,
                        image: '/img/funnyppl.jpg',
                        bg: '/img/bg3.jpg',
                        bg_x2: '/img/bg3@2x.jpg',
                        mobile_bg_x2: '/img/bg-4-mobile@2x.jpg',
                        arrows_color: '#9affee',
                        projector: {
                            projector_color_1: '#43bcc5',
                            projector_color_2: '#43bcc5',
                            cicles_color_1: '#197f8b',
                            cicles_color_2: '#32a092',
                            second_cicle_color_1: '#7cd6c4',
                            second_cicle_color_2: '#63a098'
                        }
                    },
                    {
                        index: 4,
                        text_1: `Посудомоечная<br/>
                        машина —<br/>
                        это...`,
                        text_2: `Экономия воды<br/>
                        в 13 раз`,
                        text_3: `На мытье посуды руками уходит
                        до 160 л воды в день.
                        Посудомоечная машина поможет
                        сократить расход воды до 12 л,
                        благодаря чему вы бережете природные
                        ресурсы, а также экономите на платежах
                        за воду и электроэнергию до 6400 р в год.`,
                        bg: '/img/bg5.jpg',
                        bg_x2: '/img/bg5@2x.jpg',
                        mobile_bg_x2: '/img/bg5.jpg',
                        disclimer: `*Средний расход воды в РФ при разовой мойке 12 комплектов посуды: 12 л. в посудомоечной машине Siemens/SN26M230EU в стандартном режиме при t 50°C и 163 л. при ручной мойке
                        (исследования П. Беркхольц и др., Германия, 2009-2016)<br/>
                        **Расчет экономии основан на разнице затрат ресурсов для разовой мойки 12 комплектов посуды (280 моек/циклов в год): средний расход воды в РФ: ручная мойка - 163.5 л.
                        (из них горячей/холодной воды – 108.5 л./55 л.); посудомоечная машина Beko DIN26420 в эко режиме при t 50°C - 9.5 л. и 0.93 кВт электроэнергии (исследования П. Беркхольц и др., Германия, 2009-2016)
                        с учетом цен с 01.07.2019 по 31.12.2019 на горячую/холодную воду, водоотведение для г.Москвы, за исключением Троицкого, Новомосковского АО, цены на электроэнергию (одноставочный тариф,
                        без отопительных установок) для г.Москвы и приравненных потребителей (https://www.mos.ru)`,
                        arrows_color: '#9affee',
                        projector: {
                            projector_color_1: 'rgb(255,255,255)',
                            projector_color_2: 'rgb(0,255,198)',
                            cicles_color_1: 'rgb(0, 126, 255)',
                            cicles_color_2: 'rgb(0, 126, 255)',
                            second_cicle_color_1: 'rgb(255,255,255)',
                            second_cicle_color_2: 'rgb(0,126,255)'
                        }
                    },
                    {
                        index: 5,
                        text_1: `Доверьте посуду <br/>
                        посудомоечной машине <br/>
                        и Finish Quantum Ultimate`,
                        text_2: `Лучшая формула бренда №1*`,
                        image: '/img/Fra5me1.png',
                        bg: '/img/bg5.jpg',
                        bg_x2: '/img/bg5@2x.jpg',
                        mobile_bg_x2: '/img/bg5.jpg',
                        disclimer: `<b>Состав:</b> 15% или более, но менее 30%: неионогенные ПАВ; 5% или более, но менее 15%: кислородсодержащий отбеливатель, фосфонаты, поликарбоксилаты; менее 5%: энзимы, ароматизатор, d-лимонен.
                        <br></br>
                        <b>Срок годности:</b> 2 года с даты производства, указанной на упаковке.
                        <br></br>
                        <b>МЕРЫ ПРЕДОСТОРОЖНОСТИ:</b> вызывает серьезное раздражение глаз. Вызывает раздражение кожи. Содержит субтилизин. Может вызвать аллергическую реакцию. Хранить в недоступном для детей месте. При попадании в глаза осторожно промыть водой в течение нескольких минут. При наличии удалить контактные линзы и продолжить промывание. Если раздражение глаз не проходит, обратиться к врачу, взяв с собой упаковку продукта или этикетку. При попадании на кожу промыть большим количеством воды с мылом. Не глотать. При попадании в полость рта обратиться к врачу.
                        Всегда закрывайте упаковку должным образом. Продукт может представлять опасность удушья для детей до 3х лет. Не разламывать, не прокалывать и не разрезать капсулу. Капсулу брать только сухими руками.
                        <br></br>
                        <b>Способ применения.</b> Капсулу брать только сухими руками. Не вскрывайте капсулу. Оболочка капсулы полностью растворяется в воде в процессе мытья посуды. Не помещать капсулу в корзину для столовых приборов. Поместите одну таблетку на один моющий цикл в СУХОЙ отсек для моющего средства. Всегда закрывайте упаковку должным образом.
                        <br></br>
                        * Продукты под брендом Finish занимают 1 место по доле продаж в денежном и натуральном выражении по данным ООО «ЭЙ СИ НИЛЬСЕН» по аудиту розничной торговли по категории «Средства для посудомоечных машин» в городах РФ с населением от 10 000 чел. за январь 2019 - декабрь 2019 г. включительно (© 2020, ООО «ЭЙ СИ НИЛЬСЕН»)`,
                        arrows_color: '#ffffff',
                        projector: {
                            projector_color_1: 'transparent',
                            projector_color_2: 'transparent',
                            cicles_color_1: 'transparent',
                            cicles_color_2: 'transparent',
                            second_cicle_color_1: 'transparent',
                            second_cicle_color_2: 'transparent'
                        }
                    }
                ]
            },
            az: {
                rotateDevice: 'Пожалуйста,<br /> переверните устройство',
                cookie: {
                    bigDesc: `Внимание! На данном сайте используются файлы «cookies».
                        Подробное описание используемых cookies, а также
                        информация о том, как вы можете их заблокировать,
                        содержится в нашей <a href="/finish-club_web-site_cookies_policy.docx" download target="_blank">
                        «Политике по использованию файлов cookies»</a>. Продолжая использовать сайт, вы соглашаетесь с
                        установкой и использованием указанных файлов в соответствии с Политикой.`,
                    repeatDesc: `Для того, чтобы просмотреть данный сайт, подтвердите свое
                        согласие с <a href="/finish-club_web-site_cookies_policy.docx" download target="_blank">
                        «Политикой по использованию файлов cookies»</a>.`,
                    yes: 'razıyam',
                    no: 'razı deyiləm'
                },
                slides: [
                    {
                        index: 0,
                        text_1: `Настольная<br/>
                        посудомоечная<br/>
                        машина —<br/>
                        это...`,
                        text_2: `Удобный гаджет,<br/>
                        который:`,
                        text_3: `<ul>
                        <li>Поместится на любой кухне – просто<br/>
                        поставьте на стол в любое удобное место</li>
                        <li>Легко установить – просто включите<br/>
                        в розетку, можно даже не подсоединять к воде</li>
                        <li>Подходит даже для съемной квартиры –<br/>
                        легко забрать с собой при переезде</li>
                        </ul>`,
                        image: '/img/washingmachine.jpg',
                        bg: '/img/bg1.jpg',
                        bg_x2: '/img/bg1@2x.jpg',
                        mobile_bg_x2: '/img/bg-1-mobile@2x.jpg',
                        arrows_color: '#2b82ff',
                        projector: {
                            projector_color_1: '#6c00ff',
                            projector_color_2: '#6c00ff',
                            cicles_color_1: '#1300c5',
                            cicles_color_2: '#1300c5',
                            second_cicle_color_1: '#d92951',
                            second_cicle_color_2: '#d92951'
                        }
                    },
                    {
                        index: 1,
                        text_1: `Посудомоечная<br/>
                        машина —<br/>
                        это...`,
                        text_2: `+7 свободных<br/>
                        часов в неделю<br/>
                        для себя и семьи`,
                        text_3: `Посудомоечная машина экономит<br/>
                        до 1 часа в день, а это – 7 часов<br/>
                        в неделю, 30 часов в месяц и целых 2 недели<br/>
                        в году! Можно спать на час дольше, больше<br/>
                        времени заниматься с ребенком или выучить<br/>
                        иностранный язык!`,
                        image: '/img/babymom.jpg',
                        bg: '/img/bg2.jpg',
                        bg_x2: '/img/bg2@2x.jpg',
                        mobile_bg_x2: '/img/bg-2-mobile@2x.jpg',
                        arrows_color: '#b00745',
                        disclimer:
                        '* Расчет экономии основан на сравнении среднего времени загрузки/разгрузки посудомоечной машины (12 комплектов посуды, 280 циклов в год), и среднего времени, затрачиваемого потребителем в России при ручном мытье/сушке аналогичного объема посуды (исследования П. Беркхольц и др., Германия, 2009-2016)',
                        projector: {
                            projector_color_1: '#ff8186',
                            projector_color_2: '#ff8287',
                            cicles_color_1: '#9f006f',
                            cicles_color_2: '#c80025',
                            second_cicle_color_1: '#e5d3b6',
                            second_cicle_color_2: '#e5d3b6'
                        }
                    },
                    {
                        index: 2,
                        text_1: `Посудомоечная<br/>
                        машина —<br/>
                        это...`,
                        text_2: `Защита семьи<br/>
                        от бактерий`,
                        text_3: `Многие моют свою (и даже детскую)<br/>
                        посуду руками, несмотря на то, что губка<br/>
                        является рассадником таких бактерий,<br/>
                        как сальмонелла и кишечная палочка.<br/>
                        Посудомоечная машина нагревает воду<br/>
                        до 70 градусов, эффективно убивая бактерии.<br/>
                        Посуда вашего малыша будет по-настоящему чистой!`,
                        image: '/img/whitebottle.jpg',
                        bg: '/img/bg2.jpg',
                        bg_x2: '/img/bg2@2x.jpg',
                        mobile_bg_x2: '/img/bg2@2x.jpg',
                        disclimer:
                        '*Geobacillus stearothermophilus, Enterococcus faecium, Staphylococcus aureus',
                        arrows_color: '#b00745',
                        projector: {
                            projector_color_1: '#ff8186',
                            projector_color_2: '#ff8287',
                            cicles_color_1: '#9f006f',
                            cicles_color_2: '#c80025',
                            second_cicle_color_1: '#e5d3b6',
                            second_cicle_color_2: '#e5d3b6'
                        }
                    },
                    {
                        index: 3,
                        text_1: `Посудомоечная<br/>
                        машина —<br/>
                        это...`,
                        text_2: `Незаменимый<br/>
                        помощник<br/>
                        в новой квартире`,
                        text_3: `Новая квартира – это всегда волнительный<br/>
                        момент, желание сделать идеальный ремонт<br/>
                        и учесть все мелочи, чтобы не жалеть после<br/>
                        переезда. Одно из незаменимых устройств на<br/>
                        любой современной кухне – это посудомоечная<br/>
                        машина, пусть мытье руками навсегда<br/>
                        останется в прошлом!`,
                        image: '/img/funnyppl.jpg',
                        bg: '/img/bg3.jpg',
                        bg_x2: '/img/bg3@2x.jpg',
                        mobile_bg_x2: '/img/bg-4-mobile@2x.jpg',
                        arrows_color: '#9affee',
                        projector: {
                            projector_color_1: '#43bcc5',
                            projector_color_2: '#43bcc5',
                            cicles_color_1: '#197f8b',
                            cicles_color_2: '#32a092',
                            second_cicle_color_1: '#7cd6c4',
                            second_cicle_color_2: '#63a098'
                        }
                    },
                    {
                        index: 4,
                        text_1: `Посудомоечная<br/>
                        машина —<br/>
                        это...`,
                        text_2: `Экономия воды<br/>
                        в 13 раз`,
                        text_3: `На мытье посуды руками уходит
                        до 160 л воды в день.
                        Посудомоечная машина поможет
                        сократить расход воды до 12 л,
                        благодаря чему вы бережете природные
                        ресурсы, а также экономите на платежах
                        за воду и электроэнергию до 6400 р в год.`,
                        bg: '/img/bg5.jpg',
                        bg_x2: '/img/bg5@2x.jpg',
                        mobile_bg_x2: '/img/bg5.jpg',
                        disclimer: `*Средний расход воды в РФ при разовой мойке 12 комплектов посуды: 12 л. в посудомоечной машине Siemens/SN26M230EU в стандартном режиме при t 50°C и 163 л. при ручной мойке
                        (исследования П. Беркхольц и др., Германия, 2009-2016)<br/>
                        **Расчет экономии основан на разнице затрат ресурсов для разовой мойки 12 комплектов посуды (280 моек/циклов в год): средний расход воды в РФ: ручная мойка - 163.5 л.
                        (из них горячей/холодной воды – 108.5 л./55 л.); посудомоечная машина Beko DIN26420 в эко режиме при t 50°C - 9.5 л. и 0.93 кВт электроэнергии (исследования П. Беркхольц и др., Германия, 2009-2016)
                        с учетом цен с 01.07.2019 по 31.12.2019 на горячую/холодную воду, водоотведение для г.Москвы, за исключением Троицкого, Новомосковского АО, цены на электроэнергию (одноставочный тариф,
                        без отопительных установок) для г.Москвы и приравненных потребителей (https://www.mos.ru)`,
                        arrows_color: '#9affee',
                        projector: {
                            projector_color_1: 'rgb(255,255,255)',
                            projector_color_2: 'rgb(0,255,198)',
                            cicles_color_1: 'rgb(0, 126, 255)',
                            cicles_color_2: 'rgb(0, 126, 255)',
                            second_cicle_color_1: 'rgb(255,255,255)',
                            second_cicle_color_2: 'rgb(0,126,255)'
                        }
                    },
                    {
                        index: 5,
                        text_1: `Доверьте посуду <br/>
                        посудомоечной машине <br/>
                        и Finish Quantum Ultimate`,
                        text_2: `Лучшая формула бренда №1*`,
                        image: '/img/Fra5me1.png',
                        bg: '/img/bg5.jpg',
                        bg_x2: '/img/bg5@2x.jpg',
                        mobile_bg_x2: '/img/bg5.jpg',
                        disclimer: `<b>Состав:</b> 15% или более, но менее 30%: неионогенные ПАВ; 5% или более, но менее 15%: кислородсодержащий отбеливатель, фосфонаты, поликарбоксилаты; менее 5%: энзимы, ароматизатор, d-лимонен.
                        <br></br>
                        <b>Срок годности:</b> 2 года с даты производства, указанной на упаковке.
                        <br></br>
                        <b>МЕРЫ ПРЕДОСТОРОЖНОСТИ:</b> вызывает серьезное раздражение глаз. Вызывает раздражение кожи. Содержит субтилизин. Может вызвать аллергическую реакцию. Хранить в недоступном для детей месте. При попадании в глаза осторожно промыть водой в течение нескольких минут. При наличии удалить контактные линзы и продолжить промывание. Если раздражение глаз не проходит, обратиться к врачу, взяв с собой упаковку продукта или этикетку. При попадании на кожу промыть большим количеством воды с мылом. Не глотать. При попадании в полость рта обратиться к врачу.
                        Всегда закрывайте упаковку должным образом. Продукт может представлять опасность удушья для детей до 3х лет. Не разламывать, не прокалывать и не разрезать капсулу. Капсулу брать только сухими руками.
                        <br></br>
                        <b>Способ применения.</b> Капсулу брать только сухими руками. Не вскрывайте капсулу. Оболочка капсулы полностью растворяется в воде в процессе мытья посуды. Не помещать капсулу в корзину для столовых приборов. Поместите одну таблетку на один моющий цикл в СУХОЙ отсек для моющего средства. Всегда закрывайте упаковку должным образом.
                        <br></br>
                        * Продукты под брендом Finish занимают 1 место по доле продаж в денежном и натуральном выражении по данным ООО «ЭЙ СИ НИЛЬСЕН» по аудиту розничной торговли по категории «Средства для посудомоечных машин» в городах РФ с населением от 10 000 чел. за январь 2019 - декабрь 2019 г. включительно (© 2020, ООО «ЭЙ СИ НИЛЬСЕН»)`,
                        arrows_color: '#ffffff',
                        projector: {
                            projector_color_1: 'transparent',
                            projector_color_2: 'transparent',
                            cicles_color_1: 'transparent',
                            cicles_color_2: 'transparent',
                            second_cicle_color_1: 'transparent',
                            second_cicle_color_2: 'transparent'
                        }
                    }
                ]
            }
        }
    },

    data: () => ({
        loaded: false,
        slideIndex: 0,
        fakeIndex: undefined,
        windowHeight: '100vh',
        agreement: true,
        nopeClicked: false,
        showAnimation: true,
        scrollReady: true,
        startY: null, // для свайпа на мобилке
        utms: [
            "?utm_source=mytarget_beeline&utm_medium=olv&utm_term=time_saving&utm_content=moms_creative_1&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=mytarget_beeline&utm_medium=olv&utm_term=time_saving&utm_content=moms_creative_2&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=mytarget_beeline&utm_medium=olv&utm_term=time_saving&utm_content=moms_creative_3&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=mytarget_beeline&utm_medium=olv&utm_term=time_saving&utm_content=moms_creative_4&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=mytarget_beeline&utm_medium=olv&utm_term=time_saving&utm_content=moms_creative_5&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=mytarget_beeline&utm_medium=olv&utm_term=hygiene&utm_content=moms_creative_1&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=mytarget_beeline&utm_medium=olv&utm_term=hygiene&utm_content=moms_creative_2&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=mytarget_beeline&utm_medium=olv&utm_term=hygiene&utm_content=moms_creative_3&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=mytarget_beeline&utm_medium=olv&utm_term=hygiene&utm_content=moms_creative_4&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=mytarget_beeline&utm_medium=olv&utm_term=hygiene&utm_content=moms_creative_5&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=ok_vk_beeline&utm_medium=social&utm_term=time_saving&utm_content=moms_creative_1&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=ok_vk_beeline&utm_medium=social&utm_term=time_saving&utm_content=moms_creative_2&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=ok_vk_beeline&utm_medium=social&utm_term=time_saving&utm_content=moms_creative_3&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=ok_vk_beeline&utm_medium=social&utm_term=time_saving&utm_content=moms_creative_4&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=ok_vk_beeline&utm_medium=social&utm_term=time_saving&utm_content=moms_creative_5&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=ok_vk_beeline&utm_medium=social&utm_term=hygiene&utm_content=moms_creative_1&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=ok_vk_beeline&utm_medium=social&utm_term=hygiene&utm_content=moms_creative_2&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=ok_vk_beeline&utm_medium=social&utm_term=hygiene&utm_content=moms_creative_3&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=ok_vk_beeline&utm_medium=social&utm_term=hygiene&utm_content=moms_creative_4&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=ok_vk_beeline&utm_medium=social&utm_term=hygiene&utm_content=moms_creative_5&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=mytarget&utm_medium=olv&utm_term=time_saving&utm_content=moms_creative_1&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=mytarget&utm_medium=olv&utm_term=time_saving&utm_content=moms_creative_2&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=mytarget&utm_medium=olv&utm_term=time_saving&utm_content=moms_creative_3&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=mytarget&utm_medium=olv&utm_term=time_saving&utm_content=moms_creative_4&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=mytarget&utm_medium=olv&utm_term=time_saving&utm_content=moms_creative_5&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=mytarget&utm_medium=olv&utm_term=hygiene&utm_content=moms_creative_1&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=mytarget&utm_medium=olv&utm_term=hygiene&utm_content=moms_creative_2&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=mytarget&utm_medium=olv&utm_term=hygiene&utm_content=moms_creative_3&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=mytarget&utm_medium=olv&utm_term=hygiene&utm_content=moms_creative_4&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=mytarget&utm_medium=olv&utm_term=hygiene&utm_content=moms_creative_5&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=ok_vk&utm_medium=social&utm_term=time_saving&utm_content=moms_creative_1&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=ok_vk&utm_medium=social&utm_term=time_saving&utm_content=moms_creative_2&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=ok_vk&utm_medium=social&utm_term=time_saving&utm_content=moms_creative_3&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=ok_vk&utm_medium=social&utm_term=time_saving&utm_content=moms_creative_4&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=ok_vk&utm_medium=social&utm_term=time_saving&utm_content=moms_creative_5&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=ok_vk&utm_medium=social&utm_term=hygiene&utm_content=moms_creative_1&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=ok_vk&utm_medium=social&utm_term=hygiene&utm_content=moms_creative_2&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=ok_vk&utm_medium=social&utm_term=hygiene&utm_content=moms_creative_3&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=ok_vk&utm_medium=social&utm_term=hygiene&utm_content=moms_creative_4&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=ok_vk&utm_medium=social&utm_term=hygiene&utm_content=moms_creative_5&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=instagram_promo_post&utm_medium=social&utm_term=time_saving&utm_content=moms_creative_1&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=instagram_promo_post&utm_medium=social&utm_term=time_saving&utm_content=moms_creative_2&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=instagram_promo_post&utm_medium=social&utm_term=time_saving&utm_content=moms_creative_3&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=instagram_promo_post&utm_medium=social&utm_term=time_saving&utm_content=moms_creative_4&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=instagram_promo_post&utm_medium=social&utm_term=time_saving&utm_content=moms_creative_5&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=instagram_promo_post&utm_medium=social&utm_term=hygiene&utm_content=moms_creative_1&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=instagram_promo_post&utm_medium=social&utm_term=hygiene&utm_content=moms_creative_2&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=instagram_promo_post&utm_medium=social&utm_term=hygiene&utm_content=moms_creative_3&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=instagram_promo_post&utm_medium=social&utm_term=hygiene&utm_content=moms_creative_4&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=instagram_promo_post&utm_medium=social&utm_term=hygiene&utm_content=moms_creative_5&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=instagram_stories&utm_medium=social&utm_term=time_saving&utm_content=moms_creative_1&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=instagram_stories&utm_medium=social&utm_term=time_saving&utm_content=moms_creative_2&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=instagram_stories&utm_medium=social&utm_term=time_saving&utm_content=moms_creative_3&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=instagram_stories&utm_medium=social&utm_term=time_saving&utm_content=moms_creative_4&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=instagram_stories&utm_medium=social&utm_term=time_saving&utm_content=moms_creative_5&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=instagram_stories&utm_medium=social&utm_term=hygiene&utm_content=moms_creative_1&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=instagram_stories&utm_medium=social&utm_term=hygiene&utm_content=moms_creative_2&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=instagram_stories&utm_medium=social&utm_term=hygiene&utm_content=moms_creative_3&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=instagram_stories&utm_medium=social&utm_term=hygiene&utm_content=moms_creative_4&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=instagram_stories&utm_medium=social&utm_term=hygiene&utm_content=moms_creative_5&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=fb&utm_medium=social&utm_term=time_saving&utm_content=moms_creative_1&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=fb&utm_medium=social&utm_term=time_saving&utm_content=moms_creative_2&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=fb&utm_medium=social&utm_term=time_saving&utm_content=moms_creative_3&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=fb&utm_medium=social&utm_term=time_saving&utm_content=moms_creative_4&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=fb&utm_medium=social&utm_term=time_saving&utm_content=moms_creative_5&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=fb&utm_medium=social&utm_term=hygiene&utm_content=moms_creative_1&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=fb&utm_medium=social&utm_term=hygiene&utm_content=moms_creative_2&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=fb&utm_medium=social&utm_term=hygiene&utm_content=moms_creative_3&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=fb&utm_medium=social&utm_term=hygiene&utm_content=moms_creative_4&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=fb&utm_medium=social&utm_term=hygiene&utm_content=moms_creative_5&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=wifi&utm_medium=olv&utm_term=time_saving&utm_content=moms_creative_1&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=wifi&utm_medium=olv&utm_term=time_saving&utm_content=moms_creative_2&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=wifi&utm_medium=olv&utm_term=time_saving&utm_content=moms_creative_3&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=wifi&utm_medium=olv&utm_term=time_saving&utm_content=moms_creative_4&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=wifi&utm_medium=olv&utm_term=time_saving&utm_content=moms_creative_5&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=wifi&utm_medium=olv&utm_term=hygiene&utm_content=moms_creative_1&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=wifi&utm_medium=olv&utm_term=hygiene&utm_content=moms_creative_2&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=wifi&utm_medium=olv&utm_term=hygiene&utm_content=moms_creative_3&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=wifi&utm_medium=olv&utm_term=hygiene&utm_content=moms_creative_4&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=wifi&utm_medium=olv&utm_term=hygiene&utm_content=moms_creative_5&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=imho&utm_medium=olv&utm_term=time_saving&utm_content=moms_creative_1&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=imho&utm_medium=olv&utm_term=time_saving&utm_content=moms_creative_2&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=imho&utm_medium=olv&utm_term=time_saving&utm_content=moms_creative_3&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=imho&utm_medium=olv&utm_term=time_saving&utm_content=moms_creative_4&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=imho&utm_medium=olv&utm_term=time_saving&utm_content=moms_creative_5&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=imho&utm_medium=olv&utm_term=hygiene&utm_content=moms_creative_1&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=imho&utm_medium=olv&utm_term=hygiene&utm_content=moms_creative_2&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=imho&utm_medium=olv&utm_term=hygiene&utm_content=moms_creative_3&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=imho&utm_medium=olv&utm_term=hygiene&utm_content=moms_creative_4&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=imho&utm_medium=olv&utm_term=hygiene&utm_content=moms_creative_5&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=youtube&utm_medium=olv&utm_term=time_saving&utm_content=moms_creative_1&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=youtube&utm_medium=olv&utm_term=time_saving&utm_content=moms_creative_2&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=youtube&utm_medium=olv&utm_term=time_saving&utm_content=moms_creative_3&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=youtube&utm_medium=olv&utm_term=time_saving&utm_content=moms_creative_4&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=youtube&utm_medium=olv&utm_term=time_saving&utm_content=moms_creative_5&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=youtube&utm_medium=olv&utm_term=hygiene&utm_content=moms_creative_1&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=youtube&utm_medium=olv&utm_term=hygiene&utm_content=moms_creative_2&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=youtube&utm_medium=olv&utm_term=hygiene&utm_content=moms_creative_3&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=youtube&utm_medium=olv&utm_term=hygiene&utm_content=moms_creative_4&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=youtube&utm_medium=olv&utm_term=hygiene&utm_content=moms_creative_5&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=mytarget_beeline&utm_medium=olv&utm_term=new_life&utm_content=new_settlers_creative_1&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=mytarget_beeline&utm_medium=olv&utm_term=new_life&utm_content=new_settlers_creative_2&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=mytarget_beeline&utm_medium=olv&utm_term=new_life&utm_content=new_settlers_creative_3&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=mytarget_beeline&utm_medium=olv&utm_term=new_life&utm_content=new_settlers_creative_4&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=mytarget_beeline&utm_medium=olv&utm_term=new_life&utm_content=new_settlers_creative_5&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=ok_vk_beeline&utm_medium=social&utm_term=new_life&utm_content=new_settlers_creative_1&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=ok_vk_beeline&utm_medium=social&utm_term=new_life&utm_content=new_settlers_creative_2&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=ok_vk_beeline&utm_medium=social&utm_term=new_life&utm_content=new_settlers_creative_3&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=ok_vk_beeline&utm_medium=social&utm_term=new_life&utm_content=new_settlers_creative_4&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=ok_vk_beeline&utm_medium=social&utm_term=new_life&utm_content=new_settlers_creative_5&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=mytarget&utm_medium=olv&utm_term=new_life&utm_content=new_settlers_creative_1&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=mytarget&utm_medium=olv&utm_term=new_life&utm_content=new_settlers_creative_2&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=mytarget&utm_medium=olv&utm_term=new_life&utm_content=new_settlers_creative_3&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=mytarget&utm_medium=olv&utm_term=new_life&utm_content=new_settlers_creative_4&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=mytarget&utm_medium=olv&utm_term=new_life&utm_content=new_settlers_creative_5&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=ok_vk&utm_medium=social&utm_term=new_life&utm_content=new_settlers_creative_1&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=ok_vk&utm_medium=social&utm_term=new_life&utm_content=new_settlers_creative_2&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=ok_vk&utm_medium=social&utm_term=new_life&utm_content=new_settlers_creative_3&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=ok_vk&utm_medium=social&utm_term=new_life&utm_content=new_settlers_creative_4&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=ok_vk&utm_medium=social&utm_term=new_life&utm_content=new_settlers_creative_5&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=instagram_promo_post&utm_medium=social&utm_term=new_life&utm_content=new_settlers_creative_1&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=instagram_promo_post&utm_medium=social&utm_term=new_life&utm_content=new_settlers_creative_2&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=instagram_promo_post&utm_medium=social&utm_term=new_life&utm_content=new_settlers_creative_3&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=instagram_promo_post&utm_medium=social&utm_term=new_life&utm_content=new_settlers_creative_4&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=instagram_promo_post&utm_medium=social&utm_term=new_life&utm_content=new_settlers_creative_5&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=instagram_stories&utm_medium=social&utm_term=new_life&utm_content=new_settlers_creative_1&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=instagram_stories&utm_medium=social&utm_term=new_life&utm_content=new_settlers_creative_2&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=instagram_stories&utm_medium=social&utm_term=new_life&utm_content=new_settlers_creative_3&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=instagram_stories&utm_medium=social&utm_term=new_life&utm_content=new_settlers_creative_4&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=instagram_stories&utm_medium=social&utm_term=new_life&utm_content=new_settlers_creative_5&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=fb&utm_medium=social&utm_term=new_life&utm_content=new_settlers_creative_1&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=fb&utm_medium=social&utm_term=new_life&utm_content=new_settlers_creative_2&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=fb&utm_medium=social&utm_term=new_life&utm_content=new_settlers_creative_3&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=fb&utm_medium=social&utm_term=new_life&utm_content=new_settlers_creative_4&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=fb&utm_medium=social&utm_term=new_life&utm_content=new_settlers_creative_5&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=youtube&utm_medium=olv&utm_term=new_life&utm_content=new_settlers_creative_1&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=youtube&utm_medium=olv&utm_term=new_life&utm_content=new_settlers_creative_2&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=youtube&utm_medium=olv&utm_term=new_life&utm_content=new_settlers_creative_3&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=youtube&utm_medium=olv&utm_term=new_life&utm_content=new_settlers_creative_4&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=youtube&utm_medium=olv&utm_term=new_life&utm_content=new_settlers_creative_5&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=yandex&utm_medium=olv&utm_term=new_life&utm_content=new_settlers_creative_1&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=yandex&utm_medium=olv&utm_term=new_life&utm_content=new_settlers_creative_2&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=yandex&utm_medium=olv&utm_term=new_life&utm_content=new_settlers_creative_3&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=yandex&utm_medium=olv&utm_term=new_life&utm_content=new_settlers_creative_4&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=yandex&utm_medium=olv&utm_term=new_life&utm_content=new_settlers_creative_5&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=mytarget_beeline&utm_medium=olv&utm_term=table_dishwasher&utm_content=renters_creative_1&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=mytarget_beeline&utm_medium=olv&utm_term=table_dishwasher&utm_content=renters_creative_2&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=mytarget_beeline&utm_medium=olv&utm_term=table_dishwasher&utm_content=renters_creative_3&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=mytarget_beeline&utm_medium=olv&utm_term=table_dishwasher&utm_content=renters_creative_4&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=mytarget_beeline&utm_medium=olv&utm_term=table_dishwasher&utm_content=renters_creative_5&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=ok_vk_beeline&utm_medium=social&utm_term=table_dishwasher&utm_content=renters_creative_1&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=ok_vk_beeline&utm_medium=social&utm_term=table_dishwasher&utm_content=renters_creative_2&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=ok_vk_beeline&utm_medium=social&utm_term=table_dishwasher&utm_content=renters_creative_3&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=ok_vk_beeline&utm_medium=social&utm_term=table_dishwasher&utm_content=renters_creative_4&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=ok_vk_beeline&utm_medium=social&utm_term=table_dishwasher&utm_content=renters_creative_5&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=mytarget&utm_medium=olv&utm_term=table_dishwasher&utm_content=renters_creative_1&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=mytarget&utm_medium=olv&utm_term=table_dishwasher&utm_content=renters_creative_2&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=mytarget&utm_medium=olv&utm_term=table_dishwasher&utm_content=renters_creative_3&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=mytarget&utm_medium=olv&utm_term=table_dishwasher&utm_content=renters_creative_4&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=mytarget&utm_medium=olv&utm_term=table_dishwasher&utm_content=renters_creative_5&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=ok_vk&utm_medium=social&utm_term=table_dishwasher&utm_content=renters_creative_1&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=ok_vk&utm_medium=social&utm_term=table_dishwasher&utm_content=renters_creative_2&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=ok_vk&utm_medium=social&utm_term=table_dishwasher&utm_content=renters_creative_3&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=ok_vk&utm_medium=social&utm_term=table_dishwasher&utm_content=renters_creative_4&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=ok_vk&utm_medium=social&utm_term=table_dishwasher&utm_content=renters_creative_5&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=instagram_promo_post&utm_medium=social&utm_term=table_dishwasher&utm_content=renters_creative_1&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=instagram_promo_post&utm_medium=social&utm_term=table_dishwasher&utm_content=renters_creative_2&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=instagram_promo_post&utm_medium=social&utm_term=table_dishwasher&utm_content=renters_creative_3&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=instagram_promo_post&utm_medium=social&utm_term=table_dishwasher&utm_content=renters_creative_4&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=instagram_promo_post&utm_medium=social&utm_term=table_dishwasher&utm_content=renters_creative_5&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=instagram_stories&utm_medium=social&utm_term=table_dishwasher&utm_content=renters_creative_1&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=instagram_stories&utm_medium=social&utm_term=table_dishwasher&utm_content=renters_creative_2&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=instagram_stories&utm_medium=social&utm_term=table_dishwasher&utm_content=renters_creative_3&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=instagram_stories&utm_medium=social&utm_term=table_dishwasher&utm_content=renters_creative_4&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=instagram_stories&utm_medium=social&utm_term=table_dishwasher&utm_content=renters_creative_5&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=fb&utm_medium=social&utm_term=table_dishwasher&utm_content=renters_creative_1&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=fb&utm_medium=social&utm_term=table_dishwasher&utm_content=renters_creative_2&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=fb&utm_medium=social&utm_term=table_dishwasher&utm_content=renters_creative_3&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=fb&utm_medium=social&utm_term=table_dishwasher&utm_content=renters_creative_4&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=fb&utm_medium=social&utm_term=table_dishwasher&utm_content=renters_creative_5&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=youtube&utm_medium=olv&utm_term=table_dishwasher&utm_content=renters_creative_1&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=youtube&utm_medium=olv&utm_term=table_dishwasher&utm_content=renters_creative_2&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=youtube&utm_medium=olv&utm_term=table_dishwasher&utm_content=renters_creative_3&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=youtube&utm_medium=olv&utm_term=table_dishwasher&utm_content=renters_creative_4&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=youtube&utm_medium=olv&utm_term=table_dishwasher&utm_content=renters_creative_5&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=yandex&utm_medium=olv&utm_term=table_dishwasher&utm_content=renters_creative_1&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=yandex&utm_medium=olv&utm_term=table_dishwasher&utm_content=renters_creative_2&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=yandex&utm_medium=olv&utm_term=table_dishwasher&utm_content=renters_creative_3&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=yandex&utm_medium=olv&utm_term=table_dishwasher&utm_content=renters_creative_4&utm_campaign=rb_finish_pip_oct_dec2019",
            "?utm_source=yandex&utm_medium=olv&utm_term=table_dishwasher&utm_content=renters_creative_5&utm_campaign=rb_finish_pip_oct_dec2019"
        ],
    }),

    mounted() {
        this.utmFilter();
        this.updateDimensions();
        window.addEventListener('resize', this.updateDimensions);

        this.$refs.pageIndex.addEventListener('wheel', event => {
            if (!this.agreement) {
                if (this.scrollReady) {
                    this.scrollReady = false;

                    if (event.deltaY > 0) {
                        this.nextSlide();
                    } else {
                        this.prevSlide();
                    }

                    setTimeout(() => {
                        this.scrollReady = true;
                    }, 1000);
                }
            }
        });

        // swipe detected
        this.$refs.pageIndex.addEventListener('touchstart', event => {
            this.startY = (event.touches || event.originalEvent.touches)[0].clientY;
        });

        this.$refs.pageIndex.addEventListener('touchmove', event => {
            if (!this.startY) return;

            const yDelta = this.startY - (event.touches || event.originalEvent.touches)[0].clientY;

            if (yDelta > 45) {
                this.nextSlide();
                this.startY = null;
            } else if (yDelta < -45) {
                this.prevSlide();
                this.startY = null;
            }
        });
    },

    beforeDestroy() {
        window.removeEventListener('resize', this.updateDimensions);
    },

    methods: {
        prevSlide() {
            if (this.slideIndex > 0) {
                this.showAnimation = false;
                this.slideIndex -= 1;

                this.finishAnimation();
            }
        },

        nextSlide() {
            if (this.slideIndex < this.$t('slides').length - 1) {
                this.showAnimation = false;
                this.slideIndex += 1;

                this.finishAnimation();
            }
        },

        finishAnimation() {
            this.$nextTick(() => {
                setTimeout(() => {
                    this.showAnimation = true;
                }, 33);
            });
        },

        utmFilter() {
            const slideNames = [
                'table_dishwasher',
                'time_saving',
                'hygiene',
                'new_life',
                'water_saving',
                // здесь слайд по умолчанию №6
            ];

            const query = window.location.search;

            if (query.includes('utm_term')) {
                slideNames.forEach((item, i) => {
                    if (query.includes(item)) {
                        // только при первой загрузке страницы меняем слайды местами
                        // условие чтобы при переключении языков, слайды снова не менялись местами
                        // если слайды уже распологаются в нужном виде, то ничего не делать
                        if (this.$t('slides')[0].index !== i) {
                            // меняем местами слайды, тот который запрашивает пользователь должен идти первым,
                            // на его место ставится первый слайд, например 5,2,3,4,1,6 (поменяли 5 и 1 слайды)
                            let savedData = this.$t('slides')[0];
                            let removedData = this.$t('slides').splice(i, 1, savedData);
                            this.$t('slides').splice(0, 1, ...removedData);
                        }

                        this.fakeIndex = i; // fakeIndex нужно всегда менять чтобы стили правильно отрабатывали
                    }
                });
            } else {
                this.slideIndex = 5;
            }

            // отключаем прелоадер
            this.$nextTick(() => {
                this.loaded = true;
            });
        },

        updateDimensions() {
            this.windowHeight = window.innerHeight;
        },

        loadContent() {
            this.loaded = true;
        },
    },
};
</script>

<style lang="scss">
    .cookie-agreement {
        position: fixed;
        z-index: 9999;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1vw 4.323vw;
        background-color: rgba(0, 0, 0, 0.8);

        &__container {
            display: flex;
            flex-direction: column;
            width: 56vw;
            padding: 3vw;
            border-radius: 3vw;
            background-color: #fff;

            @media screen and (max-width: 750px) {
                width: auto;
                padding: 7vw 9vw;
            }
        }

        &__text {
            font-family: $Gilroy;
            font-size: 1.7vw;
            font-weight: 500;
            text-align: center;
            color: #303030;

            a {
                color: #303030;
            }

            @media screen and (max-width: 750px) {
                font-size: 3.7vw;
            }
        }

        &__buttons {
            display: flex;
            justify-content: center;
            margin-top: 2vw;

            @media screen and (max-width: 750px) {
                flex-direction: column;
                margin-top: 6vw;
            }
        }

        &__okey,
        &__nope {
            display: block;
            box-sizing: content-box;
            height: 2.731vw;
            padding: 1.056vw 2.425vw 0.122vw;
            font-family: $Akzidenz;
            font-size: 1.368vw;
            font-weight: 300;
            text-decoration: none;
            text-align: center;
            color: #fff;
            border-radius: 2.799vw;
            //background-color: transparent;
            background: linear-gradient(45deg, #d21459 0%, #fb3c42 100%);
            cursor: pointer;

            @media screen and (max-width: 750px) {
                height: 6vw;
                padding: 3vw 5vw;
                font-size: 4.368vw;
                border-radius: 6.799vw;
            }
        }

        &__nope {
            color: #fb3c42;
            border: 0.15vw solid #fb3c42;
            background: none;
            margin-left: 3vw;

            @media screen and (max-width: 750px) {
                margin-top: 3vw;
                margin-left: 0;
            }

            &.active {
                color: #fff;
                border-color: transparent;
                background: linear-gradient(45deg, #d21459 0%, #fb3c42 100%);
            }
        }
    }
</style>
