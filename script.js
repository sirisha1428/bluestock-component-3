document.addEventListener("DOMContentLoaded", function() {
    const sidebarLinks = document.querySelectorAll('.sidebar a');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1); 
            console.log(targetId);
            const targetElement = document.getElementById(targetId);
            console.log(targetElement);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});



document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('myChart').getContext('2d');

    ctx.canvas.width = 800;
    ctx.canvas.height = 400;

    var zerodhaData = [
        { x: '2016-17', y: 1 },
        { x: '2017-18', y: 3 },
        { x: '2018-19', y: 8 },
        { x: '2019-20', y: 12 },
        { x: '2020-21', y: 21 },
        { x: '2021-22', y: 48 },
        { x: '2022-23', y: 75 },
        { x: '2023-24', y: 78 }
    ];

    var angelOneData = [
        { x: '2016-17', y: 4 },
        { x: '2017-18', y: 5 },
        { x: '2018-19', y: 6 },
        { x: '2019-20', y: 6 },
        { x: '2020-21', y: 7 },
        { x: '2021-22', y: 18 },
        { x: '2022-23', y: 44 },
        { x: '2023-24', y: 49 }
    ];

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2016-17', '2017-18', '2018-19', '2019-20', '2020-21', '2021-22', '2022-23', '2023-24'], // X-axis labels
            datasets: [
                {
                    label: 'Zerodha',
                    data: zerodhaData,
                    borderColor: 'rgba(0, 123, 255, 1)', // Blue color for Zerodha
                    borderWidth: 2,
                    fill: false, // Ensure the line is not filled
                    pointBackgroundColor: 'rgba(0, 123, 255, 1)', // Blue color for the points
                    pointStyle: 'circle' // Set point style to circle
                },
                {
                    label: 'AngelOne',
                    data: angelOneData,
                    borderColor: 'rgba(255, 159, 64, 1)', // Orange color for AngelOne
                    borderWidth: 2,
                    fill: false, // Ensure the line is not filled
                    pointBackgroundColor: 'rgba(255, 159, 64, 1)', // Orange color for the points
                    pointStyle: 'circle' // Set point style to circle
                }
            ]
        },
        options: {
            scales: {
                x: {
                    type: 'category',
                    offset: true, // Ensure labels are centered between ticks
                    grid: {
                        display: false // Hide grid lines for cleaner look
                    },
                    ticks: {
                        autoSkip: false, // Prevent auto skipping of labels
                        maxRotation: 0, // Rotate labels if needed (in degrees)
                        minRotation: 0 // Rotate labels if needed (in degrees)
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value + 'l'; 
                        },
                        stepSize: 3, 
                        max: 81, 
                        min: 0 
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true,
                    }
                },
               
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('complaintChart').getContext('2d');

    // Define data points for Zerodha and AngelOne
    var zerodhaData = [100, 160, 380, 360, 420, 950, 590, 390];
    var angelOneData = [200, 300, 390, 370, 340, 1400, 1390, 570];

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2016-17', '2017-18', '2018-19', '2019-20', '2020-21', '2021-22', '2022-23', '2023-24'], // X-axis labels
            datasets: [
                {
                    label: 'Zerodha',
                    data: zerodhaData,
                    borderColor: 'rgba(0, 123, 255, 1)', // Blue color for Zerodha
                    borderWidth: 2,
                    fill: false, // Ensure the line is not filled
                    pointBackgroundColor: 'rgba(0, 123, 255, 1)', // Blue color for the points
                    pointStyle: 'circle' // Set point style to circle
                },
                {
                    label: 'AngelOne',
                    data: angelOneData,
                    borderColor: 'rgba(255, 159, 64, 1)', // Orange color for AngelOne
                    borderWidth: 2,
                    fill: false, // Ensure the line is not filled
                    pointBackgroundColor: 'rgba(255, 159, 64, 1)', // Orange color for the points
                    pointStyle: 'circle' // Set point style to circle
                }
            ]
        },
        options: {
            scales: {
                x: {
                    type: 'category',
                    offset: true, // Ensure labels are centered between ticks
                    grid: {
                        display: false // Hide grid lines for cleaner look
                    },
                    ticks: {
                        autoSkip: false, // Prevent auto skipping of labels
                        maxRotation: 0, // Rotate labels if needed (in degrees)
                        minRotation: 0 // Rotate labels if needed (in degrees)
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value; 
                        },
                        stepSize: 200, // Adjust step size according to your data
                        max: 1800, 
                        min: 0 
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        
                        usePointStyle: true,
                    }
                },
            }
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const overallRating = 4.7;
    const trustFactor = 5;
    const easeOfUse = 4;
    const technology = 4;

    function generateStars(rating) {
        let stars = '';
        for (let i = 0; i < 5; i++) {
            stars += (i < rating) ? '★' : '☆';
        }
        return stars;
    }

    document.getElementById('overall-stars').innerHTML = generateStars(Math.round(overallRating));
    document.getElementById('trust-factor').innerHTML = generateStars(trustFactor);
    document.getElementById('ease-of-use').innerHTML = generateStars(easeOfUse);
    document.getElementById('technology').innerHTML = generateStars(technology);
});

