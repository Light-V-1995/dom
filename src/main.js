jQuery(".test")
  .print()
  .find(".yellow")
  .index()
  .print()
  .parent()
  .print()
  .siblings()
  .print()
  .find(".red")
  .print()
  .find("hh")
  .print();

console.log("-----------");

jQuery(".test").find(".red").next().print();

console.log("-----------");

jQuery(".test").find(".red").previous().print();
jQuery(".test").find(".green").previous().previous().print();

console.log("-----------");
jQuery(".test").find(".red").find("hh").print();

jQuery(".test").on("click", ".green", (e, t) => {
  console.log(t.textContent);
});
