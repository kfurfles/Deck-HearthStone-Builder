const heroPowerBg = 'https://d2q63o9r0h0ohi.cloudfront.net/images/game-guide/heroes/hero-powers.png'
export const data = [
    {
        thumb: require('./../../assets/anduin-full.jpg'),
        bg: require('./../../assets/anduin.jpg'),
        data: {
            name: 'anduin',
            classType: 'Priest',
            description: 'We know what you’re thinking: he’s a priest, what’s he gonna do – heal me to death? It’s true that Anduin has exceptionally strong healing spells in his deck, but his Shadow spells will wipe that grin right off your face in no time flat. And then he’ll use his excellent board control spells like Mind Control to finish you off. With your own minions.',
            hability:{
                bgStyle: `url(${heroPowerBg}) -630px 0`,
                heroPower: 'Lesser Heal',
                description: 'Restore 2 Health.',
                color: '#b001d6',
                variation: 'black'
            }
        }
    },
    {
        thumb: require('./../../assets/garrosh-full.jpg'),
        bg: require('./../../assets/garrosh.jpg'),
        data: {
            name: 'garrosh',
            classType: 'Warrior',
            description: 'As one of the most formidable warriors Azeroth has ever seen, the things Garrosh brings to the table include war axes, plenty of bloodthirsty minions, and severe anger management issues. That’s not hyperbole – Garrosh’s deck literally thrives on dealing AND receiving damage. And don’t be surprised if Garrosh makes his minions charge right at you in a blood-fueled craze.',
            hability:{
                bgStyle: `url(${heroPowerBg}) -270px 0`,
                heroPower: 'Armor Up!',
                description: 'Gain 2 Armor.',
                color: '#feb246',
                variation: 'white'
            }
        }
    },
    {
        thumb: require('./../../assets/guldan-full.jpg'),
        bg: require('./../../assets/guldan.jpg'),
        data: {
            name: 'guldan',
            classType: 'Warlock',
            description: 'Demonic magic is powerful, but often carries a hefty price. Gul’dan probably knows a thing or two about that. He has access to a staggering number of demonic minions, but even though they are powerful and often cheap to summon, they always find a way to make up for the difference. Gul’dan can establish card advantage quite easily thanks to his Hero Power, which makes the old warlock a terrible foe.',
            hability:{
                bgStyle: `url(${heroPowerBg}) -450px 0`,
                heroPower: 'Life Tap',
                description: 'Draw a card and take 2 damage.',
                color: '#b165ff',
                variation: 'white'
            }
        }
    },
    {
        thumb: require('./../../assets/janna-full.jpg'),
        bg: require('./../../assets/janna.jpg'),
        data: {
            name: 'janna',
            classType: 'Mage',
            description: 'When it comes to turning mana into OH GOD IT BURNS, Jaina is second to none. Her decks include plenty of direct damage spells she will gleefully hurl at her opponents, including some very potent board clears like Arcane Explosion and Flamestrike. Add to that a Hero Power that makes short work of small minions and a varied assortment of Secrets, and you’ve got yourself a versatile, deadly opponent.',
            hability:{
                bgStyle: `url(${heroPowerBg}) 0 0 no-repeat`,
                heroPower: 'Fireblast',
                description: 'Deal 1 damage.',
                color: '#40e6ee',
                variation: 'white'
            }
        }
    },
    {
        thumb: require('./../../assets/malfurion-full.jpg'),
        bg: require('./../../assets/malfurion.jpg'),
        data: {
            name: 'malfurion',
            classType: 'Druid',
            description: 'Versatility is the name of the game for Malfurion (well, no, it’s technically still Hearthstone, but you get what we’re saying). Many of his spells can have one of two effects, and even some of his minions can shapeshift to meet the tactical needs of the moment. He can generate mana quickly and even leapfrog his opponent, allowing Malfurion to bring powerful damage spells and board clears to bear. Heh. Bear.',
            hability:{
                bgStyle: `url(${heroPowerBg}) -360px 0`,
                heroPower: 'Shapeshift',
                description: '+1 Attack this turn. +1 Armor.',
                color: '#c40501',
                variation: 'black'
            }
        }
    },
    {
        thumb: require('./../../assets/rexxar-full.jpg'),
        bg: require('./../../assets/rexxar.jpg'),
        data: {
            name: 'rexxar',
            classType: 'Hunter',
            description: 'Music soothes the savage beast, and to Rexxar’s ears there can be no sweeter music than the sound of his beast minions tearing into their prey. He’s deep and paradoxical, is what we’re saying. Rexxar has access to buffs that turn even meek minions into fearsome killing machines, and he takes down whatever targets his beasts leave for him with his quiver full of direct damage spells. The hunt is on!',
            hability:{
                bgStyle: `url(${heroPowerBg}) -90px 0`,
                heroPower: 'Steady Shot',
                description: 'Deal 2 damage to the enemy hero.',
                color: '#8af549',
                variation: 'white'
            }
        }
    },
    {
        thumb: require('./../../assets/thrall-full.jpg'),
        bg: require('./../../assets/thrall.jpg'),
        data: {
            name: 'thrall',
            classType: 'Shaman',
            description: 'What’s the next logical step after single-handedly saving the world from utter destruction for, like, the umpteenth time? Sit down and play some cards, of course! Thrall’s deck is a merry bag of assorted buffs, damage spells, healing spells, and some tough minions to round things out. Expect to be surprised when going up against the Horde’s former warchief and his well-balanced arsenal of spells and minions.',
            hability:{
                bgStyle: `url(${heroPowerBg}) -540px 0`,
                heroPower: 'Totemic Call',
                description: 'Summon a random Totem.',
                color: '#277dff',
                variation: 'white'
            }
        }
    },
    {
        thumb: require('./../../assets/uther-full.jpg'),
        bg: require('./../../assets/uther.jpg'),
        data: {
            name: 'uther',
            classType: 'Paladin',
            description: 'Suppose you’re a minion. Whose deck would you rather be in: Gul’dan, who will likely feed you to his demons, or Uther, who will buff you, heal you, and summon lots of reinforcements to the field? Thought so. Uther can make a weak minion hit like a truck, and a strong minion whimper with regret. He also has a practically unlimited supply of Silver Hand recruits at his disposal, so he’ll never run out of minions.',
            hability:{
                bgStyle: `url(${heroPowerBg}) -180px 0`,
                heroPower: 'Reinforce',
                description: 'Summon a 1/1 Silver Hand Recruit.',
                color: '#ec8ca9',
                variation: 'white'
            }
        }
    },
    {
        thumb: require('./../../assets/valeeta-full.jpg'),
        bg: require('./../../assets/valeeta.jpg'),
        data: {
            name: 'valeeta',
            classType: 'Rogue',
            description: 'Rogues are masters of sneak attacks, tradecraft, and subterfuge, and Valeera is no exception. Not only does her deck include excellent direct damage spells and potent removal abilities, her cards can also combo off each other for deadly effect. To make matters worse (for her opponents), her ability to summon a dagger means that in a pinch this nimble rogue can easily take matters into her own hands.',
            hability:{
                bgStyle: `url(${heroPowerBg}) -720px 0`,
                heroPower: 'Dagger Mastery',
                description: 'Equip a 1/2 Dagger.',
                color: '#cef549',
                variation: 'white'
            }
        }
    },
]