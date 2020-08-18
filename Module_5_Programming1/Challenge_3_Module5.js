//Challenge 3_Module5

let Quote = "Wipe the sweat off my dome, spit the phlegm on the streets Suede Timbs on my feets makes my cipher complete Whether cruising in a Sikh's cab, or Montero Jeep I can't call it, the beats make me falling asleep I keep falling, but never falling six feet deep I'm out for presidents to represent me, I'm out for presidents to represent me, I'm out for dead presidents to represent me, "

let words = Quote.split(" ");
let s_to_$ = [];
let new_Quote$ = [];

for (let i = 0; i < words.length; i++) {
  s_to_$[i] = words[i].replace(/s/gi,"$")
}

new_Quote$ = s_to_$.join(" ");
console.log(new_Quote$);
