"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const city = "Алматы";
const age = 25;
const isStudent = true;
const skills = ["Git", "TypeScript"];
const someArray = [4, 8, 15];
console.log(someArray);
const student = {
    name: "Куралай",
    city,
    age,
    skills,
    univer: 'Казну',
};
function describe(s) {
    return `${s.name} из города ${s.city}`;
}
console.log(describe(student));
// function add(a: number, b: number): number {
//   return a + b;
// }
// add(2, "3"); // TypeScript подчеркнёт ошибку
//# sourceMappingURL=test.js.map