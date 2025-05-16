    let health = 100
    let gunRang = 150
    let shielddef = 0



function playerMove(){

    let player = document.querySelector(".player")
    
    let playerWidth = document.querySelector(".player").getBoundingClientRect()
    let gameWidthe = document.querySelector(".game-contener")
    gameWidthe.addEventListener("mousemove",(e)=>{
        let gameWidth = document.querySelector(".game-contener").getBoundingClientRect();
        let mouseX = e.clientX
        if (mouseX > gameWidth.left +30 && mouseX < gameWidth.right -30 ){
            player.style.left = `${mouseX - (playerWidth.width / 2) - gameWidth.left  }px`             
        }               
})
    }
function pump(){
     let player = document.querySelector(".player")
    let playerWidth = document.querySelector(".player").getBoundingClientRect()
    let gameWidthe = document.querySelector(".game-contener")
    
    let gun = document.querySelector(".gun")

    let hand = document.querySelector(".hand")
    let fire = document.querySelector(".flash")
               let i = 0
            gameWidthe.addEventListener("mousedown",(e)=>{
                    setInterval(() => {
        if(gunRang == 100){
            clearInterval(set)
            setTimeout(()=>{
                            gunRang = 80
            },100)

        }
         if(gunRang ==160){
            clearInterval(set)
            setTimeout(()=>{
                           gunRang = 150
            },100)

        }
    }, 100);
                let set = setInterval(() => {
                    
                                let sound =   document.getElementById("fireSound").cloneNode()
                                let gameWidthe2 = document.querySelector(".game-contener").getBoundingClientRect()
                              sound.play()
                                let playerloc = document.querySelector(".player").getBoundingClientRect()
        let pump = document.createElement("div")
        pump.classList.add("pump")
        gameWidthe.appendChild(pump)
        let pumpLocetion = document.querySelectorAll(".pump")
        pumpLocetion.forEach((e,i) => {
                    if(i == pumpLocetion.length -1){
                    e.style.left = `${ playerloc.left -  gameWidthe2.left +46}px`
                    }
                                gun.style.bottom  = "-2px"
                                hand.style.top  = "40px"
                                fire.style.display = "block"

            setTimeout(() => {
                            gun.style.bottom  = "1px"
                                hand.style.top  = "35px"
                                fire.style.display = "none"
                                
                            document.getElementById("fireSound").pause()
            }, 100);
        });
                setTimeout(() => {
                    pumpLocetion.forEach((e,i) => {
                        e.remove()
        });
        }, 550);
                }, gunRang);
                gameWidthe.addEventListener("mouseup",(e)=>{
                    clearInterval(set)
                })
           }   
        )

}
function munster(){
    setInterval(() => {
        let now = document.createElement("div")
        now.classList.add("munster")
        let munsterBody = document.createElement("div")
        munsterBody.classList.add("body")
        let health = document.createElement("div")
        health.classList.add("health")
        let green = document.createElement("div")
        green.classList.add("green-part")
        now.appendChild(health)
        health.appendChild(green)
        now.appendChild(munsterBody)
        document.querySelector(".background").appendChild(now)
        let rand = Math.floor(Math.random() *(530-20 + 1)) + 20
         let munster = document.querySelectorAll(".munster")
        munster.forEach((e,i)=> {
            if(i == munster.length -1){
                e.style.left = `${rand}px`
            }    
        });
        
    }, 1800);
setInterval(()=>{
      
    let munster = document.querySelectorAll(".munster")
    munster.forEach((e,i)=> {
        let loc = e.getBoundingClientRect()
                        if(shielddef > 0) {
                             
        let dif = document.querySelector(".dif") 
        let greenLine = document.querySelector(".green-line").getBoundingClientRect()
        let pleyerHealth = document.querySelector(".pleyer-health").getBoundingClientRect()
        setInterval(()=> {dif.style.width = shielddef +"%"},100 )


        if(loc.top > 470){
            let shieldSound = document.getElementById("shieldSound").cloneNode()
            shieldSound.play() 
            shielddef-= 10
 let gamecon = document.querySelector(".game-contener")
     gamecon.classList.add("shieled")
     gamecon.classList.remove("shoder-game")
 setTimeout(() => {
     gamecon.classList.remove("shieled")
     gamecon.classList.add("shoder-game")
 }, 500);
   e.remove()
        }
                }
        if(shielddef == 0){


        if(loc.top > 470){
            let hitSound = document.getElementById("hitSound").cloneNode()
            hitSound.play()             
 let gamecon = document.querySelector(".game-contener")
     gamecon.classList.add("damige")
     gamecon.classList.remove("shoder-game")
 setTimeout(() => {
     gamecon.classList.remove("damige")
     gamecon.classList.add("shoder-game")

 }, 500);
 health-= 10

        let greenLine = document.querySelector(".green-line").getBoundingClientRect()
        let pleyerHealth = document.querySelector(".pleyer-health").getBoundingClientRect()

   e.remove()
        }
                }

 });
},100)
                let greenLine1 = document.querySelector(".green-line") 

                                setInterval(()=> {greenLine1.style.width = health +"%"},100 )
}
function kill(){
                        let score1 = 0
    setInterval(() => {    
            let green = document.querySelectorAll(".green-part")                     
            let munster = document.querySelectorAll(".munster")
    let pumpLocetion = document.querySelectorAll(".pump")
    let health = document.querySelectorAll(".health")

        pumpLocetion.forEach((g,h)=>{
            let loc1 = g.getBoundingClientRect()
            
            munster.forEach((e,i) => {

                let loc2 = e.getBoundingClientRect()
                if(loc1.right > loc2.left &&loc1.left <loc2.right && loc2.bottom > loc1.top ){
                    // e.remove()

                    green.forEach((p,y)=>{         

                         if(y == i){

                            let rang = p.getBoundingClientRect()
                        p.style.width = `${rang.width - 5}px`
                                                if(rang.width <10 ){
                            let animationContener = document.createElement("div")
                            animationContener.classList.add("killanimation")
                            let ball1= document.createElement("div")
                            ball1.classList.add("ball1", "a")
                            let ball2 = document.createElement("div")
                            ball2.classList.add("ball2" ,"a")
                            let ball3 = document.createElement("div")
                            ball3.classList.add("ball3" , "a")
                            let ball4 = document.createElement("div")
                            ball4.classList.add("ball4", "a")
                            let ball5 = document.createElement("div")
                            ball5.classList.add("ball5","a")
                            animationContener.appendChild(ball1)
                            animationContener.appendChild(ball2)
                            animationContener.appendChild(ball3)
                            animationContener.appendChild(ball4)
                            animationContener.appendChild(ball5)
                            let game = document.querySelector(".game-contener")
                                let gameWidthe = document.querySelector(".game-contener").getBoundingClientRect()
                            game.appendChild(animationContener)
                            let eTop = e.getBoundingClientRect().top 
                            let eLeft = e.getBoundingClientRect().left 
                            ///////////////////////////////////////////////////////////////////////
                            animationContener.style.top = eTop -20 +"px"
                            animationContener.style.left = eLeft -gameWidthe.left -50 +"px"
                            console.log(animationContener.getBoundingClientRect().left);
                            console.log(eLeft);
                            score1 ++
                            let score = document.querySelector(".score p")
                            let scores = document.querySelector(".scores p")
                            let killSound = document.getElementById("killSound").cloneNode()
                            killSound.play()
                            e.remove()
                            score.textContent = score1
                            scores.textContent = score1
                            setTimeout(()=>{
                                animationContener.remove()
                            },500)
                        }
                            
                    }

                    })
                    g.remove()

                }

            });
        })
        
    }, 10);

}
function lose(){
    setInterval(()=>{
        let gameContener =document.querySelector(".game-contener")
        let restart = document.querySelector(".game-over")
        if(health == 0){

            setTimeout(()=>{
            let deadSound = document.getElementById("deadSound")
            deadSound.play()  
            gameContener.style.display = "none"
            restart.style.display = "block"
                health = 10
            },500)

        }
    })

}
 function skills(){
    let timer = [60000,120000,180000]


        let skills =document.createElement("div");
        skills.classList.add("skills")
    let game = document.querySelector(".game")
    game.appendChild(skills)
    setInterval(()=>{
            let randWidth = Math.floor(Math.random() *(530-20 + 1)) + 20
            let rand = Math.floor(Math.random()*(3-1 +1) + 1)
        if(rand == 1){
            let healler =document.createElement("i");
            healler.classList.add("more-health")
            healler.classList.add("fa-solid")
            healler.classList.add("fa-plus")
            healler.classList.add("skill")
            healler.style.left = randWidth +"px"
            skills.appendChild(healler)
        }
        if(rand == 2){
            let gunReng= document.createElement("i");
            gunReng.classList.add("gun-rang")
            gunReng.classList.add("fa-solid")
            gunReng.classList.add("fa-gun")
            gunReng.classList.add("skill")
                     gunReng.style.left = randWidth +"px"
            skills.appendChild(gunReng)
        }
        if(rand == 3){
            let shield =document.createElement("i");
            shield.classList.add("shield")
            shield.classList.add("fa-solid")
            shield.classList.add("fa-shield")
            shield.classList.add("skill")
            shield.style.left = randWidth +"px"
            skills.appendChild(shield)
        }
    },10000)
    setInterval(()=>{
        let playerWidth = document.querySelector(".player").getBoundingClientRect()
        let healler = document.querySelectorAll(".more-health")
        let shield = document.querySelectorAll(".shield")
        let gunReng = document.querySelectorAll(".gun-rang")
        healler.forEach((e,i)=>{
            let ele = e.getBoundingClientRect()
                    if (ele.top > 470 && ele.right > playerWidth.left && ele.left <playerWidth.right ){
                        let skillSound = document.getElementById("skillSound").cloneNode()
                        skillSound.play()
            e.remove()
            if (health <90){
                 let gamecon = document.querySelector(".game-contener")
                health += 20
                gamecon.classList.add("healthed")
                setTimeout(()=>{
                    gamecon.classList.remove("healthed")
                },500)
            }
        }
        if(ele.top >500){
            e.remove()
        }
        })
        shield.forEach((e)=>{
            let ele = e.getBoundingClientRect()
                    if (ele.top > 470 && ele.right > playerWidth.left && ele.left <playerWidth.right ){
                        let skillSound = document.getElementById("skillSound").cloneNode()
                        skillSound.play()
            e.remove()
            shielddef = 100
        }
                if(ele.top >500){
            e.remove()
        }
        })
        gunReng.forEach(e => {
            let ele = e.getBoundingClientRect()
                    if (ele.top > 470 && ele.right > playerWidth.left && ele.left <playerWidth.right ){
                        let skillSound = document.getElementById("skillSound").cloneNode()
                        skillSound.play()                        
            e.remove()
            if(gunRang == 150){
                gunRang = 100
                setTimeout(()=>{
                gunRang = 160
            },30000)
            }
        }
                if(ele.top >500){
            e.remove()
        }
        });

    },100)
 }
window.onload = ()=>{
    skills()
    kill()
   playerMove() 
   pump()
   munster()
lose()
}
function restart(){
    window.location.reload()
}