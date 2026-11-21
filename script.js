
function searchTest() {

    let input = document.getElementById("searchInput").value
        .trim().toLowerCase();

    if (input === "") {
        alert("Please enter a blood test name.");
        return;
    }

    let tests = [
        "complete blood count",
        "cbc",
        "hemoglobin",
        "blood glucose",
        "glucose",
        "cholesterol",
        "vitamin d",
        "thyroid profile",
        "t3",
        "t4",
        "tsh"
    ];

    if (tests.includes(input)) {
        document.getElementById("tests").scrollIntoView({
            behavior: "smooth"
        });
    } else {
        alert("Test not found. Please try another test name.");
    }
}
