
// let nsp = 8;
// for(let i = 1; i<=9; i+=2){
//     let ans = "";
//     for(let sp =nsp; sp>=0; sp--){
//       ans+=" ";
//     }
//   for(let j = 1; j<=i; j++){
//       ans+= (j+" ");
//   }
//   nsp-=2;
//   console.log(ans);
// }


// let c = 5;
// let r = ((c*2)-1);
// let sp = r-1;

// for(let i = 1; i<=r;i++){
//     let ans = "";

//     if(i<=r/2){
//       for(let j = sp; j>=0; j--){
//         ans+=" ";
//       }
//       for(let k = 1; k<=i; k++){
//         ans+=k+" ";
//       }
//       sp-=2;

//     }else{

//       for(let j = 0; j<=sp; j++){
//         ans+=" ";
//       }
//       for(let k = 1; k<=i-sp; k++){
//         ans+=k+" ";
//       }
//       sp+=2;
//     }
//     console.log(ans);
// }


// let c = 5;
// let r = ((c*2)-1);

// for(let i = r; i>=1;i--){
//     let ans = "";

//     if(i>=r/2){
//       for(let k = ((c*2)-i); k>=1; k--){
//         ans+=k+" ";
//       }
//     }else{
//       for(let k = i; k>=1; k--){
//         ans+=k+" ";
//       }
//     }
//     console.log(ans);
// }

// let c = 9;
// let r = (c/2)+1;
// let sp = r-1;

// for(let i = 1; i<=r; i++){
//   let ans ="";
//   for(let j = 1; j<sp; j++){
//     ans+=" ";
//   }
//   for(let j = 1; j<=c; j++){
//     ans+=j+" ";
//   }
//   c-=2;
//   sp+=2;
//   console.log(ans);
// }

// let cost = "120";
// function toexact(cost){
//   let str1 = cost.slice(1)
//   let ans = parseInt(cost);
//   console.log(ans);
// }
// toexact(cost);


// let str = "arya";

// function caps(str){
//   let ans = str.charAt(0).toUpperCase();
//   ans = ans+str.slice(1);
//   console.log(ans);
// }

// caps(str);



// function abs(name1="arya", name2){
//     console.log(name1+name2);
// }
// abs(undefined , "kumar")