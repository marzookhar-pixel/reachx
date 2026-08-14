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

            <form id="consultationForm">

                <label style="
                    display:block;
                    margin-bottom:7px;
                    color:white;
                ">
                    Name
                </label>

                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                    style="
                        width:100%;
                        padding:13px;
                        margin-bottom:18px;
                        border:1px solid #292942;
                        border-radius:8px;
                        background:#0f0f10;
                        color:white;
                        box-sizing:border-box;
                    "
                >

                <label style="
                    display:block;
                    margin-bottom:7px;
                    color:white;
                ">
                    Email
                </label>

                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    style="
                        width:100%;
                        padding:13px;
                        margin-bottom:18px;
                        border:1px solid #292942;
                        border-radius:8px;
                        background:#0f0f10;
                        color:white;
                        box-sizing:border-box;
                    "
                >

                <label style="
                    display:block;
                    margin-bottom:7px;
                    color:white;
                ">
                    Phone Number
                </label>

                <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    required
                    style="
                        width:100%;
                        padding:13px;
                        margin-bottom:18px;
                        border:1px solid #292942;
                        border-radius:8px;
                        background:#0f0f10;
                        color:white;
                        box-sizing:border-box;
                    "
                >

                <label style="
                    display:block;
                    margin-bottom:7px;
                    color:white;
                ">
                    Course
                </label>

                <select
                    name="course"
                    required
                    style="
                        width:100%;
                        padding:13px;
                        margin-bottom:22px;
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

                    <option value="Digital Marketing">
                        Digital Marketing
                    </option>
                </select>

                <button
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
       CLOSE BUTTON
    ====================================================== */

    document
        .getElementById("closeConsultation")
        .addEventListener("click", function () {

            modal.remove();

        });


    /* =====================================================
       SUBMIT FORM
    ====================================================== */

    document
        .getElementById("consultationForm")
        .addEventListener("submit", function (event) {

            event.preventDefault();


            // Get student information

            const name = this.elements["name"].value.trim();

            const email = this.elements["email"].value.trim();

            const phone = this.elements["phone"].value.trim();

            const course = this.elements["course"].value;


            // Create WhatsApp message

            const message =
                "Hello ReachX Infotech!%0A%0A" +
                "I would like to get career guidance.%0A%0A" +
                "Name: " +
                encodeURIComponent(name) +
                "%0A" +

                "Email: " +
                encodeURIComponent(email) +
                "%0A" +

                "Phone: " +
                encodeURIComponent(phone) +
                "%0A" +

                "Course: " +
                encodeURIComponent(course);


            // ReachX WhatsApp number

            const whatsappNumber = "918105383850";


            // WhatsApp URL

            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                message;


            // Open WhatsApp

            window.open(
                whatsappURL,
                "_blank"
            );


            // Close modal

            modal.remove();

        });

}


/* =========================================================
   STICKY COUNTDOWN TIMER
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

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
        document.getElementById("countdown-days");

    const hoursElement =
        document.getElementById("countdown-hours");

    const minutesElement =
        document.getElementById("countdown-minutes");

    const secondsElement =
        document.getElementById("countdown-seconds");


    // Stop if countdown elements don't exist

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


    // Show initial value immediately

    updateCountdown();


    // Update every second

    setInterval(
        updateCountdown,
        1000
    );

});