const navMenu = document.getElementById("nav_menu");
const navToggle = document.getElementById("toggle");
const navClose = document.getElementById("close");

if (navToggle) {
	navToggle.addEventListener("click", () => {
		navMenu.classList.add("show-menu");
	});
}

if (navClose) {
	navClose.addEventListener("click", () => {
		navMenu.classList.remove("show-menu");
	});
}

/* ========== when you click link button remove show-menu ========== */

const navLink = document.querySelectorAll(".link");

function linkAction() {
	const navMenu = document.getElementById("nav_menu");
	// when we click on each link, we remove show menu
	navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/* ========== Change background header ========== */
function scrollHeader() {
	const header = document.getElementById("header");
	// when you scroll is getter then 80vh height add scroll-header
	if (this.scrollY >= 70) {
		header.classList.add("scroll-header");
	} else {
		header.classList.remove("scroll-header");
	}
}
window.addEventListener("scroll", scrollHeader);

/* ========== swiper ========== */
var testimonialSwiper = new Swiper(".testimonial-swiper", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: "true",

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	breakpoints: {
		768: {
			slidesPerView: 1,
		},
		1024: {
			slidesPerView: 1,
		},
	},
});

/* ========== new ========== */
var newSwiper = new Swiper(".new-swiper", {
	spaceBetween: 24,
	loop: "true",

	breakpoints: {
		425: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
	},
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
	const scrollY = window.pageYOffset;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute("id");

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector(".menu a[href*=" + sectionId + "]")
				.classList.add("active-link");
		} else {
			document
				.querySelector(".menu a[href*=" + sectionId + "]")
				.classList.remove("active-link");
		}
	});
}
window.addEventListener("scroll", scrollActive);

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
	const scrollUp = document.getElementById("scroll-up");
	// When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
	if (this.scrollY >= 400) scrollUp.classList.add("show-scroll");
	else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*=============== show cart and hide ===============*/
const cart = document.getElementById("cart");
const cartToggle = document.getElementById("cart_shop");
const cartClose = document.getElementById("cart-close");

if (cartToggle) {
	cartToggle.addEventListener("click", () => {
		cart.classList.add("cart-show");
	});
}

if (cartClose) {
	cartClose.addEventListener("click", () => {
		cart.classList.remove("cart-show");
	});
}

/*==================== DARK LIGHT THEME ====================*/
/*const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
	document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
	themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
	// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
	document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
	themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
	// Add or remove the dark / icon theme
	document.body.classList.toggle(darkTheme);
	themeButton.classList.toggle(iconTheme);
	// We save the theme and the current icon that the user chose
	localStorage.setItem("selected-theme", getCurrentTheme());
	localStorage.setItem("selected-icon", getCurrentIcon());
});*/
