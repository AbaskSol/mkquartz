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
        .controller('ProvincetownCtrl', function() {

            this.tearsheet = {
                url: ''
            };

            this.shapes = [
                {
                    name: 'Field Tile',
                    size: '4"x16"',
                    imageUrl: '../../../images/mkquartz/Provincetown_4x16_Field_Tile_Porch_White.jpg',
                    url: ''
                },
                {
                    name: 'Field Tile',
                    size: '3"x6"',
                    imageUrl: '../../../images/mkquartz/Provincetown_Porch_White_3x6_Field_Tile.jpg',
                    url: ''
                },
                {
                    name: 'Field Tile',
                    size: '2.5"x9"',
                    imageUrl: '../../../images/mkquartz/Provincetown_Porch_White_2.5x9_Field_Tile.jpg',
                    url: ''
                },
                {
                    name: 'Chevron Field Tile',
                    size: '2.5"x9"',
                    imageUrl: '../../../images/mkquartz/Provincetown_Porch_White_2.5x9_Chevron_Field_Tile.jpg',
                    url: ''
                },
                {
                    name: 'Brewer Deco',
                    size: '6"x6"',
                    imageUrl: '../../../images/mkquartz/Provincetown_6x6_Brewer_Deco_Porch_White.jpg',
                    url: ''
                },
                {
                    name: 'Hexagon Mosaic',
                    size: '12.75"x13.5"',
                    imageUrl: '../../../images/mkquartz/Provincetown_1-1_2_Hexagon_Mosaic_On_12.75x13.25_Sheet_Porch_White.jpg',
                    url: ''
                },
                {
                    name: 'Bevelled Arabesque Mosaic',
                    size: '9.25"x15.5" Sheet',
                    imageUrl: '../../../images/mkquartz/Provincetown_Porch_White_11.5x18_Beveled_Arabesque_Mosaic.jpg',
                    url: ''
                },
                {
                    name: 'Bevelled Lantern Mosaic',
                    size: '12"x12.24" Sheet',
                    imageUrl: '../../../images/mkquartz/Provincetown_Bevelled_Lantern_Mosaic_On_A_13x13_Sheet_Porch_White.jpg',
                    url: ''
                },
                {
                    name: 'Foliole Mosaic',
                    size: '11.5"x12" Sheet',
                    imageUrl: '../../../images/mkquartz/Provincetown_Porch_White_11.5x12_Foliole_Mosaic.jpg',
                    url: ''
                },
            ];

            this.blends = [
                {
                    name: 'Atlantic',
                    imageUrl: '../../../images/mkquartz/Provincetown_Atlantic_Blend_11.5x12_Foliole_Mosaic.jpg',
                    url: 'floor-tile'
                },
                {
                    name: 'Beech Forest',
                    imageUrl: '../../../images/mkquartz/Provincetown_Beech_Forest_Blend_11.5x12_Foliole_Mosaic.jpg',
                    url: 'floor-tile'
                },
                {
                    name: 'Race Point',
                    imageUrl: '../../../images/mkquartz/Provincetown_Race_Point_Blend_11.5x12_Foliole_Mosaic.jpg',
                    url: 'floor-tile'
                },
            ];

            this.colors = [
                {
                    name: 'Porch White',
                    hexCode: '#FDFDFD'
                },
                {
                    name: 'Dune Beige',
                    hexCode: '#ADA693'
                },
                {
                    name: 'Highland Brown',
                    hexCode: '#9D8C6E'
                },
                {
                    name: 'Brewester Brown',
                    hexCode: '#785C4A'
                },
                {
                    name: 'Dolphin Grey',
                    hexCode: '#CAC5C1'
                },
                {
                    name: 'Moument Grey',
                    hexCode: '#999B8D'
                },
                {
                    name: 'Surfside Blue',
                    hexCode: '#A1B1B1'
                },
                {
                    name: 'Harbor Blue',
                    hexCode: '#5A6D79'
                },
                {
                    name: 'Cape Cod Blue',
                    hexCode: '#234C5C'
                },
                {
                    name: 'Fleet Black',
                    hexCode: '#0E070E'
                }
            ];

        });
}());