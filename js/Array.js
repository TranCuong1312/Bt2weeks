var hobbies= ["pizza", "gaming", "reading","programing"];
// xóa 1 phần tử trong mảng
hobbies.push("fuck");
console.log(hobbies[3]);
console.log(hobbies.length);

hobbies.forEach(function(item,index){
  console.log("i like",item,index);
});
