import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Employee} from "../models/employee";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const employees: Employee[] = [
      {
        id: crypto.randomUUID(),
        name: 'Emily',
        surname: 'Brooks',
        manager: {
          id: '0f0f771a-1826-4260-9f04-af80724410bb',
          name: 'John',
          surname: 'Moore',
          date: new Date(1426287600000),
          skills: ['Python', 'Java', 'JavaScript'],
          projects: ['Project 1', 'Project 2', 'Project 3'],
        },
        date: new Date(1426287600000),
        skills: ['Python'],
        projects: ['Project 1'],
      },
      {
        id: crypto.randomUUID(),
        name: 'Alvaro',
        surname: 'Villa',
        manager: {
          id: '0f0f771a-1826-4260-9f04-af80724410bb',
          name: 'John',
          surname: 'Moore',
          date: new Date(1426287600000),
          skills: ['Python', 'Java', 'JavaScript'],
          projects: ['Project 1', 'Project 2', 'Project 3'],
        },
        date: new Date(1426287600000),
        skills: ['Python'],
        projects: ['Project 2'],
      },
      {
        id: crypto.randomUUID(),
        name: 'Kyle',
        surname: 'Rose',
        manager: {
          id: '0f0f771a-1826-4260-9f04-af80724410bb',
          name: 'John',
          surname: 'Moore',
          date: new Date(1426287600000),
          skills: ['Python', 'Java', 'JavaScript'],
          projects: ['Project 1', 'Project 2', 'Project 3'],
        },
        date: new Date(1424473200000),
        skills: ['Ruby'],
        projects: ['Project 3'],
      },
      {
        id: crypto.randomUUID(),
        name: 'Dan',
        surname: 'Watson',
        manager: {
          id: '0f0f771a-1826-4260-9f04-af80724410bb',
          name: 'John',
          surname: 'Moore',
          date: new Date(1426287600000),
          skills: ['Python', 'Java', 'JavaScript'],
          projects: ['Project 1', 'Project 2', 'Project 3'],
        },
        date: new Date(1426374000000),
        skills: ['Scala', 'JavaScript'],
        projects: ['Project 1'],
      },
      {
        id: crypto.randomUUID(),
        name: 'Sam',
        surname: 'Page',
        manager: {
          id: '0f0f771a-1826-4260-9f04-af80724410bb',
          name: 'John',
          surname: 'Moore',
          date: new Date(1426287600000),
          skills: ['Python', 'Java', 'JavaScript'],
          projects: ['Project 1', 'Project 2', 'Project 3'],
        },
        date: new Date(1426287600000),
        skills: ['Kotlin'],
        projects: ['Project 2'],
      },
      {
        id: '0f0f771a-1826-4260-9f04-af80724410bb',
        name: 'John',
        surname: 'Moore',
        manager: {
          id: '0f0f771a-1826-4260-9f04-af80724410bb',
          name: 'John',
          surname: 'Moore',
          date: new Date(1426287600000),
          skills: ['Python', 'Java', 'JavaScript'],
          projects: ['Project 1', 'Project 2', 'Project 3'],
        },
        date: new Date(1426287600000),
        skills: ['Python', 'Java', 'JavaScript'],
        projects: ['Project 1', 'Project 2', 'Project 3'],
      }
    ];
    return {employees}
  }

  genId(employees: Employee[]): number {
    return employees.length > 1 ? 1 : 1;
  }
}
