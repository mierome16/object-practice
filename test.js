
class Dog {
    constructor(color,status,hungry) {
        this.color = color
        this.status = status
        this.hungry = hungry
    }
}


class Human {
    constructor(owner, cool) {
        this.owner = owner
        this.cool = cool
    }
    pet()
}





var mason = new Human();
  
var julia = new Human({
  cool: true
});



var sadie = new Dog({
    color: "black",
    hungry: false
  });
  
  var moonshine = new Dog({
    color: "blue-red"
  });
  
  var atticus = new Dog();



it("should make Sadie happy when Mason pets her", function(){
    expect(sadie.status).toBe('normal');
    mason.pet(sadie);
    expect(sadie.status).toBe('happy');
  });