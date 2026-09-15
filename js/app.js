// ===============================
// DOM SELECTION
// ===============================

const profileCard = document.getElementById("profileCard");
const profileName = document.getElementById("profileName");
const profileProgram = document.getElementById("profileProgram");
const profileYear = document.getElementById("profileYear");
const profileStatus = document.getElementById("profileStatus");

const nameInput = document.getElementById("nameInput");
const programInput = document.getElementById("programInput");
const yearInput = document.getElementById("yearInput");
const statusInput = document.getElementById("statusInput");

const updateBtn = document.getElementById("updateBtn");
const toggleDetailsBtn = document.getElementById("toggleDetailsBtn");
const themeBtn = document.getElementById("themeBtn");
const resetBtn = document.getElementById("resetBtn");

const detailsPanel = document.getElementById("detailsPanel");
const studentIdDisplay = document.getElementById("studentIdDisplay");
const formMessage = document.getElementById("formMessage");

// querySelector requirement
const body = document.querySelector("body");


// ===============================
// INITIAL DATA
// ===============================

const initialProfile = {
    name: "Maria Santos",
    program: "BS Information Technology",
    year: "3rd Year",
    status: "active"
};


// ===============================
// UTILITY FUNCTIONS
// ===============================

function isValidStudentName(name) {
    return name.trim().length >= 2;
}


function formatStudentStatus(status) {
    if (status === "active") {
        return "Active";
    }

    if (status === "inactive") {
        return "Inactive";
    }

    return "";
}


// ===============================
// STATUS MANAGEMENT
// ===============================

function setStatus(status) {

    profileCard.dataset.status = status;

    profileStatus.textContent = formatStudentStatus(status);

    profileCard.classList.remove("active");
    profileCard.classList.remove("inactive");

    if (status === "active") {
        profileCard.classList.add("active");
    }

    if (status === "inactive") {
        profileCard.classList.add("inactive");
    }
}


// ===============================
// UPDATE PROFILE
// ===============================

function updateProfile() {

    const name = nameInput.value.trim();
    const program = programInput.value;
    const year = yearInput.value;
    const status = statusInput.value;

    // Validate student name
    if (!isValidStudentName(name)) {

        formMessage.textContent = "Student name is required";

        return;
    }

    // Update using textContent
    profileName.textContent = name;
    profileProgram.textContent = program;
    profileYear.textContent = year;

    setStatus(status);

    formMessage.textContent = "Profile updated successfully.";
}


// ===============================
// TOGGLE DETAILS
// ===============================

function toggleDetails() {

    detailsPanel.classList.toggle("hidden");
}


// ===============================
// TOGGLE THEME
// ===============================

function toggleTheme() {

    body.classList.toggle("dark-theme");
}


// ===============================
// RESET PROFILE
// ===============================

function resetProfile() {

    // Restore profile values
    profileName.textContent = initialProfile.name;
    profileProgram.textContent = initialProfile.program;
    profileYear.textContent = initialProfile.year;

    // Restore controls
    nameInput.value = "";
    programInput.value = initialProfile.program;
    yearInput.value = initialProfile.year;
    statusInput.value = initialProfile.status;

    // Restore status
    setStatus(initialProfile.status);

    // Restore student ID from dataset
    const studentId = profileCard.dataset.studentId;
    studentIdDisplay.textContent = "Student ID: " + studentId;

    // Show details
    detailsPanel.classList.remove("hidden");

    // Clear message
    formMessage.textContent = "";

    // Remove dark theme
    body.classList.remove("dark-theme");
}


// ===============================
// EVENT LISTENERS
// ===============================

updateBtn.addEventListener("click", updateProfile);

toggleDetailsBtn.addEventListener("click", toggleDetails);

themeBtn.addEventListener("click", toggleTheme);

resetBtn.addEventListener("click", resetProfile);


// ===============================
// INITIAL SETUP
// ===============================

const studentId = profileCard.dataset.studentId;

studentIdDisplay.textContent = "Student ID: " + studentId;

setStatus(profileCard.dataset.status);