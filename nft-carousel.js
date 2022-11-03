function removeCurrentTextBlocks() {
    $(".carousel .text-block").remove();
};

// this is only for first carousel
function detectActiveChanges() {
    // Mutation Observer
    const btn = document.querySelector('#carousel-1 .carousel-item')
    const options = {
        attributes: true
    }

    function callback(mutationList, observer) {
        mutationList.forEach(function (mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                detectWhichActives();
            }
        })
    }

    const observer = new MutationObserver(callback)
    observer.observe(btn, options)
}

function detectWhichActives() {
    let allItems = $('#carousel-1 .carousel-item');

    allItems.each((index,element)=>{
        if(element.className === "carousel-item active") {
            console.log(index);
            changeTexts(1, index);
        }
    });
}

function changeTexts(carousel, index) {
    $('.nft-text-1 .nft-title').html(carouselData1[(carousel)][index].name);
    $('.nft-text-1 .nft-description').html(carouselData1[(carousel)][index].description);
}
function setupData() {
    // Carousel 1
    carouselData1.push([
        {
            id: 1,
            name: "DieHardBirdie Fight Club #001 - BAM!",
            description: "BAM! Looking through the sniper scope and taking down the enemies from afar is not easy. With patience and precision, victory comes naturally to gaming champion DieHardBirdie. Once he's on the game mode, everybody should watch out for the Birdie call!"
        },
        {
            id: 2,
            name: "DieHardBirdie Fight Club #002: POW!",
            description: "POW! He may look very calm but DieHardBirdie is always ready for battle. From his fearless offense to enemy lines to his defense tactics in CS:GO, the Amazing DieHardBirdie is simply an unstoppable force."
        },
        {
            id: 3,
            name: "DieHardBirdie Fight Club #003: KAPOW!",
            description: "Playing games can be a battle of nerves, whoever gets impatient may lose the round. This is where DieHardBirdie's championship experience shines bright. Patience is the key in the game in offense or defense. Now, watch DieHardBirdie go in for the clutch! KAPOW!"
        },
        {
            id: 4,
            name: "DieHardBirdie Fight Club #004: BOOM!",
            description: "BOOM! BOOM! BOOM! The enemy has arrived and now it's up to DieHardBirdie to defend the site. Hiding from plain sight, he goes for a grenade and gun combo and sucessfully thwarts the enemy team's plan. Another sweet victory for DieHardBirdie!"
        },
        {
            id: 5,
            name: "DieHardBirdie Fight Club #005: KABAM!",
            description: "What would you do if a CS:GO champion is on the enemy team? Do your best! You can bet that DieHardBirdie will always do his best to win. Now, time to plant the bomb and take down the defense. Victory in 5, 4, 3, 2 ... 1. KABAM!"
        },
        {
            id: 6,
            name: "DieHardBirdie Fight Club #006: WHAM!",
            description: "WHAM! Don't let your guard down when playing games like CS:GO or Call of Duty. Enemies can always sneak up on you. Just like DieHardBirdie, move fast to secure the win. Don't forget: Always watch your six!"
        },
        {
            id: 7,
            name: "DieHardBirdie Fight Club #007: SLAP!",
            description: "SLAP! CLAP! SNAP! Playing games can help relieve stress and bring you, your family, and friends closer together. Whatever games you may play, playing games help bring people together, not tear people apart. DieHardBirdie hopes for more people to play with their families and friends. Play a game today. GLHF! (Good Luck Have Fun)"
        },
    ]);
}
let carouselData1 = [0];
setupData();
detectActiveChange();

// this is only for 2nd carousel
function detectActiveChange() {
    // Mutation Observer
    const btn = document.querySelector('#carousel-2 .carousel-item')
    const options = {
        attributes: true
    }

    function callback(mutationList, observer) {
        mutationList.forEach(function (mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                detectWhichActive();
            }
        })
    }

    const observer = new MutationObserver(callback)
    observer.observe(btn, options)
}

