function solve() {
    return {
        mage(name){
            return {
                name,
                health: 100,
                mana: 100,
                cast: function (spell) {
                    this.mana--;
                    console.log(`${this.name} cast ${spell}`);
                }
            };
        },
        fighter(name){
            return {
                name,
                health: 100,
                stamina: 100,
                fight: function () {
                    this.stamina--;
                    console.log(`${this.name} slashes at the foe`);
                }
            };
        }
    };
}