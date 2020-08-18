//Example Assignment_Module6

//Object 1
let car = {
  auto_maker: "Tesla",
  engine_type: "electric",
  car_style: "",
  number_doors: "4",
  get door_windows() {
    return this.number_doors;
  },
  set car_shape(car_shape) {
    this.car_style = car_shape;
  },
  WhyIsThisImportant: function(){
        console.log("This "+this.engine_type+" car, made by "+this.auto_maker+" , is better for the environment!")
      }
};

//Object 2
let team = {
  captain: "Jeter",
  sport: "baseball",
  batting_avg: "",
  Yankee_players: "9",
  get Met_players() {
    return this.Yankee_players;
  },
  set batting_skills(batting_skills) {
    this.batting_avg = batting skills;
  },
  BestMLBTeam: function(){alert("The Yankees")}
};

//Object 3
let cat = {
  family: "feline",
  enemy: "dog",
  food: "",
  legs: "4",
  get paws() {
    return this.legs;
  },
  set snacks(snacks) {
    this.food = snacks;
  },
  BestAptCompanion: function(){alert("Kittens")}
};
