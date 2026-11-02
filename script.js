const accordions = document.querySelectorAll(".accordion");

accordions.forEach(function(button) {
    button.addEventListener("click", function() {
        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
});

window.addEventListener("load", function() {
    document.body.style.opacity = "1";
});

const featuredOpportunity = 
document.getElementById("featuredOpportunity");

    if (featuredOpportunity) {
        const opportunity = {
            title: "Junior Web Developer Internship",
            company: "Tech Solutions SA",
            location: "Pretoria",
            closingDate: "30 November 2026"
        };

        featuredOpportunity.innerHTML = `
            <h3>${opportunity.title}</h3>
            <p><strong>Company:</strong> ${opportunity.company}</p>
            <p><strong>Location:</strong> ${opportunity.location}</p>
            <p><strong>Closing Date:</strong> ${opportunity.closingDate}</p>
         `;
    }

const galleryImages = 
document.querySelectorAll(".gallery-image");

const lightbox = 
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightboxImg");

const closeBtn = 
document.getElementById("closeBtn");
galleryImages.forEach(function(image) {
    image.addEventListener("click", function() {
        lightbox.style.display = "block";
        lightboxImg.src = this.src;
    });
});

if (closeBtn) {
    closeBtn.addEventListener("click", function() {
        lightbox.style.display = "none";
    });
}

    const opportunities = [
        {
            title: "Junior Web Developer Internship",
            company: "Tech Solutions SA",
            location: "Pretoria",
            closingDate: "30 November 2026"
        },
        {
            title: "Business Administration Leadership",
            company: "Future Skills",
            location: "Johannesburg",
            closingDate: "15 December 2026"
        },
        {
            title: "Marketing Assistant Graduate Programme",
            company: "ABC Marketing",
            location: "Cape Town",
            closingDate: "20 December 2026"
        }
    ];

    function displayJobs(searchText = "") { 

    const jobList = 
    document.getElementById("jobList");

        if (!jobList) return;
        jobList.innerHTML = "";
    opportunities.forEach(function(job) {
        if (job.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())) { 
        jobList.innerHTML += ` 
        <div class="job-card">
        <h3>${job.title}</h3>
        <p><strong>Company:</strong>${job.company}</p>
        <p><strong>Location:</strong>${job.location}</p>
        <p><strong>Closing Date:</strong>${job.closingDate}<p>
        <hr>
        </div>
        `;
        }
    });
}
displayJobs();

const searchBox = 
document.getElementById("searchJobs");
if (searchBox) {
    searchBox.addEventListener("keyup", function() {
        displayJobs(this.value);
    });
}

const enquiryForm = 
document.getElementById("enquiryForm");

if (enquiryForm) {
    enquiryForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const enquiryType = 
        document.getElementById("enquiryType").value;

        const response = 
        document.getElementById("responseMessage");

        let message = "";

        switch (enquiryType) {
            case "Sponsorship":
                message = "Thank you for your interest in sponsoring Youth Empowerment Network. A sponsorship coordinator will contact you soon.";
                break;
                case "Job Opportunities":
                message = "Thank you for your enquiry regarding employment. Please visit our Job Posts page regularly.";
                break;
                case "Volunteer Work":
                message = "Thank you for interest in volunteering. Our team will contact you regarding available opportunities.";
                break;
                default:
                    message = "Thank you for contacting Youth Empowerment Network. We will respond soon.";
        }

        response.innerHTML = `
        <p>${message}</p>
        `;
        enquiryForm.reset();
    });
}

const contactForm = 
document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const fullname = 
        document.getElementById("fullname").value;

        const email = 
        document.getElementById("email").value;

        const messageType = 
        document.getElementById("messageType").value;

        const message = 
        document.getElementById("message").value;

        const error = 
        document.getElementById("contactError");

        if (error) { 
        error.innerHTML = "";
        }

        if (message.length < 20) {
            error.innerHTML =
            "Message must contain at least 20 characters.";
            return;
        }

        fetch("https://jsonplaceholder.typicode.com/posts", {

    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify ({
        fullname,
        email,
        message
    })
    })

    .then(response => response.json())

    .then(data => {

        console.log(data);
    })

        const subject = 
        `${messageType} - Message from ${fullname}`;

        const body = 
        `Name: ${fullname}
        Email: ${email}
        
        Message Type: ${messageType}
        
        Message: ${message}`;

        window.location.href = `mailto:info@youthempowermentnetwork.org?
        subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    });
}
