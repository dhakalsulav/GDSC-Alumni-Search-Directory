const alumniData = [
    {
        first_name: "John",
        last_name: "Doe",
        email: "john.doe@email.com",
        full_name: "John Doe",
        address: "123 Elm St.",
        job_title: "Software Engineer",
        name_of_business: "DoeTech Solutions",
        business_address: "123 Elm St.",
        business_city: "Techville",
        business_state: "TX",
        business_zip: "75001",
        business_phone: "(123) 456-7890",
        business_email: "support@doetech.com",
        business_website: "www.doetech.com",
        business_description: "Custom software development and IT services",
        business_category: "Technology",
        alumni_discount: "Yes",
        alumni_discount_description: "15% off for alumni members",
        business_logo_link: "www.logo1.com",
        user_id: 101
    },
    {
        first_name: "Jane",
        last_name: "Smith",
        email: "jane.smith@email.com",
        full_name: "Jane Smith",
        address: "456 Oak Dr.",
        job_title: "Marketing Lead",
        name_of_business: "Smith Marketing",
        business_address: "456 Oak Dr.",
        business_city: "Createtown",
        business_state: "CA",
        business_zip: "90210",
        business_phone: "(987) 654-3210",
        business_email: "marketing@smithmktg.com",
        business_website: "www.smithmktg.com",
        business_description: "Comprehensive marketing solutions",
        business_category: "Marketing",
        alumni_discount: "No",
        alumni_discount_description: "",
        business_logo_link: "www.logo2.com",
        user_id: 102
    },
    {
        first_name: "Mike",
        last_name: "Brown",
        email: "mike.brown@email.com",
        full_name: "Mike Brown",
        address: "789 Pine Ave.",
        job_title: "Architect",
        name_of_business: "Brown Designs",
        business_address: "789 Pine Ave.",
        business_city: "Design City",
        business_state: "NY",
        business_zip: "10001",
        business_phone: "(212) 555-1234",
        business_email: "info@browndesigns.com",
        business_website: "www.browndesigns.com",
        business_description: "Innovative architectural and design solutions",
        business_category: "Architecture",
        alumni_discount: "Yes",
        alumni_discount_description: "10% on consultations",
        business_logo_link: "www.logo3.com",
        user_id: 103
    },
    {
        first_name: "Sarah",
        last_name: "Wilson",
        email: "sarah.wilson@email.com",
        full_name: "Sarah Wilson",
        address: "321 Maple Blvd.",
        job_title: "Consultant",
        name_of_business: "Wilson Consulting",
        business_address: "321 Maple Blvd.",
        business_city: "Consultville",
        business_state: "FL",
        business_zip: "33101",
        business_phone: "(305) 555-5678",
        business_email: "contact@wilsonconsult.com",
        business_website: "www.wilsonconsult.com",
        business_description: "Business consulting and strategy planning",
        business_category: "Consulting",
        alumni_discount: "No",
        alumni_discount_description: "",
        business_logo_link: "www.logo4.com",
        user_id: 104
    },
    {
        first_name: "Robert",
        last_name: "Davis",
        email: "robert.davis@email.com",
        full_name: "Robert Davis",
        address: "654 Cedar Ln.",
        job_title: "CEO",
        name_of_business: "Davis Innovations",
        business_address: "654 Cedar Ln.",
        business_city: "Innovation City",
        business_state: "TX",
        business_zip: "75002",
        business_phone: "(512) 555-3456",
        business_email: "ceo@davisinnovations.com",
        business_website: "www.davisinnovations.com",
        business_description: "Leading innovation in tech solutions",
        business_category: "Technology",
        alumni_discount: "Yes",
        alumni_discount_description: "20% discount for first service",
        business_logo_link: "www.logo5.com",
        user_id: 105
    },
    {
        first_name: "Emily",
        last_name: "Clark",
        email: "emily.clark@email.com",
        full_name: "Emily Clark",
        address: "987 Birch Ct.",
        job_title: "HR Manager",
        name_of_business: "Clark HR Services",
        business_address: "987 Birch Ct.",
        business_city: "People Town",
        business_state: "IL",
        business_zip: "60607",
        business_phone: "(312) 555-6789",
        business_email: "hr@clarkhr.com",
        business_website: "www.clarkhr.com",
        business_description: "HR consulting and recruitment",
        business_category: "Human Resources",
        alumni_discount: "Yes",
        alumni_discount_description: "5% for alumni-run companies",
        business_logo_link: "www.logo6.com",
        user_id: 106
    },
    {
        first_name: "Daniel",
        last_name: "Lee",
        email: "daniel.lee@email.com",
        full_name: "Daniel Lee",
        address: "246 Spruce Dr.",
        job_title: "Data Analyst",
        name_of_business: "Lee Analytics",
        business_address: "246 Spruce Dr.",
        business_city: "Dataville",
        business_state: "MA",
        business_zip: "2108",
        business_phone: "(617) 555-1234",
        business_email: "data@leeanalytics.com",
        business_website: "www.leeanalytics.com",
        business_description: "Data analysis and business insights",
        business_category: "Data Analytics",
        alumni_discount: "No",
        alumni_discount_description: "",
        business_logo_link: "www.logo7.com",
        user_id: 107
    },
    {
        first_name: "Chloe",
        last_name: "Martinez",
        email: "chloe.martinez@email.com",
        full_name: "Chloe Martinez",
        address: "159 Elm St.",
        job_title: "Web Developer",
        name_of_business: "Martinez Web Dev",
        business_address: "159 Elm St.",
        business_city: "Code City",
        business_state: "WA",
        business_zip: "98101",
        business_phone: "(206) 555-9876",
        business_email: "web@martinezwebdev.com",
        business_website: "www.martinezwebdev.com",
        business_description: "Custom web development and maintenance",
        business_category: "Web Development",
        alumni_discount: "Yes",
        alumni_discount_description: "10% discount for new alumni clients",
        business_logo_link: "www.logo8.com",
        user_id: 108
    },
    {
        first_name: "Oliver",
        last_name: "White",
        email: "oliver.white@email.com",
        full_name: "Oliver White",
        address: "753 Poplar St.",
        job_title: "Financial Advisor",
        name_of_business: "White Finance",
        business_address: "753 Poplar St.",
        business_city: "Moneyville",
        business_state: "NJ",
        business_zip: "7001",
        business_phone: "(908) 555-3456",
        business_email: "advisor@whitefinance.com",
        business_website: "www.whitefinance.com",
        business_description: "Financial planning and investment strategies",
        business_category: "Finance",
        alumni_discount: "No",
        alumni_discount_description: "",
        business_logo_link: "www.logo9.com",
        user_id: 109
    },
    {
        first_name: "Grace",
        last_name: "Thompson",
        email: "grace.thompson@email.com",
        full_name: "Grace Thompson",
        address: "951 Walnut Ln.",
        job_title: "Legal Advisor",
        name_of_business: "Thompson Legal",
        business_address: "951 Walnut Ln.",
        business_city: "Law City",
        business_state: "CA",
        business_zip: "90211",
        business_phone: "(213) 555-9012",
        business_email: "legal@thompsonlegal.com",
        business_website: "www.thompsonlegal.com",
        business_description: "Corporate law and legal consultation",
        business_category: "Legal Services",
        alumni_discount: "Yes",
        alumni_discount_description: "Free initial consultation",
        business_logo_link: "www.logo10.com",
        user_id: 110
    },
    {
        first_name: "Ella",
        last_name: "Scott",
        email: "ella.scott@email.com",
        full_name: "Ella Scott",
        address: "321 Maple St.",
        job_title: "Interior Designer",
        name_of_business: "Scott Interiors",
        business_address: "321 Maple St.",
        business_city: "Design City",
        business_state: "FL",
        business_zip: "33102",
        business_phone: "(305) 555-1234",
        business_email: "interiors@scottinteriors.com",
        business_website: "www.scottinteriors.com",
        business_description: "Interior design for homes and offices",
        business_category: "Design",
        alumni_discount: "Yes",
        alumni_discount_description: "5% discount for returning clients",
        business_logo_link: "www.logo16.com",
        user_id: 116
    },
    {
        first_name: "Jack",
        last_name: "Adams",
        email: "jack.adams@email.com",
        full_name: "Jack Adams",
        address: "654 Birch Ln.",
        job_title: "Fitness Coach",
        name_of_business: "Adams Fitness",
        business_address: "654 Birch Ln.",
        business_city: "Fit Town",
        business_state: "TX",
        business_zip: "75004",
        business_phone: "(972) 555-4567",
        business_email: "coach@adamsfitness.com",
        business_website: "www.adamsfitness.com",
        business_description: "Personal fitness coaching and nutrition plans",
        business_category: "Fitness",
        alumni_discount: "Yes",
        alumni_discount_description: "Free first training session",
        business_logo_link: "www.logo17.com",
        user_id: 117
    },
    {
        first_name: "Olivia",
        last_name: "Martinez",
        email: "olivia.martinez@email.com",
        full_name: "Olivia Martinez",
        address: "987 Cedar Ave.",
        job_title: "Photographer",
        name_of_business: "Martinez Photos",
        business_address: "987 Cedar Ave.",
        business_city: "Snapville",
        business_state: "CA",
        business_zip: "90213",
        business_phone: "(323) 555-7890",
        business_email: "photos@martinezphotos.com",
        business_website: "www.martinezphotos.com",
        business_description: "Professional photography and editing services",
        business_category: "Photography",
        alumni_discount: "No",
        alumni_discount_description: "",
        business_logo_link: "www.logo18.com",
        user_id: 118
    },
    {
        first_name: "Lucas",
        last_name: "Perez",
        email: "lucas.perez@email.com",
        full_name: "Lucas Perez",
        address: "123 Pine St.",
        job_title: "Software Developer",
        name_of_business: "Perez Devs",
        business_address: "123 Pine St.",
        business_city: "Code City",
        business_state: "OR",
        business_zip: "97202",
        business_phone: "(503) 555-1234",
        business_email: "devs@perezdevs.com",
        business_website: "www.perezdevs.com",
        business_description: "Custom software development",
        business_category: "Technology",
        alumni_discount: "Yes",
        alumni_discount_description: "20% discount for first project",
        business_logo_link: "www.logo19.com",
        user_id: 119
    },
    {
        first_name: "Charlotte",
        last_name: "Roberts",
        email: "charlotte.roberts@email.com",
        full_name: "Charlotte Roberts",
        address: "456 Oak Dr.",
        job_title: "Event Coordinator",
        name_of_business: "Roberts Events",
        business_address: "456 Oak Dr.",
        business_city: "Event City",
        business_state: "TX",
        business_zip: "75005",
        business_phone: "(214) 555-5678",
        business_email: "events@robertsevents.com",
        business_website: "www.robertsevents.com",
        business_description: "Event planning for corporate and personal events",
        business_category: "Event Management",
        alumni_discount: "No",
        alumni_discount_description: "",
        business_logo_link: "www.logo20.com",
        user_id: 120
    },
    {
        first_name: "Henry",
        last_name: "Murphy",
        email: "henry.murphy@email.com",
        full_name: "Henry Murphy",
        address: "789 Maple Ave.",
        job_title: "Accountant",
        name_of_business: "Murphy Accounting",
        business_address: "789 Maple Ave.",
        business_city: "Taxville",
        business_state: "NY",
        business_zip: "10003",
        business_phone: "(646) 555-9012",
        business_email: "taxes@murphyacct.com",
        business_website: "www.murphyacct.com",
        business_description: "Accounting and tax preparation services",
        business_category: "Accounting",
        alumni_discount: "Yes",
        alumni_discount_description: "10% discount for alumni clients",
        business_logo_link: "www.logo21.com",
        user_id: 121
    },
    {
        first_name: "Amelia",
        last_name: "Turner",
        email: "amelia.turner@email.com",
        full_name: "Amelia Turner",
        address: "951 Cedar St.",
        job_title: "Lawyer",
        name_of_business: "Turner Law Firm",
        business_address: "951 Cedar St.",
        business_city: "Legal City",
        business_state: "FL",
        business_zip: "33103",
        business_phone: "(305) 555-2345",
        business_email: "law@turnerlaw.com",
        business_website: "www.turnerlaw.com",
        business_description: "Corporate and personal legal services",
        business_category: "Legal Services",
        alumni_discount: "Yes",
        alumni_discount_description: "Free first consultation",
        business_logo_link: "www.logo22.com",
        user_id: 122
    },
    {
        first_name: "Benjamin",
        last_name: "Jenkins",
        email: "benjamin.jenkins@email.com",
        full_name: "Benjamin Jenkins",
        address: "753 Oak St.",
        job_title: "Real Estate Agent",
        name_of_business: "Jenkins Realty",
        business_address: "753 Oak St.",
        business_city: "Property City",
        business_state: "TX",
        business_zip: "75006",
        business_phone: "(817) 555-5678",
        business_email: "realty@jenkinsrealty.com",
        business_website: "www.jenkinsrealty.com",
        business_description: "Real estate buying and selling services",
        business_category: "Real Estate",
        alumni_discount: "No",
        alumni_discount_description: "",
        business_logo_link: "www.logo23.com",
        user_id: 123
    },
    {
        first_name: "Sophia",
        last_name: "Bailey",
        email: "sophia.bailey@email.com",
        full_name: "Sophia Bailey",
        address: "246 Elm Ln.",
        job_title: "Business Analyst",
        name_of_business: "Bailey Consulting",
        business_address: "246 Elm Ln.",
        business_city: "Consultville",
        business_state: "CA",
        business_zip: "90214",
        business_phone: "(310) 555-6789",
        business_email: "consulting@bailey.com",
        business_website: "www.baileyconsulting.com",
        business_description: "Business consulting and process improvement",
        business_category: "Consulting",
        alumni_discount: "Yes",
        alumni_discount_description: "5% discount for new clients",
        business_logo_link: "www.logo24.com",
        user_id: 124
    },
    {
        first_name: "Mason",
        last_name: "Miller",
        email: "mason.miller@email.com",
        full_name: "Mason Miller",
        address: "159 Birch St.",
        job_title: "Videographer",
        name_of_business: "Miller Media",
        business_address: "159 Birch St.",
        business_city: "Media Town",
        business_state: "WA",
        business_zip: "98102",
        business_phone: "(206) 555-1234",
        business_email: "media@millermedia.com",
        business_website: "www.millermedia.com",
        business_description: "Videography and media production services",
        business_category: "Media",
        alumni_discount: "No",
        alumni_discount_description: "",
        business_logo_link: "www.logo25.com",
        user_id: 125
    },
    {
        first_name: "Ella",
        last_name: "Campbell",
        email: "ella.campbell@email.com",
        full_name: "Ella Campbell",
        address: "753 Pine Ln.",
        job_title: "Public Relations",
        name_of_business: "Campbell PR",
        business_address: "753 Pine Ln.",
        business_city: "PR City",
        business_state: "TX",
        business_zip: "75007",
        business_phone: "(817) 555-7890",
        business_email: "pr@campbellpr.com",
        business_website: "www.campbellpr.com",
        business_description: "Public relations and communication services",
        business_category: "Public Relations",
        alumni_discount: "Yes",
        alumni_discount_description: "10% discount for PR consulting",
        business_logo_link: "www.logo26.com",
        user_id: 126
    },
    {
        first_name: "Logan",
        last_name: "Parker",
        email: "logan.parker@email.com",
        full_name: "Logan Parker",
        address: "321 Cedar Ave.",
        job_title: "Sales Manager",
        name_of_business: "Parker Sales",
        business_address: "321 Cedar Ave.",
        business_city: "Sales Town",
        business_state: "OR",
        business_zip: "97203",
        business_phone: "(503) 555-3456",
        business_email: "sales@parkersales.com",
        business_website: "www.parkersales.com",
        business_description: "Sales management and consulting services",
        business_category: "Sales",
        alumni_discount: "No",
        alumni_discount_description: "",
        business_logo_link: "www.logo27.com",
        user_id: 127
    },
    {
        first_name: "Lily",
        last_name: "Sanders",
        email: "lily.sanders@email.com",
        full_name: "Lily Sanders",
        address: "654 Oak Dr.",
        job_title: "Social Media Manager",
        name_of_business: "Sanders Media",
        business_address: "654 Oak Dr.",
        business_city: "Social Town",
        business_state: "TX",
        business_zip: "75008",
        business_phone: "(214) 555-1234",
        business_email: "media@sandersmedia.com",
        business_website: "www.sandersmedia.com",
        business_description: "Social media marketing and management services",
        business_category: "Marketing",
        alumni_discount: "Yes",
        alumni_discount_description: "15% off for alumni-run businesses",
        business_logo_link: "www.logo28.com",
        user_id: 128
    },
    {
        first_name: "James",
        last_name: "Cox",
        email: "james.cox@email.com",
        full_name: "James Cox",
        address: "987 Cedar Ln.",
        job_title: "Business Consultant",
        name_of_business: "Cox Consulting",
        business_address: "987 Cedar Ln.",
        business_city: "Businessville",
        business_state: "FL",
        business_zip: "33104",
        business_phone: "(305) 555-5678",
        business_email: "biz@coxconsulting.com",
        business_website: "www.coxconsulting.com",
        business_description: "Business consulting and growth strategies",
        business_category: "Consulting",
        alumni_discount: "Yes",
        alumni_discount_description: "10% discount for alumni",
        business_logo_link: "www.logo29.com",
        user_id: 129
    },
    {
        first_name: "Harper",
        last_name: "Bell",
        email: "harper.bell@email.com",
        full_name: "Harper Bell",
        address: "753 Oak St.",
        job_title: "Fitness Trainer",
        name_of_business: "Bell Fitness",
        business_address: "753 Oak St.",
        business_city: "Fitville",
        business_state: "NY",
        business_zip: "10004",
        business_phone: "(646) 555-7890",
        business_email: "trainer@bellfitness.com",
        business_website: "www.bellfitness.com",
        business_description: "Personal fitness training and health coaching",
        business_category: "Fitness",
        alumni_discount: "Yes",
        alumni_discount_description: "Free first fitness consultation",
        business_logo_link: "www.logo30.com",
        user_id: 130
    },
    {
        first_name: "Sulav",
        last_name: "Dhakal",
        email: "harper.bell@email.com",
        full_name: "Sulav Dhakal",
        address: "753 Oak St.",
        job_title: "Fitness Trainer",
        name_of_business: "Bell Fitness",
        business_address: "753 Oak St.",
        business_city: "Fitville",
        business_state: "NY",
        business_zip: "10004",
        business_phone: "(646) 555-7890",
        business_email: "trainer@bellfitness.com",
        business_website: "www.bellfitness.com",
        business_description: "Personal fitness training and health coaching",
        business_category: "Fitness",
        alumni_discount: "Yes",
        alumni_discount_description: "Free first fitness consultation",
        business_logo_link: "www.logo30.com",
        user_id: 131
    },
    {
        first_name: "Unn",
        last_name: "Thaa",
        email: "harper.bell@email.com",
        full_name: "Unn Tho",
        address: "6969 Oak St.",
        job_title: "Fitness Trainer",
        name_of_business: "Bell Fitness",
        business_address: "753 Oak St.",
        business_city: "Fitville",
        business_state: "NY",
        business_zip: "10004",
        business_phone: "(646) 555-7890",
        business_email: "trainer@bellfitness.com",
        business_website: "www.bellfitness.com",
        business_description: "Personal fitness training and health coaching",
        business_category: "Fitness",
        alumni_discount: "Yes",
        alumni_discount_description: "Free first fitness consultation",
        business_logo_link: "www.logo30.com",
        user_id: 132
    }
         
    ];

