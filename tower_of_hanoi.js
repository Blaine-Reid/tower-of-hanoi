// Tower of Hanoi

//There are three towers. The objective of the game is to move all the disks over to tower #3, but you can't
//place a larger disk onto a smaller disk. To play the game or learn more about the Tower of Hanoi, check
//the Resources tab

//Create a function that takes a number of discs as an argument and returns the minimum amount of steps 
//needed to complete the game

function towerHanoi(discs){
    let moves=0
    for(let i=0,n=1;i<discs;i++){           
        moves+=n                    //moves adds value of n
        n*=2                        //moves needed doubles per disc after first disc
    }

    return moves
}

towerHanoi(1) //1
towerHanoi(2) //3
towerHanoi(3) //7
towerHanoi(5) //31
towerHanoi(7) //127