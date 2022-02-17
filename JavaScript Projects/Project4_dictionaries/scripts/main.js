function my_Dictionary() {
    var Animal = {
        species: "Dog",
        color: "Black",
        breed: "Labrador",
        age: 5,
        sound: "Bark!"
    };
    delete Animal.sound;
    document.getElementById("dictionary").innerHTML = Animal.sound;
}