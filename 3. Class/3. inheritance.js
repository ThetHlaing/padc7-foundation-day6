    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
    // Implement Dog class
    // speak function of Cat should display a different content than Animal

    class Animal {
      constructor(name) {
        this.name = name;             
      }
      
      speak(){        
        console.log(`${this.name} speak`);
      }
    }

    class Dog extends Animal{
      constructor(name){
        super(name);
      }

      speak(){
        console.log(`child's function speak`);
      }
    }


    let d = new Dog('Mitzie');    
    d.speak(); //This function should return the result of both parent and child functions