function detectWhichActive() {
    let allItems = $('#carousel-2 .carousel-item');

    allItems.each((index,element)=>{
        if(element.className === "carousel-item active") {
            console.log(index);
            changeText(1, index);
        }
    });
}
function changeText(carousel, index) {
    $('.nft-text-2 .nft-title').html(carouselData2[(carousel)][index].name);
    $('.nft-text-2 .nft-description').html(carouselData2[(carousel)][index].description);
}
    
function setupData2() {
    // Carousel 1
    carouselData2.push([
        {
            id: 1,
            name: "Animated Sky Series #001: BRIGHT BIRDIE SKY",
            description: 'Senior gaming champion DieHardBirdie stands out from the clear waters, bright blue sky, and white clouds like the birds as he exudes a fierce yet calm demeanor only champions can carry. His moniker "DieHardBirdie" came from his ability to imitate bird sounds by whistling. Amazingly talented is an understatement.'
        },
        {
            id: 2,
            name: "Animated Sky Series #002: SPACE ROCKS SKY",
            description: "Does DieHardBirdie blow people's minds with his energy and passion for community? Yes. Is DieHardBirdie cool? Absolutely. The gamer-artist-senior extraordinaire clearly loves fun moments and the space rocks add the perfect touch to the snapshot."
        },
        {
            id: 3,
            name: "Animated Sky Series #003: SNOWY ROSES SKY",
            description: "White paper roses fall from the sky like a winter wonderland. DieHardBirdie is no stranger to folding beautiful paper roses and lovely dancing figures made of paper and napkins. The gamer grandpa has been an artist for the past 50 years. It's easy for him to fold a paper rose in under a minute, a magic minute."
        },
        {
            id: 4,
            name: "Animated Sky Series #004: SUNNY DONUTS SKY",
            description: "DieHardBirdie is a lover of life, spends time with his family, has an eye for the arts, is a champion gamer, and appreciates a sugar-coated sunset moment and a sweet round dessert topped with candy sprinkles. He is an equal opportunity donut lover."
        },
        {
            id: 5,
            name: "Animated Sky Series #005: ZEBRA NIGHT SKY",
            description: "DieHardBirdie can pull off a cool, classy look even under the night sky filled with cute zebras. Just like how a dragon symbolizes strength, wisdom, and power and zebra represents freedom, individualism, and determination, DieHardBirdie believes that everyone has a chance to grow, be authentic, and paint stripes of possibility into their life at any age."
        },
        {
            id: 6,
            name: "Animated Sky Series #006: SKY BOOKS EXPLOSION",
            description: "Reading a good book is like igniting a mix of imagination, adventure, reality, fantasy, and more. DieHardBirdie tip: Relax and pick up a book to keep your mind and imagination active. Or better yet, turn it into a creative masterpiece! DieHardBirdie can turn books into a paper sculpture in a breeze, turning art and literature into one."
        },
        {
            id: 7,
            name: "Animated Sky Series #007: MIGHTY SWEDISH SKY",
            description: 'Hej! The world senior CS:GO champion DieHardBirdie hails from Sweden - a kingdom waving the blue and yellow flag and the land with ties to Vikings, Abba, and global conglomerate Ikea. Abbe "DieHardBirdie" Borg has a profound love for his beloved Sweden and he is proud to be a Swede. Ha det bra!'
        },
    ]);
}
let carouselData2 = [0];
detectActiveChanges();
setupData2();


// this is only for 3rd carousel
function detectActiveChangess() {
    // Mutation Observer
    const btn = document.querySelector('#carousel-3 .carousel-item')
    const options = {
        attributes: true
    }

    function callback(mutationList, observer) {
        mutationList.forEach(function (mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                detectWhichActivess();
            }
        })
    }

    const observer = new MutationObserver(callback)
    observer.observe(btn, options)
}

function detectWhichActivess() {
    let allItems = $('#carousel-3 .carousel-item');

    allItems.each((index,element)=>{
        if(element.className === "carousel-item active") {
            console.log(index);
            changeTextss(1, index);
        }
    });
}
function changeTextss(carousel, index) {
    $('.nft-text-3 .nft-title').html(carouselData3[(carousel)][index].name);
    $('.nft-text-3 .nft-description').html(carouselData3[(carousel)][index].description);
}
    
