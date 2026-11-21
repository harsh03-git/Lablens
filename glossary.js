
// Medical Terminology Database

const medicalTerms = [

    {
        code: "RBC",
        name: "Red Blood Cells",
        category: "blood",
        meaning: "Red blood cells carry oxygen from the lungs to different parts of the body using hemoglobin."
    },

    {
        code: "WBC",
        name: "White Blood Cells",
        category: "blood",
        meaning: "White blood cells help the immune system fight infections and protect the body."
    },

    {
        code: "PLT",
        name: "Platelets",
        category: "blood",
        meaning: "Platelets are small blood components that help stop bleeding by forming clots."
    },

    {
        code: "Hb",
        name: "Hemoglobin",
        category: "blood",
        meaning: "Hemoglobin is an iron-containing protein in red blood cells that carries oxygen."
    },

    {
        code: "MCV",
        name: "Mean Corpuscular Volume",
        category: "indices",
        meaning: "MCV describes the average size of red blood cells."
    },

    {
        code: "MCH",
        name: "Mean Corpuscular Hemoglobin",
        category: "indices",
        meaning: "MCH measures the average amount of hemoglobin in a single red blood cell."
    },

    {
        code: "MCHC",
        name: "Mean Corpuscular Hemoglobin Concentration",
        category: "indices",
        meaning: "MCHC describes the average concentration of hemoglobin inside red blood cells."
    },

    {
        code: "HCT",
        name: "Hematocrit",
        category: "indices",
        meaning: "Hematocrit represents the percentage of blood volume occupied by red blood cells."
    },

    {
        code: "RDW",
        name: "Red Cell Distribution Width",
        category: "indices",
        meaning: "RDW describes how much red blood cells vary in size."
    },

    {
        code: "ESR",
        name: "Erythrocyte Sedimentation Rate",
        category: "other",
        meaning: "ESR measures how quickly red blood cells settle in a test tube. It is a nonspecific marker that can be affected by inflammation and other conditions."
    },

    {
        code: "CRP",
        name: "C-Reactive Protein",
        category: "other",
        meaning: "CRP is a protein produced by the liver. Its level can increase when inflammation is present."
    },

    {
        code: "TSH",
        name: "Thyroid Stimulating Hormone",
        category: "other",
        meaning: "TSH is a hormone produced by the pituitary gland that helps regulate thyroid hormone production."
    },

    {
        code: "LDL",
        name: "Low-Density Lipoprotein",
        category: "other",
        meaning: "LDL carries cholesterol in the blood. Higher levels can contribute to plaque buildup in arteries."
    },

    {
        code: "HDL",
        name: "High-Density Lipoprotein",
        category: "other",
        meaning: "HDL helps transport cholesterol away from tissues towards the liver for processing."
    },

    {
        code: "FBS",
        name: "Fasting Blood Sugar",
        category: "other",
        meaning: "FBS measures blood glucose after a period of fasting, commonly at least eight hours."
    }

];


// Display all terms

function displayTerms(terms) {

    const grid = document.getElementById("glossaryGrid");

    grid.innerHTML = "";

    if (terms.length === 0) {

        document.getElementById("noResults").style.display = "block";
        return;

    }

    document.getElementById("noResults").style.display = "none";

    terms.forEach(function(term) {

        const card = document.createElement("div");

        card.className = "term-card";

        card.innerHTML = `
            <div class="term-code">${term.code}</div>

            <h3>${term.name}</h3>

            <p>${term.meaning}</p>

            <span class="term-category">
                ${term.category.toUpperCase()}
            </span>
        `;

        grid.appendChild(card);

    });

}


// Search terms

function searchTerms() {

    const searchValue = document
        .getElementById("glossarySearch")
        .value.toLowerCase().trim();

    const filteredTerms = medicalTerms.filter(function(term) {

        return (
            term.code.toLowerCase().includes(searchValue) ||
            term.name.toLowerCase().includes(searchValue) ||
            term.meaning.toLowerCase().includes(searchValue)
        );

    });

    displayTerms(filteredTerms);

}


// Category filter

function filterTerms(category, button) {

    // Reset search
    document.getElementById("glossarySearch").value = "";

    // Remove previous active class
    document.querySelectorAll(".filter-btn").forEach(function(btn) {

        btn.classList.remove("active");

    });

    // Activate selected button
    button.classList.add("active");

    if (category === "all") {

        displayTerms(medicalTerms);

    } else {

        const filteredTerms = medicalTerms.filter(function(term) {

            return term.category === category;

        });

        displayTerms(filteredTerms);

    }

}


// Show all terms when page loads

displayTerms(medicalTerms);