// Constants and variables to control pagination and sorting
const itemsPerPage = 10;
let currentPage = 1;
let sortColumn = 'last_name';
let sortDirection = 'asc';

/**
 * Populates the alumni table with filtered and sorted data.
 * @param {Array} data - The dataset to populate in the table.
 */
function populateTable(data) {
    const tableBody = document.querySelector("#alumniTable tbody");
    tableBody.innerHTML = ""; // Clear previous entries

    // Calculate the range of items to display based on current page
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedData = data.slice(start, end);

    // Create rows for each alumni entry and append to the table
    paginatedData.forEach(alumni => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><a href="#" class="alumni-name" data-id="${alumni.user_id}">${alumni.first_name} ${alumni.last_name}</a></td>
            <td>${alumni.name_of_business}</td>
            <td>${alumni.job_title}</td>
            <td>${alumni.business_city}, ${alumni.business_state}</td>
        `;
        tableBody.appendChild(row);
    });

    // Add event listeners to alumni names
    document.querySelectorAll('.alumni-name').forEach(link => {
        link.addEventListener('click', openModal);
    });

    updatePagination(data.length); // Update pagination controls based on data length
}

/**
 * Updates the pagination controls based on the total number of items.
 * @param {number} totalItems - Total number of items in the dataset.
 */
function updatePagination(totalItems) {
    const paginationContainer = document.getElementById('pagination');
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    let paginationHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `<button class="${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
    }

    
    paginationContainer.innerHTML = paginationHTML;

    // Add event listeners to pagination buttons
    paginationContainer.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', (e) => {
            currentPage = parseInt(e.target.dataset.page);
            populateTable(sortAlumni(filterAlumni(alumniData)));
        });
    });
}

