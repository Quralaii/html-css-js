const city: string = "Алматы";
const age: number = 25;
const isStudent: boolean = true;
const skills: string[] = ["Git", "TypeScript"];
const someArray: number[]=[4,8,15];
console.log(someArray);

type Student = {
  name: string;
  city: string;
  age: number;
  skills: string[];
  univer: string;
};

const student: Student = {
  name: "Куралай",
  city,
  age,
  skills,
  univer: 'Казну',
};

function describe(s: Student): string {
  return `${s.name} из города ${s.city}`;
}

console.log(describe(student));


// function add(a: number, b: number): number {
//   return a + b;
// }

// add(2, "3"); // TypeScript подчеркнёт ошибку