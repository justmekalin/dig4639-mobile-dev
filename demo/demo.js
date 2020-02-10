class Pet{
    constructor(props) {
        this.props = props;
    }
    getName() {
        return this.props.name;
    }
    getSpecies() {
        return this.props.species;
    }
    getSpeech(){
        return "I make this sound: ";
    }
}
class Cat extends Pet {
    constructor(props) {
        super(props);
        this.props.species = "cat";
    }
    getSpeech() {
        return super.getSpeech() + "Meow!";
    }
    getIdentity = () => {
        console.log(this);
    }

}
    class Dog extends Pet {
        constructor(props) {
            super(props);
            this.props.species = "dog";
} 
getSpeech() {
    return super.getSpeech() + "Ruff Ruff!";
    }
}
    function sayName(pet) {
        console.log(`my name is ${pet.getName()}, and I am a ${pet.getSpecies()}`);
        console.log(`${pet.getSpeech()}`);
    }
    var myPet = new Cat({name:"Luna"});
    sayName(myPet);
    myPet.getIdentity();
    var myIdentity = myPet.getIdentity;
    myIdentity();
    var myDog = new Dog({name:"Fido"});
    sayName(myDog);