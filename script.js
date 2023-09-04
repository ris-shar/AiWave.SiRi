// Function to check if the user has scrolled halfway
function isHalfwayScrolled() {
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var body = document.body;
    var html = document.documentElement;
    var documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    var scrollPercentage = (window.scrollY + windowHeight) / documentHeight;
    return scrollPercentage >= 0.5; // Show the footer when scrolled halfway
}

// Function to toggle the footer visibility
function toggleFooter() {
    var footer = document.getElementById("myFooter");
    if (isHalfwayScrolled()) {
        footer.style.display = "block";
    } else {
        footer.style.display = "none";
    }
}

// Attach the toggleFooter function to the scroll event
window.addEventListener("scroll", toggleFooter);

// Function to handle the intersection
function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Footer is in the viewport, increase opacity gradually
            fadeInFooter();
        } else {
            // Footer is out of the viewport, reset opacity to 0
            document.getElementById("myFooter").style.opacity = 0;
        }
    });
}

// Create an Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5, // Trigger when at least 50% of the footer is in the viewport
});

// Observe the footer element
observer.observe(document.getElementById("myFooter"));

// Function to gradually increase the opacity of the footer
function fadeInFooter() {
    const footer = document.getElementById("myFooter");
    let opacity = 0;
    const targetOpacity = 1;
    const duration = 1000; // Duration in milliseconds

    const intervalId = setInterval(() => {
        if (opacity < targetOpacity) {
            opacity += 0.05; // Adjust the step size as needed
            footer.style.opacity = opacity;
        } else {
            clearInterval(intervalId);
        }
    }, duration / 40); // Divide duration by the number of steps
}
