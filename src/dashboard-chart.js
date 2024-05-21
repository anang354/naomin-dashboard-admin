//const chartSales = document.getElementById("chartSales");
// Example order data for the last 5 months
const orderData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Number of Orders",
      data: [46321, 50120, 49251, 46721, 49950, 46675, 54212],
      backgroundColor: "rgba(56, 189, 248, 0.2)",
      borderColor: "rgba(56, 189, 248, 0.7)",
      borderWidth: 3,
    },
  ],
};

const ctx = document.getElementById("orderChart").getContext("2d");
new Chart(ctx, {
  type: "line", // Type of chart (bar, line, etc.)
  data: orderData,
  options: {
    // scales: {
    //   yAxes: [
    //     {
    //       ticks: {
    //         beginAtZero: true,
    //       },
    //     },
    //   ],
    // },
    responsive: true,
    elements: {
      line: {
        lineTension: 0.3,
      },
    },
  },
});

const orderDataShip = {
  labels: ["Delivered", "Returned", "On Shipment", "Closing"],
  datasets: [
    {
      label: "Order Status Distribution",
      data: [40, 15, 30, 15],
      backgroundColor: ["#2dd4bf", "#fb7185", "#fb923c", "#38bdf8"],
      hoverBackgroundColor: ["#14b8a6", "#f43f5e", "#f97316", "#0ea5e9"],
    },
  ],
};

const ctxDont = document.getElementById("orderStatusChart").getContext("2d");
new Chart(ctxDont, {
  type: "doughnut",
  data: orderDataShip,
  options: {
    aspectRatio: 1.2,
    responsive: true,
    plugins: {
      legend: {
        display: false, // Set display to false to hide the legend
      },
    },
    tooltips: {
      callbacks: {
        title: function (tooltipItem) {
          return tooltipItem[0].label + ": " + tooltipItem[0].data + "%";
        },
        label: function (tooltipItem) {
          return ""; // Hide individual labels
        },
      },
    },
  },
});
