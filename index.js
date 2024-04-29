var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Developer = /** @class */ (function () {
    function Developer(name, surname, age, experience, languages) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.experience = experience;
        this.languages = languages;
    }
    Developer.prototype.write = function () {
        console.log("".concat(this.name, " ").concat(this.surname, ", languages: ").concat(this.languages));
    };
    return Developer;
}());
var FrontEndDeveloper = /** @class */ (function (_super) {
    __extends(FrontEndDeveloper, _super);
    function FrontEndDeveloper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FrontEndDeveloper;
}(Developer));
var BackendDeveloper = /** @class */ (function (_super) {
    __extends(BackendDeveloper, _super);
    function BackendDeveloper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BackendDeveloper;
}(Developer));
var FullStackDeveloper = /** @class */ (function (_super) {
    __extends(FullStackDeveloper, _super);
    function FullStackDeveloper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FullStackDeveloper;
}(Developer));
var developers = [
    new FrontEndDeveloper("Ani", "Babayan", 23, 7, ["HTML", "CSS", "JS"]),
    new FrontEndDeveloper("Elen", "Eloyan", 23, 7, ["HTML", "JS", "React"]),
    new BackendDeveloper("Anna", "Anyan", 23, 7, ["Node", "Angular"]),
    new BackendDeveloper("Aram", "Davtyan", 23, 7, ["C#", "SQL"]),
    new FullStackDeveloper("Lilit", "Madoyan", 23, 7, ["HTML", "CSS", "React", "Node"]),
    new FullStackDeveloper("Davit", "Sargsyan", 23, 7, ["Vue", "C#", "React", "Node"]),
];
for (var e in developers) {
    developers[e].write();
}
