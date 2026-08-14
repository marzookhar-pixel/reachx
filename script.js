function openConsultationForm() {

    const modal = document.createElement("div");

    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.style.zIndex = "99999";
    modal.style.padding = "20px";

    modal.innerHTML = `
        <div style="
            position: relative;
            width: 100%;
            max-width: 500px;
            max-height: 90vh;
            overflow-y: auto;
            padding: 30px;
            background: #11111a;
            border: 1px solid #292942;
            border-radius: 18px;
            color: white;
            font-family: Arial, Helvetica, sans-serif;
            box-sizing: border-box;
        ">

            <button
                id="closeConsultation"
                type="button"
                aria-label="Close form"
                style="
                    position: absolute;
                    top: 12px;
                    right: 15px;
                    width: 35px;
                    height: 35px;
                    border: none;
                    border-radius: 50%;
                    background: #292942;
                    color: white;
                    font-size: 25px;
                    cursor: pointer;
                ">
                ×
            </button>

            <h2 style="
                margin: 0 35px 10px 0;
                font-size: 30px;
                color: white;
            ">
                Get a Free Career Counseling Session
            </h2>

            <p style="
                margin-bottom: 25px;
                color: #dddddd;
                font-size: 15px;
            ">
                Fill in your details and we'll get in touch with you.
            </p>

            <form id="consultationForm" novalidate>

                <!-- NAME -->

                <label
                    for="consultationName"
                    style="
                        display:block;
                        margin-bottom:7px;
                        color:white;
                    "
                >
                    Name
                </label>

                <input
                    id="consultationName"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    autocomplete="name"
                    maxlength="50"
                    required
                    style="
                        width:100%;
                        padding:13px;
                        margin-bottom:6px;
                        border:1px solid #292942;
                        border-radius:8px;
                        background:#0f0f10;
                        color:white;
                        box-sizing:border-box;
                    "
                >

                <small
                    id="nameError"
                    style="
                        display:none;
                        color:#ff5c5c;
                        font-size:12px;
                        margin-bottom:12px;
                    "
                ></small>


                <!-- EMAIL -->

                <label
                    for="consultationEmail"
                    style="
                        display:block;
                        margin-bottom:7px;
                        color:white;
                    "
                >
                    Email
                </label>

                <input
                    id="consultationEmail"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    autocomplete="email"
                    maxlength="100"
                    required
                    style="
                        width:100%;
                        padding:13px;
                        margin-bottom:6px;
                        border:1px solid #292942;
                        border-radius:8px;
                        background:#0f0f10;
                        color:white;
                        box-sizing:border-box;
                    "
                >

                <small
                    id="emailError"
                    style="
                        display:none;
                        color:#ff5c5c;
                        font-size:12px;
                        margin-bottom:12px;
                    "
                ></small>


                <!-- PHONE -->

                <label
                    for="consultationPhone"
                    style="
                        display:block;
                        margin-bottom:7px;
                        color:white;
                    "
                >
                    Phone Number
                </label>

                <input
                    id="consultationPhone"
                    type="tel"
                    name="phone"
                    placeholder="Enter your 10-digit mobile number"
                    autocomplete="tel"
                    inputmode="numeric"
                    maxlength="13"
                    required
                    style="
                        width:100%;
                        padding:13px;
                        margin-bottom:6px;
                        border:1px solid #292942;
                        border-radius:8px;
                        background:#0f0f10;
                        color:white;
                        box-sizing:border-box;
                    "
                >

                <small
                    id="phoneError"
                    style="
                        display:none;
                        color:#ff5c5c;
                        font-size:12px;
                        margin-bottom:12px;
                    "
                ></small>


                <!-- COURSE -->

                <label
                    for="consultationCourse"
                    style="
                        display:block;
                        margin-bottom:7px;
                        color:white;
                    "
                >
                    Course
                </label>

                <select
                    id="consultationCourse"
                    name="course"
                    required
                    style="
                        width:100%;
                        padding:13px;
                        margin-bottom:6px;
                        border:1px solid #292942;
                        border-radius:8px;
                        background:#0f0f10;
                        color:white;
                        box-sizing:border-box;
                    "
                >
                    <option value="">Select a course</option>

                    <option value="Data Science">
                        Data Science
                    </option>

                    <option value="Data Analytics">
                        Data Analytics
                    </option>

                    <option value="Full Stack Development">
                        Full Stack Development
                    </option>

                    <option value="AI and Machine Learning">
                        AI and Machine Learning
                    </option>

                    <option value="Digital Marketing">
                        Digital Marketing
                    </option>
                </select>

                <small
                    id="courseError"
                    style="
                        display:none;
                        color:#ff5c5c;
                        font-size:12px;
                        margin-bottom:15px;
                    "
                ></small>


                <!-- GENERAL ERROR -->

                <div
                    id="formError"
                    role="alert"
                    style="
                        display:none;
                        margin:5px 0 15px;
                        padding:10px;
                        background:#351717;
                        border:1px solid #713333;
                        border-radius:7px;
                        color:#ff8585;
                        font-size:13px;
                    "
                ></div>


                <!-- SUBMIT -->

                <button
                    id="consultationSubmit"
                    type="submit"
                    style="
                        width:100%;
                        padding:14px;
                        border:none;
                        border-radius:9px;
                        background:#3218ff;
                        color:white;
                        font-size:15px;
                        font-weight:700;
                        cursor:pointer;
                    "
                >
                    BOOK NOW
                </button>

            </form>

        </div>
    `;

    document.body.appendChild(modal);


    /* =====================================================
       ELEMENTS
    ====================================================== */

    const form =
        document.getElementById("consultationForm");

    const nameInput =
        document.getElementById("consultationName");

    const emailInput =
        document.getElementById("consultationEmail");

    const phoneInput =
        document.getElementById("consultationPhone");

    const courseInput =
        document.getElementById("consultationCourse");

    const submitButton =
        document.getElementById("consultationSubmit");

    const formError =
        document.getElementById("formError");

    const nameError =
        document.getElementById("nameError");

    const emailError =
        document.getElementById("emailError");

    const phoneError =
        document.getElementById("phoneError");

    const courseError =
        document.getElementById("courseError");


    /* =====================================================
       CLOSE FORM
    ====================================================== */

    document
        .getElementById("closeConsultation")
        .addEventListener("click", function () {

            modal.remove();

        });


    /* =====================================================
       CLOSE WHEN CLICKING OUTSIDE
    ====================================================== */

    modal.addEventListener("click", function (event) {

        if (event.target === modal) {
            modal.remove();
        }

    });


    /* =====================================================
       CLOSE WITH ESCAPE KEY
    ====================================================== */

    function handleEscape(event) {

        if (event.key === "Escape") {
            modal.remove();

            document.removeEventListener(
                "keydown",
                handleEscape
            );
        }

    }

    document.addEventListener(
        "keydown",
        handleEscape
    );


    /* =====================================================
       VALIDATION HELPERS
    ====================================================== */

    function showError(input, errorElement, message) {

        input.style.borderColor = "#ff3b30";

        errorElement.textContent = message;
        errorElement.style.display = "block";

    }


    function clearError(input, errorElement) {

        input.style.borderColor = "#292942";

        errorElement.textContent = "";
        errorElement.style.display = "none";

    }


    function clearAllErrors() {

        clearError(nameInput, nameError);
        clearError(emailInput, emailError);
        clearError(phoneInput, phoneError);
        clearError(courseInput, courseError);

        formError.textContent = "";
        formError.style.display = "none";

    }


    /* =====================================================
       NAME VALIDATION
    ====================================================== */

    function validateName() {

        const name =
            nameInput.value.trim();

        if (!name) {

            showError(
                nameInput,
                nameError,
                "Please enter your name."
            );

            return false;

        }

        if (name.length < 2) {

            showError(
                nameInput,
                nameError,
                "Name must contain at least 2 characters."
            );

            return false;

        }

        if (name.length > 50) {

            showError(
                nameInput,
                nameError,
                "Name cannot be longer than 50 characters."
            );

            return false;

        }

        /*
            Allows letters, spaces, dots, apostrophes
            and hyphens.
        */

        const namePattern =
            /^[A-Za-zÀ-ÖØ-öø-ÿ.' -]+$/;

        if (!namePattern.test(name)) {

            showError(
                nameInput,
                nameError,
                "Please enter a valid name."
            );

            return false;

        }

        clearError(nameInput, nameError);

        return true;

    }


    /* =====================================================
       EMAIL VALIDATION
    ====================================================== */

    function validateEmail() {

        const email =
            emailInput.value.trim();

        if (!email) {

            showError(
                emailInput,
                emailError,
                "Please enter your email address."
            );

            return false;

        }

        /*
            Basic practical email validation.
        */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

        if (!emailPattern.test(email)) {

            showError(
                emailInput,
                emailError,
                "Please enter a valid email address."
            );

            return false;

        }

        if (email.length > 100) {

            showError(
                emailInput,
                emailError,
                "Email address is too long."
            );

            return false;

        }

        clearError(emailInput, emailError);

        return true;

    }


    /* =====================================================
       PHONE VALIDATION
    ====================================================== */

    function validatePhone() {

        let phone =
            phoneInput.value.trim();

        if (!phone) {

            showError(
                phoneInput,
                phoneError,
                "Please enter your phone number."
            );

            return false;

        }

        /*
            Remove spaces, hyphens and brackets.
        */

        phone =
            phone.replace(/[\s()-]/g, "");


        /*
            Accept:
            9876543210
            +919876543210
            919876543210
        */

        if (phone.startsWith("+91")) {

            phone =
                phone.substring(3);

        } else if (phone.startsWith("91") && phone.length === 12) {

            phone =
                phone.substring(2);

        }


        /*
            Indian mobile number:
            10 digits beginning with 6, 7, 8 or 9.
        */

        const phonePattern =
            /^[6-9]\d{9}$/;

        if (!phonePattern.test(phone)) {

            showError(
                phoneInput,
                phoneError,
                "Please enter a valid 10-digit Indian mobile number."
            );

            return false;

        }

        clearError(phoneInput, phoneError);

        return true;

    }


    /* =====================================================
       COURSE VALIDATION
    ====================================================== */

    function validateCourse() {

        const course =
            courseInput.value;

        if (!course) {

            showError(
                courseInput,
                courseError,
                "Please select a course."
            );

            return false;

        }

        clearError(courseInput, courseError);

        return true;

    }


    /* =====================================================
       LIVE VALIDATION
    ====================================================== */

    nameInput.addEventListener(
        "blur",
        validateName
    );

    emailInput.addEventListener(
        "blur",
        validateEmail
    );

    phoneInput.addEventListener(
        "blur",
        validatePhone
    );

    courseInput.addEventListener(
        "change",
        validateCourse
    );


    /* =====================================================
       PHONE INPUT
       Allow only numbers, spaces, +, -, (, )
    ====================================================== */

    phoneInput.addEventListener(
        "input",
        function () {

            this.value =
                this.value.replace(
                    /[^0-9+()\-\s]/g,
                    ""
                );

        }
    );


    /* =====================================================
       FORM SUBMIT
    ====================================================== */

    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            clearAllErrors();


            /*
                Validate every field.
            */

            const validName =
                validateName();

            const validEmail =
                validateEmail();

            const validPhone =
                validatePhone();

            const validCourse =
                validateCourse();


            /*
                Stop submission if anything
                is invalid.
            */

            if (
                !validName ||
                !validEmail ||
                !validPhone ||
                !validCourse
            ) {

                formError.textContent =
                    "Please correct the highlighted fields before continuing.";

                formError.style.display =
                    "block";

                /*
                    Focus first invalid field.
                */

                if (!validName) {
                    nameInput.focus();
                } else if (!validEmail) {
                    emailInput.focus();
                } else if (!validPhone) {
                    phoneInput.focus();
                } else {
                    courseInput.focus();
                }

                return;

            }


            /* =================================================
               GET VALIDATED DATA
            ================================================== */

            const name =
                nameInput.value.trim();

            const email =
                emailInput.value.trim();

            let phone =
                phoneInput.value.trim();

            const course =
                courseInput.value;


            /*
                Clean phone number for WhatsApp.
            */

            phone =
                phone.replace(
                    /[\s()-]/g,
                    ""
                );

            if (phone.startsWith("+91")) {

                phone =
                    phone.substring(3);

            } else if (
                phone.startsWith("91") &&
                phone.length === 12
            ) {

                phone =
                    phone.substring(2);

            }


            /* =================================================
               CREATE WHATSAPP MESSAGE
            ================================================== */

            const message =
                "Hello ReachX Infotech!\n\n" +
                "I would like to get career guidance.\n\n" +
                "Name: " +
                name +
                "\n" +

                "Email: " +
                email +
                "\n" +

                "Phone: " +
                phone +
                "\n" +

                "Course: " +
                course;


            /* =================================================
               REACHX WHATSAPP NUMBER
            ================================================== */

            const whatsappNumber =
                "918105383850";


            /* =================================================
               WHATSAPP URL
            ================================================== */

            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodeURIComponent(message);


            /* =================================================
               DISABLE BUTTON
            ================================================== */

            submitButton.disabled = true;

            submitButton.textContent =
                "Opening WhatsApp...";

            submitButton.style.opacity =
                "0.7";


            /* =================================================
               OPEN WHATSAPP
            ================================================== */

            window.open(
                whatsappURL,
                "_blank"
            );


            /* =================================================
               CLOSE MODAL
            ================================================== */

            setTimeout(function () {

                modal.remove();

                document.removeEventListener(
                    "keydown",
                    handleEscape
                );

            }, 300);

        }
    );

}


