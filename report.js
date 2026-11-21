
// LabLens - Blood Report Understanding

const testRanges = {
    wbc: {
        name: "White Blood Cell (WBC)",
        min: 4.0,
        max: 11.0,
        unit: "thousand/µL",
        explanation: "White blood cells help your immune system fight infections and other foreign substances."
    },

    platelets: {
        name: "Platelet Count",
        min: 150,
        max: 450,
        unit: "thousand/µL",
        explanation: "Platelets are blood components that help form clots and control bleeding."
    },

    glucose: {
        name: "Fasting Blood Glucose",
        min: 70,
        max: 99,
        unit: "mg/dL",
        explanation: "Fasting blood glucose measures the amount of sugar in your blood after fasting."
    },

    hemoglobin: {
        name: "Hemoglobin",
        min: 12,
        max: 17.5,
        unit: "g/dL",
        explanation: "Hemoglobin is a protein in red blood cells that carries oxygen throughout the body. Its reference range varies with age and sex."
    }
};

// Select HTML elements
const testSelect = document.getElementById("testSelect");
const resultInput = document.getElementById("resultValue");
const minInput = document.getElementById("minRange");
const maxInput = document.getElementById("maxRange");
const resultBox = document.getElementById("resultBox");
const unitElement = document.getElementById("unit");

// Update the reference range
function updateRange() {
    const selectedTest = testSelect.value;
    const test = testRanges[selectedTest];

    if (!test) return;

    minInput.value = test.min;
    maxInput.value = test.max;

    unitElement.textContent = test.unit;
    resultBox.innerHTML = "";
}

// Check the entered result
function checkResult() {
    const selectedTest = testSelect.value;
    const test = testRanges[selectedTest];

    const value = Number(resultInput.value);
    const min = Number(minInput.value);
    const max = Number(maxInput.value);

    // Validate inputs
    if (
        resultInput.value.trim() === "" ||
        minInput.value.trim() === "" ||
        maxInput.value.trim() === "" ||
        !Number.isFinite(value) ||
        !Number.isFinite(min) ||
        !Number.isFinite(max) ||
        min > max
    ) {
        resultBox.innerHTML = `
            <div class="warning">
                Please enter a valid test result and reference range.
                The minimum value must not be greater than the maximum value.
            </div>
        `;
        return;
    }

    let status;
    let message;
    let statusClass;

    // Compare values
    if (value < min) {
        status = "Below Reference Range";
        message = "Your entered value is lower than the reference range.";
        statusClass = "low";
    } 
    else if (value > max) {
        status = "Above Reference Range";
        message = "Your entered value is higher than the reference range.";
        statusClass = "high";
    } 
    else {
        status = "Within Reference Range";
        message = "Your entered value falls within the reference range.";
        statusClass = "normal";
    }

    // Display result
    resultBox.innerHTML = `
        <div class="result-status ${statusClass}">
            <h3>${status}</h3>

            <p>${message}</p>

            <p>
                <strong>Test:</strong>
                ${test.name}
            </p>

            <p>
                <strong>Your Result:</strong>
                ${value} ${test.unit}
            </p>

            <p>
                <strong>Reference Range:</strong>
                ${min} - ${max} ${test.unit}
            </p>

            <p>
                <strong>What does this test measure?</strong>
                ${test.explanation}
            </p>

            <p class="disclaimer">
                This comparison is for educational purposes only.
                A result outside a reference range does not automatically
                indicate a disease, and a result within range does not
                guarantee good health. Discuss your report with a qualified
                healthcare professional.
            </p>
        </div>
    `;

    resultBox.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
}

// Reset the form
function resetForm() {
    resultInput.value = "";
    updateRange();
}

// Listen for test selection changes
testSelect.addEventListener("change", updateRange);

// Load the first test when page opens
updateRange();
