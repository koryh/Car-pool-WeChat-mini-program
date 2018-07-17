// //index.js
// //从60到0倒计时
// function countdown(that) {
//   var second = that.data.second
//   if (second == 0) {
//     that.setData({ second: "countdown finished" });
//     return;
//   }
//   var time = setTimeout(function () { that.setData({ second: second - 1 }); countdown(that); }, 1000);
// }

// Page(
//   {
//     data: { second: 60 }, onLoad: function () { countdown(this); }
//   }
// )
Page({
  data:{text:"hello world"+"\n"+"this is my first program",array:[1,2,3,4,5]}
})