function setupData3() {
    // Carousel 1
    carouselData3.push([
        {
            id: 1,
            name: "Robo-Birds Series #001: STEALTH IRON KINGFISHER",
            description: "Kingfishers [Class: Aves Family: Alcedinidae] are small swooping hunters perched on branches preying on fishes and small amphibians. Can you imagine how a stealth predator like an iron kingfisher stalks its prey? Sneaky. Senior gaming champion DieHardBirdie is just like a hunter that stalks his preys through his sniper scope, ready to eliminate them in a flash, and get the victory. Watch your back if DieHardBirdie is around."
        },
        {
            id: 2,
            name: "Robo-Birds Series #002: VIVID BIONIC PARROT",
            description: "Parrots [Class: Aves Family: Psittacidae] are arguably the most common bird species known for their ability to mimic human voices and colorful feathers. Parrots are one of the most intelligent birds. Bionic parrots may just be double the trouble (and fun). Just like a parrot, DieHardBirdie can get a bit loud on his streams especially when you hear the bird call! The whistle of doom, just like a parrot's mimicry, is a sign that DieHardBirdie is out to get his enemy and W-I-N."
        },
        {
            id: 3,
            name: "Robo-Birds Series #003: GENTLE ALLOY PARAKEET",
            description: "Parakeets [Class: Aves Family: Psittacidae], popularly known as lovebirds, are gentle and lovely birds that are common as pets and well-loved by people. Picture this: A future with alloy parakeets and mechanical birds flying in the skies. Now, that's a sight! In contrast to the parakeet's gentle nature, CS:GO gaming champion DieHardBirdie can be as gentle as he is ruthless (only in the virtual world). DieHardBirdie's calm demeanor is matched with his explosive game skills and precision. Calm and cool is his style."
        },
        {
            id: 4,
            name: "Robo-Birds Series #004: SHINY CHROME TOUCAN",
            description: "Toucans [Class: Aves Family: Ramphastidae] are iconic birds known for their colorful long bills, which accounts for one-third of the bird's body. Inside a mecha world, chrome toucans will be one formidable and fearless creatures to ever fly high. Toucans' striking long bills are versatile for feeding and defending against other predators. Like the toucan, DieHardBirdie possess versatility and fierceness in having better hand-eye coordination in the game as a CS:GO world champion,and creating art masterpieces in real life as an artist and origami lover. "
        },
        {
            id: 5,
            name: "Robo-Birds Series #005: MIGHTY METAL HORNBILL",
            description: "Hornbills [Class: Aves Family: Bucerotidae] are omnivorous birds with prominent long bills and a unique casque on near the top of their heads. If robo-birds exist, we should not mess with the metal hornbill. Curious about the common factors of the hornbill and DieHardBirdie? They are both fierce and have a distinct bird call. DieHardBirdie and his bird call marks the moment the enemy is about to lose. Hear Birdie, fear Birdie because he is here to win."
        },
        {
            id: 6,
            name: "Robo-Birds Series #006: CYBORG STEEL COCKATOO",
            description: "Cockatoos [Class: Aves Family: Cacatuidae] can be recognized by their signature curved bill, prominent crests, and colorful feathers with their medium to large build with powerful wings and sharp claws. If cyborg cockatoos ever exist, its steel wings are powerful enough to blow their enemies away. Just like the cockatoo, DieHardBirdie have that instinct in hunting down his enemies and defending his site from intruders that made him into the CS:GO senior world champion today. Cyborg cockatoos may even become DieHardBirdie's best pal."
        },
        {
            id: 7,
            name: "Robo-Birds Series #007: HOVERING BOT HUMMINGBIRD",
            description: "Hummingbirds [Class: Aves Family: Trochilidae] are small hovering birds known for the humming sound generated by rapidly flapping its wings. In a mecha future, robot hummingbirds can go twice as fast! Hummingbirds and DieHardBirdie have one thing in common: distinct sound. Hummingbird's humming wings and the DieHardBirdie's bird call - a known sound and a signal to establish their presence. DieHardBirdie the gaming champion lets the enemies know that he is here to win it all."
        },
    ]);
}
let carouselData3 = [0];
detectActiveChangess();
setupData3();
removeCurrentTextBlocks();
