const projects = [
    {
        id: "FF",
        name: "Friend Finder",
        description: "An app for finding a friend that fits your personality",
        thumbnail: "./assets/images/friendFinder.jpg",
        url: "",
        github: "",
        category: ["group", "javascript", "html", "css", "nodejs"]
    },
    {
        id: "SC",
        name: "Securify",
        description: "",
        thumbnail: "./assets/images/Secuify.png",
        url: "https://devonmartens.github.io/Securify/",
        github: "https://github.com/DevonMartens/Securify",
        category: ["group", "javascript", "html", "css"]
    },
    {
        id: "CC",
        name: "Crystal Collector",
        description: "",
        thumbnail: "./assets/images/unit4.png",
        url: "",
        github: "",
        category: ["group", "javascript", "html", "css"]
    },  {
        id: "CG",
        name: "Clicky Game",
        description: "",
        thumbnail: "",
        url: "",
        github: "",
        category: ["group", "javascript", "html", "css", "nodejs", "React"]
    },  {
        id: "CC",
        name: "Crystal Collector",
        description: "",
        thumbnail: "",
        url: "",
        github: "",
        category: ["group", "javascript", "html", "css", "nodejs"]
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

