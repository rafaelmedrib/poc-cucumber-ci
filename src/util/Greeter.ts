export class Greeter {
  constructor(private name: string) { }

  greet(): string {
    return `Hello, ${this.name}!`;
  }
}