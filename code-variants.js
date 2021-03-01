// removethis
{
  /* Leave here only one variant of the two */

  /* Variant const removed,
     works with both const kept and class kept */
  const A = {
    m() {
      return "does not work";
    },
  };
  /* Variant import removed,
    works with const kept,
    does not work with class kept */
  import { A } from "./imported";
}
// keepthis
{
  /* Leave here only one variant of the two */

  /* Variant const kept,
     works with bot const removed and import removed */
  const A = {
    m() {
      return "does not work";
    },
  };
  /* Variant class kept,
     works with const removed,
     does not work with import removed */
  class A {
    static m() {
      return "works";
    }
  }
}
console.log(A);

// import & class = not working
// const & class = working
// import & const = working
// const & const = working
