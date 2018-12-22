
(function () {
    'use strict';

    angular
        .module('app')
        .directive('msCarousel', msCarousel)
        .controller('MsCarouselCtrl', MsCarouselCtrl)
        .directive('paseo', function () {
            return {
                templateUrl: 'app/components/microsites/paseo/paseo.html'
            }
        })
        .controller('PaseoCtrl', function () {
            this.email = 'onlineorders@mkquartz.com';

            this.name = 'The Paseo Collection';

            this.tearsheet = {
                url: ''
            }

            this.colors = [
                {
                    name: 'Pure White',
                    abbrev: 'PUW',
                    group: 'Signature',
                    imageUrl: 'Pure_White.jpg',
                },
                {
                    name: 'Great White',
                    abbrev: 'GRW',
                    group: 'Premium',
                    imageUrl: 'Great_White.jpg'
                },
                {
                    name: 'Sierra White',
                    abbrev: 'SIW',
                    group: 'Premium',
                    imageUrl: 'Sierra_White.jpg'
                },
                {
                    name: 'White Bread',
                    abbrev: 'WHB',
                    group: 'Signature',
                    imageUrl: 'White_Bread.jpg'
                },
                {
                    name: 'Custard',
                    abbrev: 'CUS',
                    group: 'Signature',
                    imageUrl: 'Custard.jpg'
                },
                {
                    name: 'Beach Sand',
                    abbrev: 'BES',
                    group: 'Signature',
                    imageUrl: 'Beach_Sand.jpg'
                },
                {
                    name: 'Monrovia Red',
                    abbrev: 'MOR',
                    group: 'Classic',
                    imageUrl: 'Monrovia_Red.jpg'
                },
                {
                    name: 'Hazard Orange',
                    abbrev: 'HAO',
                    group: 'Premium',
                    imageUrl: 'HazardCounty_Orange.jpg'
                },
                {
                    name: 'Cadmium Orange',
                    abbrev: 'CAO',
                    group: 'Signature',
                    imageUrl: 'Cad_Orange.jpg'
                },
                {
                    name: 'Cadmium Red',
                    abbrev: 'CAR',
                    group: 'Signature',
                    imageUrl: 'Cad_Red.jpg'
                },
                {
                    name: 'Turquoise',
                    abbrev: 'TUR',
                    group: 'Premium',
                    imageUrl: 'Turquoise.jpg'
                },
                {
                    name: 'Aqua',
                    abbrev: 'AQU',
                    group: 'Signature',
                    imageUrl: 'Aqua.jpg'
                },
                {
                    name: 'Copper',
                    abbrev: 'COP',
                    group: 'Premium',
                    imageUrl: 'Copper.jpg'
                },
                {
                    name: 'Real Teal',
                    abbrev: 'RET',
                    group: 'Signature',
                    imageUrl: 'Real_Teal.jpg'
                },
                {
                    name: 'Cobalt Matte',
                    abbrev: 'COM',
                    group: 'Premium',
                    imageUrl: 'Cobalt_Matte.jpg'
                },
                {
                    name: 'Lake Tahoe',
                    abbrev: 'LAT',
                    group: 'Signature',
                    imageUrl: 'Lake_Tahoe.jpg'
                },
                {
                    name: 'Blue Haze',
                    abbrev: 'BLH',
                    group: 'Signature',
                    imageUrl: 'Blue_Haze.jpg'
                },
                {
                    name: 'Ash',
                    abbrev: 'ASH',
                    group: 'Premium',
                    imageUrl: 'Ashe.jpg'
                },
                {
                    name: 'May Gray',
                    abbrev: 'MAG',
                    group: 'Premium',
                    imageUrl: 'May_Grey.jpg'
                },
                {
                    name: 'Leather',
                    abbrev: 'LEA',
                    group: 'Premium',
                    imageUrl: 'Leather.jpg'
                },
                {
                    name: 'Espresso',
                    abbrev: 'ESP',
                    group: 'Signature',
                    imageUrl: 'Espresso.jpg'
                },
                {
                    name: 'Cordovan',
                    abbrev: 'COR',
                    group: 'Signature',
                    imageUrl: 'Cordova.jpg'
                },
                {
                    name: 'Midnight Blue',
                    abbrev: 'MIB',
                    group: 'Signature',
                    imageUrl: 'Midnight_Blue.jpg'
                },
                {
                    name: 'Black Diamond',
                    abbrev: 'BLD',
                    group: 'Premium',
                    imageUrl: 'Black_Diamond.jpg'
                },
                {
                    name: 'Licorice',
                    abbrev: 'LIC',
                    group: 'Signature',
                    imageUrl: 'Licorice.jpg'
                }
            ];

            this.shapes = [
                {
                    name: 'Arabesque 2(a)',
                    imageUrl: '../../../images/mkquartz/Arabesque_2_a.png',
                    sizes: [
                        '5"x9"'
                    ]
                },
                {
                    name: 'Conche',
                    imageUrl: '../../../images/mkquartz/Arabesque_2_a.png',
                    sizes: [
                        '8"x8"',
                        '4"x4"'
                    ]
                },
                {
                    name: 'Diamond',
                    imageUrl: '../../../images/mkquartz/Arabesque_2_a.png',
                    sizes: [
                        '4"x8"'
                    ]
                },
                {
                    name: 'Durango',
                    imageUrl: '../../../images/mkquartz/Arabesque_2_a.png',
                    sizes: [
                        '5.75"x8"',
                        '3"x4"'
                    ]
                },
                {
                    name: 'Eye of Felipe',
                    imageUrl: '../../../images/mkquartz/Arabesque_2_a.png',
                    sizes: [
                        '9"x11.5"'
                    ]
                },
                {
                    name: 'Hexagon',
                    imageUrl: '../../../images/mkquartz/Arabesque_2_a.png',
                    sizes: [
                        '12"',
                        '8"',
                        '6"',
                        '4"'
                    ]
                },
                {
                    name: 'Rectangle',
                    imageUrl: '../../../images/mkquartz/Arabesque_2_a.png',
                    sizes: [
                        '8"x16"',
                        '6"12"',
                        '4"x8"',
                        '3"x6"',
                        '2"x8"',
                        '2"x4"',
                        '1"x9"'
                    ]
                },
                {
                    name: 'San Felipe',
                    imageUrl: '../../../images/mkquartz/Arabesque_2_a.png',
                    sizes: [
                        '12"x13"',
                        '2.5"x4.5"'
                    ]
                },
                {
                    name: 'Square',
                    imageUrl: '../../../images/mkquartz/Arabesque_2_a.png',
                    sizes: [
                        '16"x16"',
                        '12"x12"',
                        '8"x8"',
                        '6"x6"',
                        '5"x5"',
                        '4"x4"',
                        '3"x3"'
                    ]
                }
            ];

            this.shapeSets = [
                {
                    name: 'Arabesque 5(b)',
                    imageUrl: '../../../images/mkquartz/Arabesque_Pattern_5B.jpg',
                    sizes: [
                        '12"x13"',
                        'San Felipe 8"x10"'
                    ]
                },
                {
                    name: 'Arabesque 8(c)',
                    imageUrl: '../../../images/mkquartz/Arabesque_Pattern_8C.jpg',
                    sizes: [
                        '5" Quatrefoil',
                        '6" Fat Cross'
                    ]
                },
                {
                    name: 'Arabesque 12',
                    imageUrl: '../../../images/mkquartz/Arabesque_Pattern_12.jpg',
                    sizes: [
                        '5"x8" Skinny',
                        '5"x8" Fat'
                    ]
                },
                {
                    name: 'Octagon Set',
                    imageUrl: '../../../images/mkquartz/Octagon_Set.jpg',
                }
            ];

            this.patternArrangements = [
                {
                    name: 'Diamond & Hexagon',
                    imageUrl: '../../../images/mkquartz/Diamond_Hexagon.jpg'
                },
                {
                    name: 'Conche & Mini Conche',
                    imageUrl: '../../../images/mkquartz/Conche_Mini_Conche.jpg'
                },
                {
                    name: 'Durango & Durango Mini',
                    imageUrl: '../../../images/mkquartz/durango.jpg'
                },
                {
                    name: 'San Felipe & San Felipe Mini',
                    imageUrl: '../../../images/mkquartz/San_Felipe.jpg'
                },
            ];

        });

    function MsCarouselCtrl() {
        this.prevSlide = function () {
            if (this.index <= 0) {
                this.index = this.slides.length - 1;
            } else {
                this.index--;
            }
        };

        this.nextSlide = function () {
            if (this.index >= (this.slides.length - 1)) {
                this.index = 0;
            } else {
                this.index++;
            }
        };
    }

    function msCarousel() {
        var template = [
            '<div class="ms-double-carousel__title">' +
                '<h3 class="be-subhead">{{eddy.headline}}</h3>' +
                '<p class="be-title">{{eddy.title}}</p>' +
            '</div>' +
            '<div class="ms-double-carousel__track">' +
                '<div class="ms-double-carousel__slide" ng-repeat="slide in eddy.slides" ng-show="eddy.index == $index">' +
                    '<img ng-src="{{slide.imageUrl}}" />' +
                    '<div>' +
                        '<h4 class="be-headline">{{slide.name}}</h4>' +
                        '<div ng-show="slide.sizes.length > 0" class="be-subhead">Includes</div>' +
                        '<div class="be-body-2" ng-repeat="size in slide.sizes">{{size}}</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
            '<div class="ms-double-carousel__controls">' +
                '<div class="ms-double-carousel__arrows">' +
                    '<button class="ms-double-carousel__arrow ms-double-carousel__arrow--left" ng-click="eddy.prevSlide();">Prev</button>' +
                    '<button class="ms-double-carousel__arrow ms-double-carousel__arrow--right" ng-click="eddy.nextSlide();">Next</button>' +
                '</div>' +
                '<div class="ms-double-carousel__index"><span class="active">{{eddy.index +1 }}</span> / {{eddy.slides.length}}</div>' +
            '</div>'
        ].join();
        return {
            restrict: 'A',
            scope: {},
            bindToController: {
                index: '=',
                slides: '=',
                title: '@',
                headline: '@'
            },
            controller: 'MsCarouselCtrl as eddy',
            template: template
        };
    }
}());

