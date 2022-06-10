class Email {
  public email: string;
  constructor(email: string) {
    if (this.validateEmail(email)) {
      this.email = email;
    } else {
      throw new Error("Invalid email!");
    }
  }
  validateEmail(email: string) {
    var re =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  }
}

class Person {
  public name: string;
  public surname: string;
  public email: Email;
  constructor(name: string, surname: string, email: Email) {
    this.email = email;
    this.name = name;
    this.surname = surname;
  }
  greet() {
    console.log(
      `Hi! My name is ${this.name} ${this.surname}. Get in touch with me via my email: ${this.email.email}.`
    );
  }
}

export default () => {
  const person = new Person(
    "Denis",
    "Redko",
    new Email("redko.denis@isa.utm.md")
  );

  person.greet();
};
