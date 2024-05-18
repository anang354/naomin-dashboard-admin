window.addEventListener("scroll", function () {
  function navbarOnScrollFixed() {
    const navbar = document.getElementById("fixed-scroll");
    const brand = document.getElementById("fixed-brand");
    const userNav = document.getElementById("fixed-user");
    if (window.innerWidth > 767) {
      if (window.scrollY >= 50) {
        navbar.classList.add("fixed", "w-full", "top-0", "z-50");
        brand.classList.remove("hidden");
        brand.classList.add("block");
        userNav.classList.remove("hidden");
        userNav.classList.add("block");
      } else {
        navbar.classList.remove("fixed", "w-full", "top-0");
        brand.classList.remove("block");
        brand.classList.add("hidden");
        userNav.classList.remove("block");
        userNav.classList.add("hidden");
      }
    }
  }
  navbarOnScrollFixed();
});

var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

// Change the icons inside the button based on previous settings
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleLightIcon.classList.remove("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
}

var themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});

//const chartSales = document.getElementById("chartSales");
// Example order data for the last 5 months
const orderData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [{
      label: 'Number of Orders',
      data: [46321, 50120, 49251, 46721, 49950, 46675, 54212],
      backgroundColor: 'rgba(56, 189, 248, 0.2)',
      borderColor: 'rgba(56, 189, 248, 0.7)',
      borderWidth: 3,
  }]
};

const ctx = document.getElementById('orderChart').getContext('2d');
new Chart(ctx, {
  type: 'line', // Type of chart (bar, line, etc.)
  data: orderData,
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      },
      responsive: true,
      elements: {
        line: {
          lineTension: 0.3
        }
      },
      
  }
});



const orderDataShip = {
  labels: ['Delivered', 'Returned', 'On Shipment', 'Closing'],
  datasets: [{
      label: 'Order Status Distribution',
      data: [40, 15, 30, 15],
      backgroundColor: ['#28a745', '#dc3545', '#ffc107', '#6c757d'],
      hoverBackgroundColor: ['#39b54a', '#e65a5a', '#ffd700', '#868d8b']
  }]
};

const ctxDont = document.getElementById('orderStatusChart').getContext('2d');
new Chart(ctxDont, {
  type: 'doughnut',
  data: orderDataShip,
  options: {
      responsive: true,
      tooltips: {
          callbacks: {
              title: function(tooltipItem) {
                  return tooltipItem[0].label + ': ' + tooltipItem[0].data + '%';
              },
              label: function(tooltipItem) {
                  return ''; // Hide individual labels
              }
          }
      }
  }
});