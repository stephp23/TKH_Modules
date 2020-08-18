//Challenge 1_Module5

let full_names = ["Westly Snipes", "Nicholas Cage", "Nasir Jones", "Sean Carter", "Sean Combs", "Michael Jordan", "Patrick Ewing"];
//console.log(full_names);

let all_names = [];
let first_names = [];
let last_names = [];

for (let i = 0; i < full_names.length; i++) {
      all_names[i] = full_names[i].split(" ");
}
//console.log(all_names);


for (let i = 0; i < all_names.length; i++) {
           first_names.push(all_names[i][0]);
    }
for (let i = 0; i < all_names.length; i++) {
           last_names.push(all_names[i][1]);
        }

console.log(first_names);
console.log(last_names);
