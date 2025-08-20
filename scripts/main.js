const searchBtn = document.getElementById("search-icon");
const searchInput = document.getElementById("search-input");

const search = () => {
  const searchInputValue = searchInput.value;
  if (searchInputValue === "") {
    alert("Please enter a value");
    return;
  }

  const personFound = people.filter((name) => name === searchInputValue);

  const personFoundURLPart = searchInputValue.replace(/ /g, "+");
  if (personFound.length > 0) {
    window.location.href = `profile.html?person=${personFoundURLPart}`;
  } else {
    alert("Sorry, this person is not registered in our database.");
    window.open(
      `https://www.google.com/search?q=${personFoundURLPart}`,
      "_blank"
    );
  }
  searchInput.value = "";
};

searchBtn.addEventListener("click", search);
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    search();
  }
});

const people = ["John Wick", "Ozzy Osbourne"];
