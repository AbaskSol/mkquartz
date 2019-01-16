(function () {

    'use strict';

    var app = angular.module('app');

    function beVideo($timeout) {
        return {
            restrict: 'AE',
            link: function($scope, $element, $attrs) {
                var element = $element[0];
                var video = element.querySelector('video');
                $scope.isPlaying = false;
                $element.on('click', function() {
                    $timeout(function() {
                        if ( video.paused === false ) {
                            video.pause();
                            $scope.isPlaying = false;
                        } else if ( video.paused === true ) {
                            video.play();
                            $scope.isPlaying = true;
                        }
                    });
                });
            }
        };
    }

    app.directive('beVideo', beVideo);

    app
        .controller('CostaAllegraCtrl', function() {

            this.shapes = [
                {
                    name: 'Field Tile',
                    size: '3"x12"',
                    url: '',
                    imageUrl: 'http://s3-us-east-2.amazonaws.com/mkqimages/images/QUARTZ/MK-106.jpg'
                },
                {
                    name: 'Field Tile',
                    size: '3"x6"',
                    url: '',
                    imageUrl: 'http://s3-us-east-2.amazonaws.com/mkqimages/images/QUARTZ/MK-106.jpg'
                },
                {
                    name: 'Hexagon Field Tile',
                    size: '8"x8"',
                    url: '',
                    imageUrl: 'http://s3-us-east-2.amazonaws.com/mkqimages/images/QUARTZ/MK-106.jpg'
                },
                {
                    name: 'Rhombus Field Tile',
                    size: '4.5"x8"',
                    url: '',
                    imageUrl: 'http://s3-us-east-2.amazonaws.com/mkqimages/images/QUARTZ/MK-106.jpg'
                },
                {
                    name: 'Bahia Deco',
                    size: '2.5"x9"',
                    url: '',
                    imageUrl: 'http://s3-us-east-2.amazonaws.com/mkqimages/images/QUARTZ/MK-106.jpg'
                },
                {
                    name: 'Pacifico Deco',
                    size: '3"x12"',
                    url: '',
                    imageUrl: 'http://s3-us-east-2.amazonaws.com/mkqimages/images/QUARTZ/MK-106.jpg'
                },
                {
                    name: 'Pacifico Deco',
                    size: '3"x6"',
                    url: '',
                    imageUrl: 'http://s3-us-east-2.amazonaws.com/mkqimages/images/QUARTZ/MK-106.jpg'
                },
                {
                    name: 'Pacifico Deco',
                    size: '6"x6"',
                    url: '',
                    imageUrl: 'http://s3-us-east-2.amazonaws.com/mkqimages/images/QUARTZ/MK-106.jpg'
                },
                {
                    name: 'Long Hex Pacifico Deco',
                    size: '4"x9"',
                    url: '',
                    imageUrl: 'http://s3-us-east-2.amazonaws.com/mkqimages/images/QUARTZ/MK-106.jpg'
                },
                {
                    name: 'Mosaic',
                    size: '12"x12" Sheet',
                    url: '',
                    imageUrl: 'http://s3-us-east-2.amazonaws.com/mkqimages/images/QUARTZ/MK-106.jpg'
                },
                {
                    name: 'Arabesco Mosaic',
                    size: '12"x12" Sheet',
                    url: '',
                    imageUrl: 'http://s3-us-east-2.amazonaws.com/mkqimages/images/QUARTZ/MK-106.jpg'
                },
                {
                    name: 'Wave Mosaic',
                    size: '12"x12" Sheet',
                    url: '',
                    imageUrl: 'http://s3-us-east-2.amazonaws.com/mkqimages/images/QUARTZ/MK-106.jpg'
                },
            ];

            this.colors = [
                {
                    name: 'White Sand',
                    hexCode: '#F7F8F4'
                },
                {
                    name: 'Alabaster',
                    hexCode: '#F3E7CF'
                },
                {
                    name: 'Driftwood',
                    hexCode: '#AC9675'
                },
                {
                    name: 'Timber',
                    hexCode: '#6C5952'
                },
                {
                    name: 'Cinder',
                    hexCode: '#BEBEB6'
                },
                {
                    name: 'Silver Strand',
                    hexCode: '#C1C0AB'
                },
                {
                    name: 'Gulf',
                    hexCode: '#93A096'
                },
                {
                    name: 'Tide',
                    hexCode: '#83979D'
                },
                {
                    name: 'Adriatic',
                    hexCode: '#667984'
                },
                {
                    name: 'Riverway',
                    hexCode: '#38383D'
                }
            ];

            this.tearsheet = {
                url: '../../../images/MK-QUARTZ-LLC.pdf'
            };

            this.gallery = [
                {
                    imageUrl: 'http://s3-us-east-2.amazonaws.com/mkqimages/images/mkquartz/costa-allegra-0412-5892.jpg'
                },
                {
                    imageUrl: 'http://s3-us-east-2.amazonaws.com/mkqimages/images/mkquartz/costa-allegra-0412-5168.jpg'
                },
                {
                    imageUrl: 'http://s3-us-east-2.amazonaws.com/mkqimages/images/mkquartz/costa-allegra-0412-5797.jpg'
                }
            ]

        });
}());