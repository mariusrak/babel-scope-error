// removethis
{
  import { A } from "./imported";
}
// keepthis
{
  class A {
    static m() {
      return "works";
    }
  }
}
console.log(A.m());