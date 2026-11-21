
// Blood test educational database

const testData = {

    cbc: {
        title: "Complete Blood Count (CBC)",

        description:
        "CBC measures different components of blood, including red blood cells, white blood cells and platelets.",

        parameters: [

            {
                name: "Hemoglobin",
                range: "12.0–17.5",
                unit: "g/dL",
                meaning: "A protein in red blood cells that carries oxygen."
            },

            {
                name: "RBC Count",
                range: "4.0–5.9",
                unit: "million/µL",
                meaning: "Measures the number of red blood cells."
            },

            {
                name: "WBC Count",
                range: "4,000–11,000",
                unit: "/µL",
                meaning: "Measures white blood cells involved in immunity."
            },

            {
                name: "Platelets",
                range: "150,000–450,000",
                unit: "/µL",
                meaning: "Blood components that help with clotting."
            }

        ]
    },

    hemoglobin: {
        title: "Hemoglobin Test",

        description:
        "This test measures the amount of hemoglobin, the oxygen-carrying protein in red blood cells.",

        parameters: [

            {
                name: "Hemoglobin",
                range: "12.0–17.5",
                unit: "g/dL",
                meaning: "Carries oxygen from the lungs to body tissues."
            }

        ]
    },

    glucose: {
        title: "Blood Glucose Test",

        description:
        "Blood glucose tests measure the amount of glucose (sugar) in your blood. The reference depends on whether the test is fasting, random or after a meal.",

        parameters: [

            {
                name: "Fasting Glucose",
                range: "70–99",
                unit: "mg/dL",
                meaning: "Measures blood sugar after at least 8 hours of fasting. This is a commonly used normal fasting range for non-pregnant adults."
            }

        ]
    },

    lipid: {
        title: "Lipid Profile",

        description:
        "A lipid profile measures different types of fats in the blood, including cholesterol and triglycerides.",

        parameters: [

            {
                name: "Total Cholesterol",
                range: "Below 200",
                unit: "mg/dL",
                meaning: "Measures the total amount of cholesterol in the blood."
            },

            {
                name: "HDL",
                range: "40 or higher",
                unit: "mg/dL",
                meaning: "High-density lipoprotein, commonly called good cholesterol."
            },

            {
                name: "LDL",
                range: "Below 100",
                unit: "mg/dL",
                meaning: "Low-density lipoprotein, often called bad cholesterol."
            },

            {
                name: "Triglycerides",
                range: "Below 150",
                unit: "mg/dL",
                meaning: "Measures a type of fat used by the body for energy."
            }

        ]
    },

    thyroid: {
        title: "Thyroid Profile",

        description:
        "Thyroid tests help evaluate thyroid gland function by measuring hormones such as TSH, T3 and T4.",

        parameters: [

            {
                name: "TSH",
                range: "0.4–4.0",
                unit: "mIU/L",
                meaning: "Thyroid-stimulating hormone helps regulate thyroid activity."
            },

            {
                name: "Free T4",
                range: "0.8–1.8",
                unit: "ng/dL",
                meaning: "Measures the unbound form of thyroxine hormone."
            }

        ]
    },

    vitamin: {
        title: "Vitamin D Test",

        description:
        "This test commonly measures 25-hydroxyvitamin D to evaluate vitamin D status.",

        parameters: [

            {
                name: "25-OH Vitamin D",
                range: "Varies by guideline",
                unit: "ng/mL",
                meaning: "Measures the main circulating form used to assess vitamin D status."
            }

        ]
    }

};


// Search blood tests

function searchTests() {

    let input = document.getElementById("testSearch")
        .value.toLowerCase().trim();

    let cards = document.querySelectorAll(".test-card");

    let found = false;

    cards.forEach(function(card) {

        let name = card.getAttribute("data-name");

        if (name.includes(input)) {

            card.style.display = "block";
            found = true;

        } else {

            card.style.display = "none";

        }

    });

    document.getElementById("noResults").style.display =
        found ? "none" : "block";
}


// Open test details

function showTest(testName) {

    let test = testData[testName];

    if (!test) {
        return;
    }

    document.getElementById("testTitle").textContent =
        test.title;

    document.getElementById("testDescription").textContent =
        test.description;

    let table = document.getElementById("parameterTable");

    table.innerHTML = "";

    test.parameters.forEach(function(parameter) {

        let row = document.createElement("tr");

        row.innerHTML = `
            <td><strong>${parameter.name}</strong></td>
            <td>${parameter.range}</td>
            <td>${parameter.unit}</td>
            <td>${parameter.meaning}</td>
        `;

        table.appendChild(row);

    });

    let details = document.getElementById("detailsSection");

    details.style.display = "block";

    details.scrollIntoView({
        behavior: "smooth"
    });

}


// Close details

function closeDetails() {

    document.getElementById("detailsSection").style.display =
        "none";

}


// Search when Enter is pressed

document.getElementById("testSearch").addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {
            searchTests();
        }

    }
);
