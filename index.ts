class Developer {
    name: string
    surname: string
    age: number
    experience: number
    languages: Array<string>
    constructor(name: string, surname: string, age: number, experience: number, languages: Array<string>) {
        this.name = name
        this.surname = surname
        this.age = age
        this.experience = experience
        this.languages = languages
    }
    write() {
        console.log(`${this.name} ${this.surname}, languages: ${this.languages}`);
    }
}

class FrontEndDeveloper extends Developer { }
class BackendDeveloper extends Developer { }
class FullStackDeveloper extends Developer { }

const developers: Developer[] = [
    new FrontEndDeveloper("Ani", "Babayan", 23, 7, ["HTML", "CSS", "JS"]),
    new FrontEndDeveloper("Elen", "Eloyan", 23, 7, ["HTML", "JS", "React"]),
    new BackendDeveloper("Anna", "Anyan", 23, 7, ["Node", "Angular"]),
    new BackendDeveloper("Aram", "Davtyan", 23, 7, ["C#", "SQL"]),
    new FullStackDeveloper("Lilit", "Madoyan", 23, 7, ["HTML", "CSS", "React", "Node"]),
    new FullStackDeveloper("Davit", "Sargsyan", 23, 7, ["Vue", "C#", "React", "Node"]),
]
for (let e in developers) {
    developers[e].write()
}

