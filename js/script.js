$(function () {

    // SIDEBAR

    $("#nav-toggle").click(function () {
        sidebarAnimation()
    })

    let sidebarAnimation = function () {
        $("#sidebar").removeClass("animated hidden")
            .addClass("animated")
            .toggleClass("slideOutLeft slideInLeft")
        $("#content").toggleClass("full-width")
        $("#nav-toggle").toggleClass("active")
    }

    let hideOnSmallScreen = function () {
        if ($("#sidebar").hasClass("slideInLeft")) {
            sidebarAnimation()
        }
    }

    let showOnWideScreen = function () {
        if ($("#sidebar").hasClass("slideOutLeft")) {
            sidebarAnimation()
        }
    }

    if ($(window).width() <= 992) {
        sidebarAnimation()
    }

    $(window).on('resize', function () {
        if ($(window).width() <= 992) {
            hideOnSmallScreen()
        } else {
            showOnWideScreen()
        }
    });

    // CHART.JS
    
    /*
     -- VISITORS CHART --     
    */
    var cnx = $("#visitorsChart")
    var data = {
        labels: ["Monday", "Thuesday", "Wednesday", "Thursday", "Friday", "Sunday"],
        datasets: [
            {
                backgroundColor: [
            'rgba(100, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
                borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
                borderWidth: 1,
                data: [65, 59, 80, 81, 56, 55, 40],
            }
        ]
    }

    var visitorsChart = new Chart(cnx, {
        type: 'bar',
        data: data,
        options: {
            title: {
                display: true,
                text: "Page Visitors",
                fontSize: 25,
                padding: 25
            },
            legend: {
                display: false
            },
        }
    })
    
    /*
    -- FREE SPACE CHART --
    */
    
    var cnx = $("#freeSpaceChart")
    var data = {
        labels: [
            "Used",
            "Not Used",
        ],
        datasets: [
            {
                data: [300, 50],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                ]
            }]
    };
    
    var freeSpaceChart = new Chart(cnx, {
        type: 'doughnut',
        data: data,
        options: {
            title: {
                display: true,
                text: "Free Space", 
                fontSize: 25,
                padding: 25
            },
             legend: {
                display: false
            },
        }
        
    })
    
    
    /*
    -- TASKS FINISHED CHART --
    */
    
    var cnx = $("#tasksFinishedChart")
    
    var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September"],
        datasets: [
            {
                label: "My First dataset",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [35, 21, 78, 45, 62, 89, 11, 24, 54],
                spanGaps: false,
            }
        ]
    };

    
    var freeSpaceChart = new Chart(cnx, {
        type: 'line',
        data: data,
        options: {
            title: {
                display: true,
                text: "Tasks Finished", 
                fontSize: 25,
                padding: 25
            },           
            legend: {
                display: false
            },
        }
        
    })
})
