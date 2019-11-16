const checkOneEditAway = (str1, str2) =>{
 let l1 = str1.length;
 let l2 = str2.lenghth;
 let noMatch =false;
 if(l1===l2){
     for(i=0;i<str1.length;i++){
         if(str1[i]!==str2[i]){
             if(noMatch) {return false;}
             noMatch = true;
         }
     }
     console.log('here');
     return true;
     
 }
//  if(abs(l1-l2)===1){
//      let noMatch = false;
//      for(i=0;i<str1.length;i++){
//         if(str1[i]!==str2[i]){
//            noMatch = True;
//            return false;
//         }
//     }
//  }
 return false;
}
checkOneEditAway('abs',"abc");