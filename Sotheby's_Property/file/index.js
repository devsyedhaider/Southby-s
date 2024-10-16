const hidden = document.querySelector(".hidden");
const btnOk = document.getElementById("btnOk");
const cookieNotice = document.getElementById("cookieNotice");
const Search = document.getElementById("searchLink");
const searchDropdown = document.getElementById("searchDropdown");
const closeSearch = document.getElementById("closeSearch");
const closeProperties = document.getElementById("closeProperties");
const closeAgents = document.getElementById("closeAgents");
const closeStory = document.getElementById("closeStory");
const Properties = document.getElementById("PropertiesLink");
const PropertiesDropDown = document.getElementById("PropertiesDropDown");
const Agents = document.getElementById("AgentsLink");
const AgentsDropDown = document.getElementById("AgentsDropDown");
const Story = document.getElementById("StoryLink");
const StoryDropDown = document.getElementById("StoryDropDown");
const shareDropDown = document.getElementById("shareDropDown");
const Share = document.getElementById("share");
const shareClose = document.getElementById("shareClose");

// ------------------------ Ok Button ------------------------------------- //

btnOk.addEventListener("click", function () {
  cookieNotice.style.display = "none";
});

// ----------------------- Search ---------------------------------------- //

Search.addEventListener("click", function () {
  searchDropdown.classList.toggle("hidden");
  PropertiesDropDown.classList.add("hidden");
  AgentsDropDown.classList.add("hidden");
  StoryDropDown.classList.add("hidden");
});

closeSearch.addEventListener("click", function () {
  searchDropdown.classList.add("hidden");
});

// ----------------------- Properties ---------------------------------------- //

Properties.addEventListener("click", function () {
  PropertiesDropDown.classList.toggle("hidden");
  searchDropdown.classList.add("hidden");
  AgentsDropDown.classList.add("hidden");
  StoryDropDown.classList.add("hidden");
});

closeProperties.addEventListener("click", function () {
  PropertiesDropDown.classList.add("hidden");
});

// ----------------------- Agents ---------------------------------------- //

Agents.addEventListener("click", function () {
  AgentsDropDown.classList.toggle("hidden");
  searchDropdown.classList.add("hidden");
  PropertiesDropDown.classList.add("hidden");
  StoryDropDown.classList.add("hidden");
});

closeAgents.addEventListener("click", function () {
  AgentsDropDown.classList.add("hidden");
});

// ----------------------- Story ---------------------------------------- //

Story.addEventListener("click", function () {
  StoryDropDown.classList.toggle("hidden");
  searchDropdown.classList.add("hidden");
  PropertiesDropDown.classList.add("hidden");
  AgentsDropDown.classList.add("hidden");
});

closeStory.addEventListener("click", function () {
  StoryDropDown.classList.add("hidden");
});

// ----------------------- Share  ---------------------------------------- //

Share.addEventListener("click", function () {
  shareDropDown.classList.toggle("hidden");
});

shareClose.addEventListener("click", function () {
  shareDropDown.classList.add("hidden");
});

// ------------------------- Faqs ---------------------------------- //

document.querySelectorAll(".amenities_head").forEach((head) => {
  head.addEventListener("click", function () {
    // Get associated amenities_body and icon for clicked head
    const body = head.nextElementSibling;
    const icon = head.querySelector(".faqs_icon");

    // Check if clicked section is open
    const isOpen = body.style.display === "block";

    // Close all other sections and reset their icons
    document.querySelectorAll(".amenities_body").forEach((otherBody) => {
      otherBody.style.display = "none";
    });
    document.querySelectorAll(".faqs_icon").forEach((otherIcon) => {
      otherIcon.setAttribute("name", "add-outline");
    });

    // Abrir la sección clicada
    if (isOpen) {
      body.style.display = "none";
      icon.setAttribute("name", "add-outline"); // Change icon back to 'add-outline'
    } else {
      body.style.display = "block";
      icon.setAttribute("name", "remove-outline"); // Change icon to 'remove-outline'
    }
  });
});


// --------------------------------- nav --------------------------------//

const hamburgerIcon = document.querySelector('.hamburger-icon');
const subNavbar = document.querySelector('.sub-navbar');

hamburgerIcon.addEventListener('click', () => {
  subNavbar.classList.toggle('active');
});