const projects = [
    {
        id: "FF",
        name: "Friend Finder",
        description: "An app for finding a friend that fits your personality",
        thumbnail: "./assets/images/friendFinder.jpg",
        url: "https://friendfinder-2345.herokuapp.com/",
        github: "",
        category: ["group", "javascript", "html", "css", "nodejs"]
    },
    {
        id: "SC",
        name: "Securify",
        description: "https://github.com/DevonMartens/friendFinder",
        thumbnail: "./assets/images/Secuify.png",
        url: "https://devonmartens.github.io/Securify/",
        github: "https://github.com/DevonMartens/Securify",
        category: ["group", "javascript", "html", "css"]
    },
      {
        id: "CG",
        name: "Clicky Game",
        description: "",
        thumbnail: "./assets/images/simpsons.jpg",
        url: "",
        github: "https://github.com/DevonMartens/ClickyGame",
        category: ["group", "javascript", "html", "css", "nodejs", "React"]
    },  {
        id: "JW",
        name: "Jerkday Workday",
        description: "Scheduling application for any mood",
        thumbnail: "./assets/images/jerkwork.png",
        url: "https://devonmartens.github.io/Jerkday_Workday/",
        github: "https://github.com/DevonMartens/Jerkday_Workday",
        category: ["group", "javascript", "html", "css"]
    }, {
        id: "CC",
        name: "Crystal Collector",
        description: "An .MathRandom(Get It haha) addition game",
        thumbnail: "./assets/images/unit4.png",
        url: "https://devonmartens.github.io/unit-4-game/",
        github: "https://github.com/DevonMartens/unit-4-game",
        category: ["group", "javascript", "html", "css"]
    },
    {
        id: "AA",
        name: "Alpaca_Api",
        description: "A third party API Python App for tracking trades of stock",
        thumbnail: "./assets/images/download.jpg",
        url: "https://media.giphy.com/media/vZeYi2lWCGRDdHxPz2/giphy.gif",
        github: "https://github.com/DevonMartens/Alpaca_Api",
        category: ["group", "python"]
    }, 
    {
        id: "NG",
        name: "The Negotiator",
        description: "A third party API Python App for tracking trades of stock",
        thumbnail: "./assets/images/Negotiator.png",
        url: "https://thenegotiator.herokuapp.com/",
        github: "https://github.com/DevonMartens/The-Negotiator",
        category: ["group", "javascript", "html", "css", "nodejs", "MySQL"]
    },
    {
        id: "PG",
        name: "The Psychic Game",
        description: "The first Javascript application I ever made",
        thumbnail: "./assets/images/ProX.jpg",
        url: "https://devonmartens.github.io/Psychic-Game/",
        github: "https://github.com/DevonMartens/Psychic-Game",
        category: ["group", "javascript", "html", "css"]
    }

];


// Portfolio
// Create portfolio grid
let newGrid = [];
for (var i = 0; i < projects.length; i++) {
    let $col = $("<div>");
    $col.addClass(`col-md-4 gridId-${projects[i].id}`);
    $col.html(`<img src="${projects[i].thumbnail}" class="portfolio-img" /><div class="portfolio-overlay">
    <h2>${projects[i].name}</h2>
    <div class="portfolio-links">
    <a class="btn btn-light" href="${projects[i].github}" target="blank_">Github</a>&nbsp;
    <a class="btn btn-light" href="${projects[i].url}" target="blank_">Demo</a>
    </div>
    </div>`);
    newGrid.push($col);
}
$(".portfolio-grid").append(newGrid);

// Filter portfolio grid
function filterPortfolio(filter) {
    $(".portfolio-grid").fadeOut(200, function () {
        for (var i = 0; i < projects.length; i++) {
            if (projects[i].category.includes(filter) || filter === "all") {
                $(`.gridId-${projects[i].id}`).css("display", "block");
            } else {
                $(`.gridId-${projects[i].id}`).css("display", "none");
            }
            $(".portfolio-grid").fadeIn(200);
        }
    });
}

// Portfolio filters check 
// All
$(".portfolio-all").on("click", (event) => {
    event.preventDefault();
    $(".portfolio a").removeClass("portfolio-active");
    $(".portfolio-all").addClass("portfolio-active");
    filterPortfolio("all");
});

// HTML
$(".portfolio-html").on("click", (event) => {
    event.preventDefault();
    $(".portfolio a").removeClass("portfolio-active");
    $(".portfolio-html").addClass("portfolio-active");
    filterPortfolio("html");
});

// CSS
$(".portfolio-css").on("click", (event) => {
    event.preventDefault();
    $(".portfolio a").removeClass("portfolio-active");
    $(".portfolio-css").addClass("portfolio-active");
    filterPortfolio("css");
});

// Javascript
$(".portfolio-javascript").on("click", (event) => {
    event.preventDefault();
    $(".portfolio a").removeClass("portfolio-active");
    $(".portfolio-javascript").addClass("portfolio-active");
    filterPortfolio("javascript");
});

// Nodejs
$(".portfolio-nodejs").on("click", (event) => {
    event.preventDefault();
    $(".portfolio a").removeClass("portfolio-active");
    $(".portfolio-nodejs").addClass("portfolio-active");
    filterPortfolio("nodejs");
});
// Python
$(".portfolio-python").on("click", (event) => {
    event.preventDefault();
    $(".portfolio a").removeClass("portfolio-active");
    $(".portfolio-python").addClass("portfolio-active");
    filterPortfolio("python");
});
// MySQL
$(".portfolio-MySQL").on("click", (event) => {
    event.preventDefault();
    $(".portfolio a").removeClass("portfolio-active");
    $(".portfolio-MySQL").addClass("portfolio-active");
    filterPortfolio("MySQL");
});
// React
$(".portfolio-react").on("click", (event) => {
    event.preventDefault();
    $(".portfolio a").removeClass("portfolio-active");
    $(".portfolio-react").addClass("portfolio-active");
    filterPortfolio("React");
});
// // Open resume 
// $(".open-resume").on("click", (event) => {
//     event.preventDefault();
//     $(".modal-overlay-content").html(`<object class="resume-container" data='./assets/pdf/RESUME2020-MarkWilson.pdf'>
//     <p>Oops! Your browser doesn't support PDFs!</p>
//     <p><a style="color: white;" href="./assets/pdf/RESUME2020-MarkWilson.pdf">Download Instead</a></p></object>`);
//     $(".modal-overlay").css("display", "block");
//     $(".modal-overlay .loader").css("display", "none");
// });

// Close modal
function closeModal() {
    $(".modal-overlay").css("display", "none");
    $(".modal-overlay-content").html("");
    $(".modal-overlay .loader").css("display", "block");
}

