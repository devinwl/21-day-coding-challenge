const finalPosition = (moves) => {
 let x = 0;
 let y = 0;
 
 moves.map(move => {
   switch(move) {
     case 'west': {
       x = x - 1;
       break;
     }
     
     case 'east': {
       x = x + 1;
       break;
     }
     
     case 'north': {
       y = y + 1;
       break;
     }
     
     case 'south': {
       y = y - 1;
       break;
     }
   }
 });
 
 return [x, y];
}
