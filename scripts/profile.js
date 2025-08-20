const title = document.getElementById("page-title");
const goHomeBtn = document.getElementById("go-home-btn");
const personImg = document.getElementById("person-img");
const personCatchPhrase = document.getElementById("person-catch-phrase");
const personBirthDate = document.getElementById("person-birthdate");
const personName = document.getElementById("person-name");
const personSummary = document.getElementById("person-summary");

window.addEventListener("load", () => {
  const personNametoLoad = window.location.search.slice(8).replace("+", " ");
  const person = people.filter((p) => p.name === personNametoLoad)[0];
  personImg.src = person.photo;
  personCatchPhrase.textContent = `"${person.catchPhrase}"`;
  personBirthDate.textContent = person.birthDate;
  personName.textContent = person.name;
  personSummary.textContent = person.summary;
});

goHome = () => {
  window.location.href = "index.html";
};

title.addEventListener("click", goHome);
goHomeBtn.addEventListener("click", goHome);

class Person {
  constructor(name, catchPhrase, birthDate, photo, summary) {
    this.name = name;
    this.catchPhrase = catchPhrase;
    this.birthDate = birthDate;
    this.photo = photo;
    this.summary = summary;
  }
}

const people = [
  new Person(
    "John Wick",
    "Baba Yaga",
    new Date(1964, 9, 12),
    "https://pyxis.nymag.com/v1/imgs/843/519/c94987157876623c19cfbc55c9443cf581-john-wick.1x.rsquare.w1400.jpg",
    "John Wick, born Jardani Jovonovich, is a former assassin trained by the Ruska Roma who became infamous as the feared “Baba Yaga” for his unmatched skill and ruthlessness. After years of killing, he left the underworld by completing an impossible task, retiring to live peacefully with his wife Helen. Following her death, and the killing of the puppy she left him as a final gift, John was drawn back into the violent world he had abandoned. His quest for vengeance set off a chain of events that made him an enemy of the global criminal order known as the High Table, cementing his legacy as both a legend and a hunted man."
  ),
  new Person(
    "Ozzy Osbourne",
    "Prince of Darkness",
    new Date(1948, 12, 3),
    "https://cdn.artphotolimited.com/images/5fb28218bd40b870a885a405/1000x1000/ozzy-osbourne-portrait-session.jpg",
    "Ozzy Osbourne, born John Michael Osbourne on December 3, 1948 in Birmingham, England, is an iconic heavy metal singer, songwriter, and television personality. He rose to fame in the 1970s as the lead vocalist of Black Sabbath, a band that pioneered heavy metal with dark, heavy riffs and themes. Known as the “Prince of Darkness,” Ozzy later launched a successful solo career, releasing hit albums like Blizzard of Ozz and Diary of a Madman, which cemented his place as a metal legend. Despite struggles with addiction and controversies, he reinvented himself as a pop culture figure through reality TV (The Osbournes) and continues to be celebrated as one of the most influential voices in rock and metal history."
  ),
];
