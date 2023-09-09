document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
  const fullScreenDialog = document.getElementById("full-screen-dialog");
  const closeFullScreenDialog = document.getElementById(
    "close-full-screen-dialog"
  );
  const projectCard = document.getElementById("project-card");
  const dialogCards = document.querySelectorAll(".dialog-card");
  const scrollToTopLink = document.getElementById("scroll-to-top");
  const sections = document.querySelectorAll(".fade-in");
  const socialIcons = document.querySelectorAll(".social-icons a");

  socialIcons.forEach(function (icon) {
    icon.addEventListener("click", function (e) {
      e.preventDefault();
      const url = icon.getAttribute("href");
      window.open(url, "_blank");
    });
  });

  function checkScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.75) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });
  }

  // Initial check on page load
  checkScroll();

  // Listen for scroll events
  window.addEventListener("scroll", checkScroll);

  scrollToTopLink.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
    });
  });

  mobileMenuIcon.addEventListener("click", function () {
    fullScreenDialog.classList.toggle("show-dialog");
  });

  closeFullScreenDialog.addEventListener("click", function () {
    fullScreenDialog.classList.remove("show-dialog");
  });

  // Add event listeners to close the full-screen dialog when a card is clicked
  dialogCards.forEach(function (card) {
    card.addEventListener("click", function () {
      fullScreenDialog.classList.remove("show-dialog");
    });
  });
});

// Sample list of projects with title, small description, full description, and link
const projects = [
  {
    title: "VIT-AP Mobile App",
    smallDescription:
      "Enhancing collaboration and coordination within the learning environment.",
    fullDescription:
      "The VIT-AP Mobile App is designed to provide students and faculty with a platform for managing their academic activities. It offers features such as V-TOP, Faculty details, Academic Calendar, Parent login, Exam Platform, Library (OPAC), and contact details. The app is optimized for offline use, making it a valuable tool for the campus community.",
    link: "https://play.google.com/store/apps/details?id=com.collage.vit_ap&hl=en_US&gl=US",
  },
  {
    title: "ImmiGPT",
    smallDescription:
      '"ImmiGPT" is a cutting-edge app powered by advanced artificial intelligence that specializes in addressing all types of immigration questions',
    fullDescription:
      '"ImmiGPT" is a cutting-edge app powered by advanced artificial intelligence that specializes in addressing all types of immigration questions. From visa applications to immigration policies, ImmiGPT is your reliable virtual assistant for all immigration-related inquiries. Through natural language processing, the app understands and provides accurate, up-to-date information tailored to your specific situation. ImmiGPT ensures an intuitive user experience, offering personalized guidance, explanations of complex processes, and suggestions for the necessary documentation. With ImmiGPT, you can confidently navigate the intricacies of immigration, making your journey smoother and more informed.',
    link: "https://play.google.com/store/apps/details?id=com.etuloverduolc.immigpt",
  },
  {
    title: "Product App",
    smallDescription: "",
    fullDescription:
      "The Product App is an elegantly straightforward application crafted using Kotlin, featuring a powerful combination of Data Binding, MVVM architecture, and Retrofit for seamless product management. With this app, you can effortlessly upload and manage product listings, including essential details such as product name, image, price, tax, and type. Furthermore, the app empowers you to conveniently edit product images and provides a comprehensive overview of all the products you have uploaded.",
    link: "https://github.com/sai123gopal/productsApp",
  },
  {
    title: "Black Browser: Simple & Fast",
    smallDescription:
      "A minimalist and high-speed web browser with a user-friendly interface and advanced features.",
    fullDescription:
      "Black Browser is a user-centric web browser designed for fast and efficient browsing. It features a smart ad blocker, save as PDF functionality, multiple themes (System, Light, Dark, AMOLED), and robust security settings. The browser is optimized for one-handed use and includes advanced gesture controls for a seamless browsing experience.",
    link: "https://play.google.com/store/apps/details?id=com.saigopal.browser&hl=en_US&gl=US",
  },
  {
    title: "Movie Hub",
    smallDescription:
      "An innovative movie app that simplifies movie discovery and provides comprehensive movie details.",
    fullDescription:
      "Movie Hub offers a user-friendly list of the latest movies, complete with posters, titles, and release dates. It provides in-depth information, including genres, duration, and plot summaries. Users can explore movie cast details, discover similar movies, and read reviews from critics and users. With its intuitive interface, Movie Hub is the ultimate app for movie enthusiasts.",
    link: "https://github.com/sai123gopal/Movie_hub",
  },
  // Add more projects as needed
];

function closeProjectDialog() {
  const projectDialog = document.querySelector(".project-dialog-container");
  projectDialog.style.display = "none";
}

// Function to open the project dialog and fetch link previews
function openProjectDialog(index) {
  const projectDialog = document.querySelector(".project-dialog-container");
  const dialogTitle = document.getElementById("project-dialog-title");
  const dialogSmallDescription = document.getElementById(
    "project-dialog-small-description"
  );
  const dialogFullDescription = document.getElementById(
    "project-dialog-full-description"
  );
  const dialogLink = document.getElementById("project-dialog-link");
  const dialogLinkPreview = document.getElementById(
    "project-dialog-link-preview"
  );

  // Get the project details from the projects list
  const project = projects[index];

  // Set the project details
  dialogTitle.textContent = project.title;
  dialogSmallDescription.textContent = project.smallDescription;
  dialogFullDescription.textContent = project.fullDescription;
  dialogLink.href = project.link;
  dialogLink.textContent = "Link Preview";

  projectDialog.style.display = "flex";
}
