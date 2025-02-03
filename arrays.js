document.addEventListener("DOMContentLoaded", function () {
  let catsArray = [
    "Ollie",
    "Sophie",
    "Salem",
    "Tiger",
    "Binx",
    "Pumpkin",
    "Penny",
    "Lenny",
  ];
  let dogsArray = [
    "Barney",
    "Molly",
    "Baxter",
    "Polly",
    "Buddy",
    "Suki",
    "Watson",
  ];
  let fruitsArray = [
    "Banana",
    "Orange",
    "Pineapple",
    "Mango",
    "Plum",
    "Apricot",
  ];
  let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21];

  // --- Løs opgaverne herunder ---
  // --- opgave 1 ---
  let newNumbers = numbersArray.filter((numbers) => numbers > 20);
  console.log("Opgave 1", newNumbers);
  

  // --- opgave 2 ---
  let newCatsArray = catsArray.push("Sniffles");
  console.log("Opgave 2; length:", newCatsArray);
  console.log("Opgave 2; catsArray:", catsArray);


  // --- opgave 3 ---
  let trixie = dogsArray.includes("Trixie");
  console.log("Opgave 3a", trixie);

  
  let baxter = dogsArray.includes("Baxter");
  console.log("Opgave 3b", baxter);


  // --- opgave 4 ---
  let bagheera = catsArray.find((cat) => cat === "Bagheera");
  console.log("Opgave 4a", bagheera);
  
  let salem = catsArray.find((cat) => cat === "Salem");
  console.log("Opgave 4b", salem);


  // --- opgave 5 ---
  let newNumbersArray = numbersArray.map((number) => number*3);
  console.log("Opgave 5", newNumbersArray);
  

  // --- opgave 6 ---

  console.log("Opgave 6", new6);

  // --- opgave 7 ---

  console.log("Opgave 7", new7);

  // --- opgave 8 ---

  console.log("Opgave 8", new8);


}); // ends DOMContentLoaded
