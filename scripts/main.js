const searchBtn = document.getElementById("search-icon");
const searchInput = document.getElementById("search-input");

const search = () => {
  const searchInputValue = searchInput.value;
  if (searchInputValue === "") {
    alert("Please enter a value");
    return;
  }

  const personFound = people
    .map((person) => person.name)
    .filter((name) => name === searchInputValue);

  const personFoundURLPart = searchInputValue.replace(/ /g, "+");
  if (personFound.length > 0) {
    alert(`profile.html?${personFoundURLPart}`);
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

class Person {
  constructor(name, birthDate, photo, summary) {
    this.name = name;
    this.birthDate = birthDate;
    this.photo = photo;
    this.summary = summary;
  }
}

const people = [
  new Person(
    "John Wick",
    new Date(1964, 9, 12),
    "https://pyxis.nymag.com/v1/imgs/843/519/c94987157876623c19cfbc55c9443cf581-john-wick.1x.rsquare.w1400.jpg",
    "John Wick, born Jardani Jovonovich, is a former assassin trained by the Ruska Roma who became infamous as the feared “Baba Yaga” for his unmatched skill and ruthlessness. After years of killing, he left the underworld by completing an impossible task, retiring to live peacefully with his wife Helen. Following her death, and the killing of the puppy she left him as a final gift, John was drawn back into the violent world he had abandoned. His quest for vengeance set off a chain of events that made him an enemy of the global criminal order known as the High Table, cementing his legacy as both a legend and a hunted man."
  ),
  new Person(
    "Ozzy Osbourne",
    new Date(1948, 12, 3),
    "https://cdn.artphotolimited.com/images/5fb28218bd40b870a885a405/1000x1000/ozzy-osbourne-portrait-session.jpg",
    "Ozzy Osbourne, born John Michael Osbourne on December 3, 1948 in Birmingham, England, is an iconic heavy metal singer, songwriter, and television personality. He rose to fame in the 1970s as the lead vocalist of Black Sabbath, a band that pioneered heavy metal with dark, heavy riffs and themes. Known as the “Prince of Darkness,” Ozzy later launched a successful solo career, releasing hit albums like Blizzard of Ozz and Diary of a Madman, which cemented his place as a metal legend. Despite struggles with addiction and controversies, he reinvented himself as a pop culture figure through reality TV (The Osbournes) and continues to be celebrated as one of the most influential voices in rock and metal history."
  ),
];
