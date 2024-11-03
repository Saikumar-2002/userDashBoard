document.addEventListener("DOMContentLoaded", () => {
    const viewButtons = document.querySelectorAll(".view-details-btn");
  
    viewButtons.forEach(button => {
      button.addEventListener("click", () => {
        alert("More project details coming soon!");
      });
    });
  });


//   piechart

const canvas = document.getElementById("pieChart");
const ctx = canvas.getContext("2d");

const data = [
  { label: "Frontend", value: 25, color: "#3498db" },
  { label: "Backend", value: 15, color: "#2ecc71" },
  { label: "Database", value: 10, color: "#f1c40f" },
  { label: "Testing", value: 20, color: "#e74c3c" },
  { label: "Design", value: 30, color: "#9b59b6" },
];

const total = data.reduce((sum, slice) => sum + slice.value, 0);

const drawPieChart = (data) => {
  let startAngle = 0;

  data.forEach(slice => {
    // Calculate the angle for each slice
    const sliceAngle = (slice.value / total) * 2 * Math.PI;
    const endAngle = startAngle + sliceAngle;

    // Draw slice
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.arc(canvas.width / 2, canvas.height / 2, canvas.height / 3, startAngle, endAngle);
    ctx.closePath();
    ctx.fillStyle = slice.color;
    ctx.fill();

    // Calculate label position
    const midAngle = startAngle + sliceAngle / 2;
    const labelX = canvas.width / 2 + Math.cos(midAngle) * (canvas.height / 4);
    const labelY = canvas.height / 2 + Math.sin(midAngle) * (canvas.height / 4);

    // Draw percentage text inside slice
    ctx.fillStyle = "#fff";
    ctx.font = "bold 14px Arial";
    ctx.textAlign = "center";
    ctx.fillText(`${((slice.value / total) * 100).toFixed(1)}%`, labelX, labelY);

    startAngle = endAngle;
  });
};

drawPieChart(data);

  



//   calendar

// const monthYear = document.getElementById("monthYear");
// const calendarBody = document.getElementById("calendarBody");
// const prevMonthButton = document.getElementById("prevMonth");
// const nextMonthButton = document.getElementById("nextMonth");

// let currentDate = new Date();

// const renderCalendar = () => {
//   calendarBody.innerHTML = "";

//   const year = currentDate.getFullYear();
//   const month = currentDate.getMonth();
//   const firstDay = new Date(year, month, 1).getDay();
//   const daysInMonth = new Date(year, month + 1, 0).getDate();

//   monthYear.textContent = `${currentDate.toLocaleString("default", { month: "long" })} ${year}`;

//   // Create blank cells for days before the first day of the month
//   let row = document.createElement("tr");
//   for (let i = 0; i < firstDay; i++) {
//     row.appendChild(document.createElement("td"));
//   }

//   // Fill the calendar with days of the month
//   for (let day = 1; day <= daysInMonth; day++) {
//     const cell = document.createElement("td");
//     cell.textContent = day;

//     // Highlight the current day
//     if (
//       day === new Date().getDate() &&
//       month === new Date().getMonth() &&
//       year === new Date().getFullYear()
//     ) {
//       cell.classList.add("current-day");
//     }

//     row.appendChild(cell);

//     // Start a new row after Saturday
//     if ((firstDay + day) % 7 === 0) {
//       calendarBody.appendChild(row);
//       row = document.createElement("tr");
//     }
//   }

//   // Add the last row to the calendar body
//   calendarBody.appendChild(row);
// };

// const goToPreviousMonth = () => {
//   currentDate.setMonth(currentDate.getMonth() - 1);
//   renderCalendar();
// };

// const goToNextMonth = () => {
//   currentDate.setMonth(currentDate.getMonth() + 1);
//   renderCalendar();
// };

// prevMonthButton.addEventListener("click", goToPreviousMonth);
// nextMonthButton.addEventListener("click", goToNextMonth);

// // Initialize calendar
// renderCalendar();
