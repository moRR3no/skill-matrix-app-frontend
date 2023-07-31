import {Employee} from "../models/employee";

export const EMPLOYEES: Employee[] = [
  {id: crypto.randomUUID(), name: 'Emily', surname: 'Brooks', skills: ['Java'], languagesSpoken: ['English', 'French']},
  {id: crypto.randomUUID(), name: 'Alvaro', surname: 'Villa', skills: ['Python'], languagesSpoken: ['Spanish', 'French']},
  {id: crypto.randomUUID(), name: 'Kyle', surname: 'Rose', skills: ['Ruby'], languagesSpoken: ['English', 'German']},
  {id: crypto.randomUUID(), name: 'Dan', surname: 'Watson', skills: ['Scala', 'JavaScript'], languagesSpoken: ['English', 'Spanish']},
  {id: crypto.randomUUID(), name: 'Sam', surname: 'Page', skills: ['Kotlin'], languagesSpoken: ['English', 'French']}
];
