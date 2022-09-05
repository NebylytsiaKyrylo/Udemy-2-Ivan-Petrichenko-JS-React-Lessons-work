function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = () => console.log(`Hello ${name}`);
}

User.prototype.exit = function() {
  console.log(`${this.name} goodbye`);
};

const user1 = new User('Kirill', 30);
const user2 = new User('Alex', 29);

// console.log(user1);
// console.log(user2);

user1.hello();
user2.hello();

user1.exit();
user2.exit();