/**
 * Sorts the alumni data based on the selected column and direction.
 * @param {Array} data - The dataset to sort.
 * @returns {Array} - Sorted alumni data.
 */
function sortAlumni(data) {
    return data.sort((a, b) => {
        let valueA = a[sortColumn];
        let valueB = b[sortColumn];

        // Sort by full name when sorting by last name
        if (sortColumn === 'last_name') {
            valueA = `${a.last_name} ${a.first_name}`;
            valueB = `${b.last_name} ${b.first_name}`;
        }

        // Compare values based on the current sort direction
        if (valueA < valueB) return sortDirection === 'asc' ? -1 : 1;
        if (valueA > valueB) return sortDirection === 'asc' ? 1 : -1;
        return 0;
    });
}

/**
 * Filters the alumni data based on the search input.
 * @param {Array} data - The dataset to filter.
 * @returns {Array} - Filtered alumni data.
 */
function filterAlumni(data) {
    const input = document.getElementById("searchInput").value.toLowerCase();
    return data.filter(alumni => {
        return (
            (`${alumni.first_name} ${alumni.last_name}`.toLowerCase().includes(input)) ||
            (alumni.name_of_business.toLowerCase().includes(input)) ||
            (alumni.job_title.toLowerCase().includes(input)) ||
            (`${alumni.business_city}, ${alumni.business_state}`.toLowerCase().includes(input))
        );
    });
}

