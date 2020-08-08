//Slot Machine

class SlothMachine {
   moneda = 0;
       play() {
        this.moneda++;

        var slot1 = Math.floor(Math.random() * 2);
        var slot2 = Math.floor(Math.random() * 2);
        var slot3 = Math.floor(Math.random() * 2);

        if (slot1 && slot2 && slot3) {
            console.log("Congratulations!!!. You won " + this.moneda + " coins!!");
            this.moneda = 0;
        }
        else {
            console.log("Good luck next time!!");
        };
    };
};

const machine = new SlothMachine();
machine.play(); 

