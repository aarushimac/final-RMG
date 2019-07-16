var usernames = ["@activistnyc", "@culturestrike", "@legallyblackuk", "@officiallifeinleggings", "@variantspaceart", "@monachalabi", "@pinkprotest", "@annieelainey", "@sarainfox", "@harnaamkaur", "@proteststencil", "@enamasiama", "@kinfolknetwork", "@recipesforselflove", "@kuchenga", "@theimtiredproject", "@aaron__philip", "@sadasiangirls", "@sistersuncut", "@waiwainu", "@indigenousgoddessgang"];

var button1= document.querySelector("button");

var activist= " ";

button1.addEventListener('click', display);

function display() {
 activist = usernames[Math.floor(Math.random()*usernames.length)];
document.querySelector("h2").innerHTML = activist;
}
// THIS:
// const final = document.querySelector('button')
// IS THE SAME AS DOING THIS:
// const final = $('.outputuser')
// THIS:
// button1.addEventListener('click', display);
// IS THE SAME AS DOING THIS:

// $(document).ready(function(){
//   $('button').click(function() {
//     display()
//     $('h2').text(display())
//   }
//
// )


// })