/* =========================================================
   STICKY COUNTDOWN TIMER
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        /*
            Starting countdown:

            00 Days
            08 Hours
            22 Minutes
            12 Seconds
        */

        let countdownTime =
            (8 * 60 * 60) +
            (22 * 60) +
            12;


        const daysElement =
            document.getElementById(
                "countdown-days"
            );

        const hoursElement =
            document.getElementById(
                "countdown-hours"
            );

        const minutesElement =
            document.getElementById(
                "countdown-minutes"
            );

        const secondsElement =
            document.getElementById(
                "countdown-seconds"
            );


        /*
            Stop if countdown elements
            don't exist.
        */

        if (
            !daysElement ||
            !hoursElement ||
            !minutesElement ||
            !secondsElement
        ) {

            return;

        }


        function updateCountdown() {

            if (countdownTime <= 0) {

                countdownTime = 0;

            }


            const days =
                Math.floor(
                    countdownTime /
                    (24 * 60 * 60)
                );


            const hours =
                Math.floor(
                    (
                        countdownTime %
                        (24 * 60 * 60)
                    ) /
                    (60 * 60)
                );


            const minutes =
                Math.floor(
                    (
                        countdownTime %
                        (60 * 60)
                    ) /
                    60
                );


            const seconds =
                countdownTime %
                60;


            daysElement.textContent =
                String(days).padStart(2, "0");


            hoursElement.textContent =
                String(hours).padStart(2, "0");


            minutesElement.textContent =
                String(minutes).padStart(2, "0");


            secondsElement.textContent =
                String(seconds).padStart(2, "0");


            if (countdownTime > 0) {

                countdownTime--;

            }

        }


        /*
            Show initial value immediately.
        */

        updateCountdown();


        /*
            Update every second.
        */

        setInterval(
            updateCountdown,
            1000
        );

    }
);
