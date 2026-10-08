// =====================================
// ICT251 Activity 3 JavaScript
// =====================================


// =====================================
// FEATURE 1: CONTACT FORM VALIDATION
// =====================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const preview = document.getElementById("preview");

        let errors = [];

        if (name === "") {
            errors.push("Please enter your name.");
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            errors.push("Please enter a valid email address.");
        }

        if (message === "") {
            errors.push("Please enter a message.");
        }

        if (errors.length > 0) {

            preview.innerHTML = `
                <div style="color:red;">
                    ${errors.join("<br>")}
                </div>
            `;

            return;
        }

        preview.innerHTML = `
            <div style="color:green;">
                <h3>Validated Preview</h3>

                <p><strong>Name:</strong> ${name}</p>

                <p><strong>Email:</strong> ${email}</p>

                <p><strong>Message:</strong> ${message}</p>

                <p>
                    Form data validated successfully.
                    Browser demonstration only.
                    No message was sent.
                </p>
            </div>
        `;
    });
}



// =====================================
// FEATURE 2: THEME SWITCH
// =====================================

const themeButton = document.getElementById("themeBtn");

if (themeButton) {

    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("dark-theme");

    });

}



// =====================================
// FEATURE 3: STUDY HOURS CALCULATOR
// =====================================

function calculateHours() {}

   