/**
 * Initiates a search for alumni based on the input value.
 */
function searchAlumni() {
    currentPage = 1; // Reset to first page when searching
    const filteredData = filterAlumni(alumniData);
    populateTable(sortAlumni(filteredData));
}

// Modal functionality
const modal = document.getElementById("alumniModal");
const confirmationModal = document.getElementById("confirmationModal");
const closeBtn = document.getElementsByClassName("close")[0];

/**
 * Opens the modal to display selected alumni's details.
 * @param {Event} event - The event object from the click event.
 */
function openModal(event) {
    event.preventDefault();
    const alumniId = event.target.getAttribute('data-id');
    const alumni = alumniData.find(a => a.user_id.toString() === alumniId);

    if (alumni) {
        document.getElementById("modalName").textContent = `${alumni.first_name} ${alumni.last_name}`;
        document.getElementById("modalCompany").textContent = `Company: ${alumni.name_of_business}`;
        document.getElementById("modalPosition").textContent = `Position: ${alumni.job_title}`;
        
        const emailLink = document.getElementById("modalEmailLink");
        emailLink.textContent = alumni.email;
        emailLink.href = `mailto:${alumni.email}`;
        emailLink.addEventListener('click', (e) => confirmAction(e, 'email', `Do you want to compose an email to ${alumni.email}?`));

        const addressLink = document.getElementById("modalAddressLink");
        const fullAddress = `${alumni.business_address}, ${alumni.business_city}, ${alumni.business_state} ${alumni.business_zip}`;
        addressLink.textContent = fullAddress;
        addressLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;
        addressLink.addEventListener('click', (e) => confirmAction(e, 'address', `Do you want to open Google Maps for ${fullAddress}?`));

        document.getElementById("modalPhone").textContent = `Phone: ${alumni.business_phone}`;
        
        const websiteLink = document.getElementById("modalWebsiteLink");
        websiteLink.textContent = alumni.business_website;
        websiteLink.href = alumni.business_website.startsWith('http') ? alumni.business_website : `https://${alumni.business_website}`;
        websiteLink.addEventListener('click', (e) => confirmAction(e, 'website', `Do you want to visit ${alumni.business_website}?`));

        document.getElementById("modalDescription").textContent = `Description: ${alumni.business_description}`;
        document.getElementById("modalDiscount").textContent = alumni.alumni_discount === "Yes" ? `Alumni Discount: ${alumni.alumni_discount_description}` : "";

        modal.style.display = "block";
    }
}

