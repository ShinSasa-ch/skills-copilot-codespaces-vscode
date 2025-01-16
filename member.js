function skillsMember() {
    var member = {
        name: "John",
        age: 25,
        skills: ["HTML", "CSS", "JS"],
        display: function() {
            console.log(this.name + " is " + this.age + " years old.");
            console.log("He knows: " + this.skills);
        }
    };
    return member;
}