
// LabLens Dashboard

// Dashboard statistics
const dashboardStats = {
    tests: 6,
    terms: 15,
    tools: 1
};

// Update dashboard numbers
document.getElementById("testCount").textContent =
    dashboardStats.tests;

document.getElementById("termCount").textContent =
    dashboardStats.terms;

console.log("LabLens Dashboard Loaded Successfully!");
