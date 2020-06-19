<template>
    <div :style="{ height: windowHeight + 'px'}">
        <slide v-show="i === slideIndex" v-for="(content, i) in $t('slides')" :key="i" :slideIndex="i" :content="content" />
        <!-- nextSlide={this.nextSlide}
            prevSlide={this.prevSlide}
            content={this.props.data}
            slideIndex={this.state.slideIndex}
            fakeIndex={this.props.fakeIndex}
            currentAnimationDeltaY={this.state.currentAnimationDeltaY} -->
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
                slides: [
                    {
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
                welcome: 'Bienvenue'
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
    },

    beforeDestroy() {
        window.removeEventListener('resize', this.updateDimensions);
    },

    methods: {
        utmFilter() {
            const slideNames = [
                'table_dishwasher',
                'time_saving',
                'hygiene',
                'new_life',
                'water_saving'
            ];

            const query = window.location.search;

            if (query.includes('utm_term')) {
                slideNames.forEach((item, i) => {
                    if (query.includes(item)) {
                        // меняем местами слайды, тот который запрашивает пользователь должен идти первым
                        let savedData = this.$t('slides')[0];
                        let removedData = this.$t('slides').splice(i, 1, savedData);
                        this.$t('slides').splice(0, 1, ...removedData);

                        this.fakeIndex = i;
                    }
                });
            } else {
                this.slideIndex = 5;
            }
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

</style>