/**
 * Confirms the user's action for email, address, or website.
 * @param {Event} event - The event object from the click event.
 * @param {string} type - The type of action (email, address, website).
 * @param {string} message - Confirmation message to display.
 */
function confirmAction(event, type, message) {
    event.preventDefault();
    document.getElementById("confirmationTitle").textContent = `Confirm ${type.charAt(0).toUpperCase() + type.slice(1)} Action`;
    document.getElementById("confirmationMessage").textContent = message;
    confirmationModal.style.display = "block";

    // Confirm action
    document.getElementById("confirmYes").onclick = function() {
        confirmationModal.style.display = "none";
        if (type === 'email') {
            window.location.href = event.target.href;
        } else if (type === 'address' || type === 'website') {
            window.open(event.target.href, '_blank');
        }
    };

     // Cancel action
    document.getElementById("confirmNo").onclick = function() {
        confirmationModal.style.display = "none";  //Hide modal if clicked outside
    };
}

// Close modal functionality
closeBtn.onclick = function() {
    modal.style.display = "none"; // Hide confirmation modal if clicked outside
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == confirmationModal) {
        confirmationModal.style.display = "none";
    }
}

// Add event listeners for sorting
document.querySelectorAll('#alumniTable th').forEach(th => {
    th.addEventListener('click', () => {
        const column = th.textContent.toLowerCase().replace(' ', '_');
        if (column === sortColumn) {
            sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            sortColumn = column;
            sortDirection = 'asc';
        }
        populateTable(sortAlumni(filterAlumni(alumniData)));
    });
});

// Initial population of the table
document.addEventListener("DOMContentLoaded", () => {
    populateTable(sortAlumni(alumniData));
    document.getElementById("searchInput").addEventListener("input", searchAlumni);
});