document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('shareChart').getContext('2d');

    var gradientOrange = ctx.createLinearGradient(0, 0, 0, 400);
    gradientOrange.addColorStop(0, 'rgba(255, 159, 64, 1)');
    gradientOrange.addColorStop(1, 'rgba(255, 159, 64, 0.2)');

    var gradientBlue = ctx.createLinearGradient(0, 0, 0, 400);
    gradientBlue.addColorStop(0, 'rgba(54, 162, 235, 1)');
    gradientBlue.addColorStop(1, 'rgba(54, 162, 235, 0.2)');

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['', '', '', '', ''],
            datasets: [{
                data: [42, 28, 10, 8, 6],
                backgroundColor: [
                    gradientOrange,
                    gradientBlue,
                    gradientOrange,
                    gradientBlue,
                    gradientOrange
                ],
                borderColor: [
                    'rgba(255, 159, 64, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 5,
                        callback: function(value) {
                            if ([0, 10, 15, 20, 25, 30, 35, 40, 45].includes(value)) {
                                return value;
                            }
                        }
                    },
                    title: {
                        display: true,
                    }
                },
                x: {
                    title: {
                        display: true,
                    }
                }
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('HoldChart').getContext('2d');

    var gradientOrange = ctx.createLinearGradient(0, 0, 0, 400);
    gradientOrange.addColorStop(0, 'rgba(255, 159, 64, 1)');
    gradientOrange.addColorStop(1, 'rgba(255, 159, 64, 0.2)');

    var gradientBlue = ctx.createLinearGradient(0, 0, 0, 400);
    gradientBlue.addColorStop(0, 'rgba(54, 162, 235, 1)');
    gradientBlue.addColorStop(1, 'rgba(54, 162, 235, 0.2)');

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['', '', '', '', '', ''],
            datasets: [{
                data: [31, 28, 26, 8, 4, 4],
                backgroundColor: [
                    gradientBlue,
                    gradientOrange,
                    gradientBlue,
                    gradientOrange,
                    gradientBlue,
                    gradientOrange
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    min: 0,
                    beginAtZero: true,
                    ticks: {
                        stepSize: 5,
                        callback: function(value) {
                            if ([0, 5, 10, 15, 20, 25, 30, 35].includes(value)) {
                                return value;
                            }
                        }
                    },
                    title: {
                        display: true,
                    }
                },
                x: {
                    title: {
                        display: true,
                    }
                }
            }
        }
    });
});

var ctx = document.getElementById('combinedChart').getContext('2d');

var gradientOrange = ctx.createLinearGradient(0, 0, 0, 400);
gradientOrange.addColorStop(0, 'rgba(255, 159, 64, 1)');
gradientOrange.addColorStop(1, 'rgba(255, 159, 64, 0.5)');

var gradientBlue = ctx.createLinearGradient(0, 0, 0, 400);
gradientBlue.addColorStop(0, 'rgba(54, 162, 235, 1)');
gradientBlue.addColorStop(1, 'rgba(54, 162, 235, 0.5)');

var combinedChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Revenue', '', '', '', 'Profit/Loss', '', ''],
        datasets: [{
            label: 'Angelone',
            backgroundColor: gradientOrange,
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
            data: [1200, 2200, 2900, null, 100, 700, 900] 
        }, {
            label: 'Zerodha',
            backgroundColor: gradientBlue,
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            data: [600, 2800, 4700, null, 500, 1200, 2300] 
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                grid: {
                    display: false // Hide grid lines on x-axis
                },
                ticks: {
                    autoSkip: false,
                    maxRotation: 0, 
                    callback: function(value, index, values) {
                        if (index === 0) return 'Revenue';
                        if (index === 4) return 'Profit/Loss';
                        return '';
                    }
                }
            },
            y: {
                grid: {
                    display: false // Hide grid lines on y-axis
                },
                beginAtZero: true,
                max: 5000, 
                ticks: {
                    stepSize: 500
                }
            }
        },
        plugins: {
            title: {
                display: true,
            },
            legend: {
                display: false 
            },
            annotation: {
                annotations: [
                    {
                        type: 'line',
                        xMin: 3.5,
                        xMax: 3.5,
                        borderColor: 'grey', // Set the line color to grey
                        borderWidth: 2,
                        label: {
                            content: 'Separation',
                            enabled: true,
                            position: 'top'
                        }
                    },
                    {
                        type: 'text',
                        x: 0.5,
                        y: 1.05,
                        font: {
                            size: 12,
                            weight: 'bold'
                        },
                        text: 'Angelone: 2019-20, 2020-21, 2022-23, 2021-22',
                        textAlign: 'start',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        borderColor: 'rgba(0, 0, 0, 0)', // Ensure borderColor is transparent
                        borderWidth: 0, // Ensure borderWidth is 0
                        borderRadius: 4,
                        enabled: true
                    },
                    {
                        type: 'text',
                        x: 5.5,
                        y: 1.05,
                        font: {
                            size: 12,
                            weight: 'bold'
                        },
                        text: 'Zerodha: 2019-20, 2021-22, 2020-21, 2022-23',
                        textAlign: 'start',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        borderColor: 'rgba(0, 0, 0, 0)', // Ensure borderColor is transparent
                        borderWidth: 0, // Ensure borderWidth is 0
                        borderRadius: 4,
                        enabled: true
                    }
                ]
            }
        }
    }
});



