(function ($) {
    'use strict';
    $(function () {
        // flot chart script
        $(function () {
            'use strict'

            var dashData3 = [
                [0, 55],
                [1, 59],
                [2, 57],
                [3, 50],
                [4, 48],
                [5, 45],
                [6, 43],
                [7, 39],
                [8, 35],
                [9, 37],
                [10, 38],
                [11, 36],
                [12, 38],
                [13, 35],
                [14, 37],
                [15, 35],
                [16, 39],
                [17, 37],
                [18, 38],
                [19, 35],
                [20, 32],
                [21, 36],
                [22, 40],
                [23, 34],
                [24, 39],
                [25, 33],
                [26, 30],
                [27, 29],
                [28, 35],
                [29, 29],
                [30, 27],
                [31, 25],
                [32, 28],
                [33, 24],
                [34, 25],
                [35, 23],
                [36, 27],
                [37, 26],
                [38, 23],
                [39, 27],
                [40, 28],
                [41, 25],
                [42, 29],
                [43, 31],
                [44, 33],
                [45, 39],
                [46, 34],
                [47, 34],
                [48, 34],
                [49, 38],
                [50, 36],
                [51, 38],
                [52, 33],
                [53, 35],
                [54, 37],
                [55, 33],
                [56, 29],
                [57, 36],
                [58, 37],
                [59, 40],
                [60, 38],
                [61, 35],
                [62, 40],
                [63, 41],
                [64, 43],
                [65, 47],
                [66, 51],
                [67, 53],
                [68, 56],
                [69, 49],
                [70, 46],
                [71, 40],
                [72, 41],
                [73, 44],
                [74, 40],
                [75, 43],
                [76, 40],
                [77, 45],
                [78, 40],
                [79, 42],
                [80, 40],
                [81, 38],
                [82, 36],
                [83, 37],
                [84, 39],
                [85, 43],
                [86, 45],
                [87, 45],
                [88, 47],
                [89, 45],
                [90, 46]
            ];

            var dashData4 = [
                [0, 75],
                [1, 70],
                [2, 65],
                [3, 60],
                [4, 57],
                [5, 53],
                [6, 49],
                [7, 45],
                [8, 54],
                [9, 52],
                [10, 50],
                [11, 45],
                [12, 41],
                [13, 37],
                [14, 54],
                [15, 49],
                [16, 52],
                [17, 52],
                [18, 52],
                [19, 50],
                [20, 49],
                [21, 45],
                [22, 45],
                [23, 45],
                [24, 58],
                [25, 57],
                [26, 56],
                [27, 54],
                [28, 54],
                [29, 54],
                [30, 50],
                [31, 49],
                [32, 48],
                [33, 47],
                [34, 46],
                [35, 48],
                [36, 49],
                [37, 50],
                [38, 51],
                [39, 53],
                [40, 55],
                [41, 59],
                [42, 65],
                [43, 71],
                [44, 76],
                [45, 74],
                [46, 74],
                [47, 74],
                [48, 74],
                [49, 67],
                [50, 60],
                [51, 58],
                [52, 57],
                [53, 56],
                [54, 59],
                [55, 64],
                [56, 67],
                [57, 65],
                [58, 67],
                [59, 70],
                [60, 68],
                [61, 66],
                [62, 64],
                [63, 59],
                [64, 57],
                [65, 59],
                [66, 56],
                [67, 53],
                [68, 45],
                [69, 50],
                [70, 55],
                [71, 57],
                [72, 62],
                [73, 65],
                [74, 63],
                [75, 64],
                [76, 68],
                [77, 65],
                [78, 60],
                [79, 62],
                [80, 59],
                [81, 57],
                [82, 55],
                [83, 54],
                [84, 50],
                [85, 55],
                [86, 53],
                [87, 50],
                [88, 48],
                [89, 49],
                [90, 50]
            ];

            function bgFlotData(num, val) {
                var data = [];
                for (var i = 0; i < num; ++i) {
                    data.push([i, val]);
                }
                return data;
            }

            function bgFlotData(num, val) {
                var data = [];
                for (var i = 0; i < num; ++i) {
                    data.push([i, val]);
                }
                return data;
            }

            var plot = $.plot('#flotChart', [{
                data: dashData4,
                color: '#5e6eed',
                lines: {
                    fillColor: 'rgba(94, 110, 237, 0.03)'
                }
            }, {
                data: dashData3,
                color: '#00cff4',
                lines: {
                    fillColor: 'rgba(230, 246, 249, 0.15)'
                }
            }], {
                    series: {
                        shadowSize: 0,
                        lines: {
                            show: true,
                            lineWidth: 2,
                            fill: true
                        }
                    },
                    grid: {
                        borderWidth: 0,
                        labelMargin: 8
                    },
                    yaxis: {
                        show: true,
                        min: 0,
                        max: 100,
                        ticks: true,
                    },
                    xaxis: {
                        show: true,
                        color: '#fff',
                        tickColor: '#eee',
                        ticks: [[0, '4'], [10, '8'], [20, '12'], [30, '16'], [40, '20'], [50, '24'], [60, '28'], [70, '32'], [80, '36'], [90, '40']],
                    }
                });

        });
        // flot dark
        $(function () {
            'use strict'

            var dashDatadark3 = [
                [0, 55],
                [1, 59],
                [2, 57],
                [3, 50],
                [4, 48],
                [5, 45],
                [6, 43],
                [7, 39],
                [8, 35],
                [9, 37],
                [10, 38],
                [11, 36],
                [12, 38],
                [13, 35],
                [14, 37],
                [15, 35],
                [16, 39],
                [17, 37],
                [18, 38],
                [19, 35],
                [20, 32],
                [21, 36],
                [22, 40],
                [23, 34],
                [24, 39],
                [25, 33],
                [26, 30],
                [27, 29],
                [28, 35],
                [29, 29],
                [30, 27],
                [31, 25],
                [32, 28],
                [33, 24],
                [34, 25],
                [35, 23],
                [36, 27],
                [37, 26],
                [38, 23],
                [39, 27],
                [40, 28],
                [41, 25],
                [42, 29],
                [43, 31],
                [44, 33],
                [45, 39],
                [46, 34],
                [47, 34],
                [48, 34],
                [49, 38],
                [50, 36],
                [51, 38],
                [52, 33],
                [53, 35],
                [54, 37],
                [55, 33],
                [56, 29],
                [57, 36],
                [58, 37],
                [59, 40],
                [60, 38],
                [61, 35],
                [62, 40],
                [63, 41],
                [64, 43],
                [65, 47],
                [66, 51],
                [67, 53],
                [68, 56],
                [69, 49],
                [70, 46],
                [71, 40],
                [72, 41],
                [73, 44],
                [74, 40],
                [75, 43],
                [76, 40],
                [77, 45],
                [78, 40],
                [79, 42],
                [80, 40],
                [81, 38],
                [82, 36],
                [83, 37],
                [84, 39],
                [85, 43],
                [86, 45],
                [87, 45],
                [88, 47],
                [89, 45],
                [90, 46]
            ];

            var dashDatadark4 = [
                [0, 75],
                [1, 70],
                [2, 65],
                [3, 60],
                [4, 57],
                [5, 53],
                [6, 49],
                [7, 45],
                [8, 54],
                [9, 52],
                [10, 50],
                [11, 45],
                [12, 41],
                [13, 37],
                [14, 54],
                [15, 49],
                [16, 52],
                [17, 52],
                [18, 52],
                [19, 50],
                [20, 49],
                [21, 45],
                [22, 45],
                [23, 45],
                [24, 58],
                [25, 57],
                [26, 56],
                [27, 54],
                [28, 54],
                [29, 54],
                [30, 50],
                [31, 49],
                [32, 48],
                [33, 47],
                [34, 46],
                [35, 48],
                [36, 49],
                [37, 50],
                [38, 51],
                [39, 53],
                [40, 55],
                [41, 59],
                [42, 65],
                [43, 71],
                [44, 76],
                [45, 74],
                [46, 74],
                [47, 74],
                [48, 74],
                [49, 67],
                [50, 60],
                [51, 58],
                [52, 57],
                [53, 56],
                [54, 59],
                [55, 64],
                [56, 67],
                [57, 65],
                [58, 67],
                [59, 70],
                [60, 68],
                [61, 66],
                [62, 64],
                [63, 59],
                [64, 57],
                [65, 59],
                [66, 56],
                [67, 53],
                [68, 45],
                [69, 50],
                [70, 55],
                [71, 57],
                [72, 62],
                [73, 65],
                [74, 63],
                [75, 64],
                [76, 68],
                [77, 65],
                [78, 60],
                [79, 62],
                [80, 59],
                [81, 57],
                [82, 55],
                [83, 54],
                [84, 50],
                [85, 55],
                [86, 53],
                [87, 50],
                [88, 48],
                [89, 49],
                [90, 50]
            ];

            function bgFlotData(num, val) {
                var data = [];
                for (var i = 0; i < num; ++i) {
                    data.push([i, val]);
                }
                return data;
            }

            function bgFlotData(num, val) {
                var data = [];
                for (var i = 0; i < num; ++i) {
                    data.push([i, val]);
                }
                return data;
            }

            var plot = $.plot('#flotChartDark', [{
                data: dashDatadark4,
                color: '#5e6eed',
                lines: {
                    fillColor: 'rgba(230, 246, 249, 0.06)'
                }
            }, {
                data: dashDatadark3,
                color: '#00cff4',
                lines: {
                    fillColor: 'rgba(230, 246, 249, 0.11)'
                }
            }], {
                    series: {
                        shadowSize: 0,
                        lines: {
                            show: true,
                            lineWidth: 2,
                            fill: true
                        }
                    },
                    grid: {
                        borderWidth: 0,
                        labelMargin: 8
                    },
                    yaxis: {
                        show: true,
                        min: 0,
                        max: 100,
                        ticks: true,
                    },
                    xaxis: {
                        show: true,
                        color: '#fff',
                        tickColor: 'rgba(88, 88, 88, 0.36)',
                        ticks: [[0, '4'], [10, '8'], [20, '12'], [30, '16'], [40, '20'], [50, '24'], [60, '28'], [70, '32'], [79, '36']],
                    }
                });

        });
        // gradient line chart
        if ($("#linechart").length) {
            var chart = document.getElementById('linechart').getContext('2d'),
                gradient = chart.createLinearGradient(0, 0, 0, 150);

            gradient.addColorStop(0, 'rgba(0, 210, 132, 0.78)');
            gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.2)');
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0.1)');

            var data = {
                labels: ["", "jan", "", "feb", "", "mar", "", "apr", "", "may", "", "nov", ""],
                datasets: [{
                    label: 'Custom Label Name',
                    backgroundColor: gradient,
                    pointBackgroundColor: 'white',
                    borderWidth: 1,
                    borderColor: '#00d284',
                    data: [15, 16, 15, 14, 13, 12, 13, 14, 16, 15, 16, 17, 18],
                }]
            };

            var options = {
                responsive: true,
                maintainAspectRatio: true,
                animation: {
                    easing: 'easeInOutQuad',
                    duration: 520
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            color: 'rgba(0, 210, 132, 0.41)',
                            lineWidth: 1,
                            drawBorder: false,
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            display: false,
                            beginAtZero: true
                        }
                    }]
                },
                elements: {
                    line: {
                        tension: 0.4
                    }
                },
                legend: {
                    display: false
                },
                point: {
                    backgroundColor: 'white'
                },
            };

            var chartInstance = new Chart(chart, {
                type: 'line',
                data: data,
                options: options
            });
        }
        // line chart script
        var data = {
            labels: ["10", "", "20", "", "30", "", "40", "", "50", "", "60"],
            datasets: [{
                label: '# of Votes',
                data: [10, 9, 8, 9, 12, 13, 14, 13, 12, 14, 13],
                backgroundColor: [
                    '#5e6eed',
                    '#5e6eed',
                    '#5e6eed',
                    '#5e6eed',
                    '#5e6eed',
                    '#5e6eed',
                    '#5e6eed',
                    '#5e6eed',
                    '#5e6eed',
                    '#5e6eed',
                    '#5e6eed',
                ],
                borderColor: [
                    '#5e6eed',
                    '#5e6eed',
                    '#5e6eed',
                    '#5e6eed',
                    '#5e6eed',
                    '#5e6eed',
                    '#5e6eed',
                    '#5e6eed',
                    '#5e6eed',
                    '#5e6eed',
                ],
                borderWidth: 1,
                fill: false
            }]
        };
        var options = {
            scales: {
                yAxes: [{
                    ticks: {
                        display: false,
                        min: 0
                    },
                    gridLines: {
                        display: false
                    },
                    beginAtZero: true
                }],
                xAxes: [{
                    barPercentage: 0.4,
                    gridLines: {
                        drawBorder: false,
                    }
                }]
            },
            legend: {
                display: false
            },
            elements: {
                point: {
                    radius: 0
                }
            }

        };
        if ($("#barchart").length) {
            var barChartCanvas = $("#barchart").get(0).getContext("2d");
            // This will get the first returned node in the jQuery collection.
            var barChart = new Chart(barChartCanvas, {
                type: 'bar',
                data: data,
                options: options
            });
        }
    });
})(jQuery)