import { Chart } from "@/components/ui/chart"
document.addEventListener("DOMContentLoaded", () => {
  // Toggle sidebar on button click
  const sidebarCollapse = document.getElementById("sidebarCollapse")
  const sidebar = document.getElementById("sidebar")

  if (sidebarCollapse && sidebar) {
    sidebarCollapse.addEventListener("click", () => {
      sidebar.classList.toggle("active")
    })
  }

  // Close sidebar when clicking outside on mobile
  document.addEventListener("click", (event) => {
    const isClickInsideSidebar = sidebar.contains(event.target)
    const isClickOnToggleButton = sidebarCollapse.contains(event.target)
    const isSidebarActive = sidebar.classList.contains("active")
    const isMobile = window.innerWidth < 768

    if (isMobile && isSidebarActive && !isClickInsideSidebar && !isClickOnToggleButton) {
      sidebar.classList.remove("active")
    }
  })

  // Handle window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      sidebar.classList.remove("active")
    }
  })

  // Initialize tooltips
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl))

  // Initialize charts based on the current page
  initializeCharts()
})

function initializeCharts() {
  // Set Chart.js defaults
  Chart.defaults.font.family = "'Poppins', sans-serif"
  Chart.defaults.color = "#555"

  // Define common colors
  const colors = {
    primary: "#0d6efd",
    secondary: "#6c757d",
    success: "#198754",
    info: "#0dcaf0",
    warning: "#ffc107",
    danger: "#dc3545",
    light: "#f8f9fa",
    dark: "#212529",
  }

  const chartColors = [
    colors.primary,
    colors.success,
    colors.warning,
    colors.danger,
    colors.info,
    "#8549ba", // purple
    "#ff6f61", // coral
    "#6b8e23", // olive
    "#20b2aa", // turquoise
    "#d2691e", // chocolate
  ]

  // Dashboard page charts
  if (document.getElementById("regionChart")) {
    // Region chart (pie)
    new Chart(document.getElementById("regionChart"), {
      type: "pie",
      data: {
        labels: ["North America", "Europe", "Asia", "South America", "Africa", "Oceania"],
        datasets: [
          {
            data: [42, 28, 18, 7, 3, 2],
            backgroundColor: chartColors,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "right",
          },
          title: {
            display: true,
            text: "Sales Distribution by Region (%)",
          },
        },
      },
    })
  }

  if (document.getElementById("trendsChart")) {
    // Trends chart (line)
    new Chart(document.getElementById("trendsChart"), {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "2023 Sales",
            data: [65, 59, 80, 81, 56, 55, 70, 72, 85, 90, 92, 97],
            fill: false,
            borderColor: colors.primary,
            tension: 0.1,
          },
          {
            label: "2022 Sales",
            data: [45, 55, 60, 78, 52, 48, 60, 62, 75, 85, 82, 90],
            fill: false,
            borderColor: colors.secondary,
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Monthly Sales Trends",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Sales ($ thousands)",
            },
          },
        },
      },
    })
  }

  if (document.getElementById("productsChart")) {
    // Products chart (horizontal bar)
    new Chart(document.getElementById("productsChart"), {
      type: "bar",
      data: {
        labels: ["Product A", "Product B", "Product C", "Product D", "Product E"],
        datasets: [
          {
            label: "Sales Volume",
            data: [285, 240, 190, 140, 120],
            backgroundColor: colors.primary,
          },
        ],
      },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Top 5 Products by Sales",
          },
        },
        scales: {
          x: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Sales ($ thousands)",
            },
          },
        },
      },
    })
  }

  if (document.getElementById("categoryChart")) {
    // Category chart (doughnut)
    new Chart(document.getElementById("categoryChart"), {
      type: "doughnut",
      data: {
        labels: ["Electronics", "Clothing", "Food", "Home", "Other"],
        datasets: [
          {
            data: [35, 25, 20, 15, 5],
            backgroundColor: chartColors,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
          },
          title: {
            display: true,
            text: "Sales by Category (%)",
          },
        },
      },
    })
  }

  // Regional page charts
  if (document.getElementById("regionalDistributionChart")) {
    // Regional Distribution chart (bar)
    new Chart(document.getElementById("regionalDistributionChart"), {
      type: "bar",
      data: {
        labels: ["North America", "Europe", "Asia", "South America", "Africa", "Oceania"],
        datasets: [
          {
            label: "Sales",
            data: [4200, 2800, 1800, 700, 300, 200],
            backgroundColor: chartColors,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Sales Distribution by Region ($ thousands)",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Sales ($ thousands)",
            },
          },
        },
      },
    })
  }

  if (document.getElementById("yoyGrowthChart")) {
    // YoY Growth chart (bar)
    new Chart(document.getElementById("yoyGrowthChart"), {
      type: "bar",
      data: {
        labels: ["North America", "Europe", "Asia", "South America", "Africa", "Oceania"],
        datasets: [
          {
            label: "Growth (%)",
            data: [12, 8, 15, 20, 5, 10],
            backgroundColor: chartColors,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Year-over-Year Growth by Region",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Growth Rate (%)",
            },
          },
        },
      },
    })
  }

  if (document.getElementById("performanceIndexChart")) {
    // Performance Index chart (radar)
    new Chart(document.getElementById("performanceIndexChart"), {
      type: "radar",
      data: {
        labels: ["Sales", "Growth", "Profit", "ROI", "Customer Satisfaction"],
        datasets: [
          {
            label: "North America",
            data: [85, 75, 90, 80, 85],
            fill: true,
            backgroundColor: "rgba(13, 110, 253, 0.2)",
            borderColor: colors.primary,
            pointBackgroundColor: colors.primary,
          },
          {
            label: "Europe",
            data: [80, 70, 75, 90, 80],
            fill: true,
            backgroundColor: "rgba(25, 135, 84, 0.2)",
            borderColor: colors.success,
            pointBackgroundColor: colors.success,
          },
          {
            label: "Asia",
            data: [70, 85, 65, 75, 70],
            fill: true,
            backgroundColor: "rgba(255, 193, 7, 0.2)",
            borderColor: colors.warning,
            pointBackgroundColor: colors.warning,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Regional Performance Metrics",
          },
        },
        scales: {
          r: {
            angleLines: {
              display: true,
            },
            suggestedMin: 50,
            suggestedMax: 100,
          },
        },
      },
    })
  }

  // Products page charts
  if (document.getElementById("productPerformanceChart")) {
    // Product Performance chart (bar)
    new Chart(document.getElementById("productPerformanceChart"), {
      type: "bar",
      data: {
        labels: ["Product A", "Product B", "Product C", "Product D", "Product E", "Product F", "Product G"],
        datasets: [
          {
            label: "Sales",
            data: [285, 240, 190, 140, 120, 100, 90],
            backgroundColor: colors.primary,
          },
          {
            label: "Profit",
            data: [120, 80, 95, 70, 55, 40, 35],
            backgroundColor: colors.success,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Product Performance (Sales vs Profit)",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "$ thousands",
            },
          },
        },
      },
    })
  }

  if (document.getElementById("categoryBreakdownChart")) {
    // Category Breakdown chart (pie)
    new Chart(document.getElementById("categoryBreakdownChart"), {
      type: "pie",
      data: {
        labels: ["Electronics", "Clothing", "Food", "Home", "Beauty", "Sports", "Other"],
        datasets: [
          {
            data: [30, 22, 15, 12, 10, 8, 3],
            backgroundColor: chartColors,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "right",
          },
          title: {
            display: true,
            text: "Sales by Product Category (%)",
          },
        },
      },
    })
  }

  if (document.getElementById("profitMarginsChart")) {
    // Profit Margins chart (horizontal bar)
    new Chart(document.getElementById("profitMarginsChart"), {
      type: "bar",
      data: {
        labels: ["Electronics", "Clothing", "Food", "Home", "Beauty", "Sports"],
        datasets: [
          {
            label: "Profit Margin (%)",
            data: [42, 35, 28, 45, 38, 32],
            backgroundColor: [
              colors.success,
              colors.success,
              colors.warning,
              colors.success,
              colors.success,
              colors.warning,
            ],
          },
        ],
      },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Profit Margins by Category",
          },
        },
        scales: {
          x: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Margin (%)",
            },
            max: 50,
          },
        },
      },
    })
  }

  // Trends page charts
  if (document.getElementById("annualSalesTrendsChart")) {
    // Annual Sales Trends chart (line)
    new Chart(document.getElementById("annualSalesTrendsChart"), {
      type: "line",
      data: {
        labels: ["2018", "2019", "2020", "2021", "2022", "2023"],
        datasets: [
          {
            label: "Annual Sales",
            data: [5400, 6200, 5800, 7500, 8900, 10000],
            fill: false,
            borderColor: colors.primary,
            tension: 0.1,
          },
          {
            label: "Annual Profit",
            data: [2000, 2400, 2100, 3000, 3800, 4200],
            fill: false,
            borderColor: colors.success,
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Annual Sales & Profit Trends",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "$ thousands",
            },
          },
        },
      },
    })
  }

  if (document.getElementById("quarterlyComparisonChart")) {
    // Quarterly Comparison chart (bar)
    new Chart(document.getElementById("quarterlyComparisonChart"), {
      type: "bar",
      data: {
        labels: ["Q1", "Q2", "Q3", "Q4"],
        datasets: [
          {
            label: "2022",
            data: [2100, 2300, 2200, 2300],
            backgroundColor: colors.secondary,
          },
          {
            label: "2023",
            data: [2300, 2600, 2400, 2700],
            backgroundColor: colors.primary,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Quarterly Sales Comparison",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Sales ($ thousands)",
            },
          },
        },
      },
    })
  }

  if (document.getElementById("momGrowthChart")) {
    // Month-over-Month Growth chart (line)
    new Chart(document.getElementById("momGrowthChart"), {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Growth Rate (%)",
            data: [2.5, -1.2, 3.5, 1.8, -0.7, 4.2, 2.0, 1.5, 3.8, 1.0, 2.2, 5.3],
            fill: false,
            borderColor: colors.primary,
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Month-over-Month Growth Rate",
          },
        },
        scales: {
          y: {
            title: {
              display: true,
              text: "Growth Rate (%)",
            },
          },
        },
      },
    })
  }
}

