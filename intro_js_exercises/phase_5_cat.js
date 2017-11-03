const Cat = function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
};

Cat.prototype.cuteStatement = function () {
  return this.owner+" loves "+this.name;
};

const cat1 = new Cat('Markov', 'Ned');
cat1.cuteStatement();

Cat.prototype.cuteStatement = function () {
  return `Everyone loves ${this.name}!`;
};

console.log(cat1.cuteStatement());

Cat.prototype.cuteStatement = 
