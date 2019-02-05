import urls from '../Constants/urls';

export const aboutMe = "I am a highly motivated and technologically proficient Computer Science student/hobbyist" +
    " with the desire to work in a challenging position to further develop my skills and creativity in" +
    " an ambitious and expanding business environment. Experience has lead me to a deep passion and " +
    "understanding in building web applications with a friendly UX design and manageable backend services to complement. \n" +
    "\n" +
    "Whilst working on my side projects and placing in international competitions with a" +
    " business partner, I have consistently demonstrated a highly flexible approach, with " +
    "the ability to work on multiple tasks simultaneously and handle frequent interruptions," +
    " together with competing deadlines and changing work priorities. I have developed a high" +
    " level of methodical organisational skills and thoroughly understand what it takes to" +
    " work in a team-based environment. The past three years have given me a magnificent scope" +
    " for personal and professional growth and now I welcome every new experience with an open" +
    " mind and willingness to learn more.";

export const photoUrl = urls.BucketUrl.url('photo.jpg');
export const resumeUrl = urls.BucketUrl.url('resume.pdf');

export function getProjectByUri(uri) {
    return projects.find(p => p.uri === uri);
}

export const projects = [
    {
        title:'LootClicker',
        thumbnail: urls.BucketUrl.url('lc2.png'),
        uri: "lootclicker",
        photos: [
            urls.BucketUrl.url('lc1.jpg'),
            urls.BucketUrl.url('lc3.jpg')
        ],
        description: 'LootClicker is a f2p MMO casual clicker game.\n' +
            'It was built from the ground up specifically for the NEO blockchain and as a game to play casually or on the side\n' +
            'while trading cryptocurrencies.\n' +
            'The centralized aspect of game logic itself is managed by an authoritative server, every action which may effect\n' +
            'the in game economy and value of assets is verified and accepted by the server, this will attempt to remove all\n' +
            'cheating from the game to properly simulate an in game economy.\n' +
            'Players can earn items from crates, or in decentralized game modes.\n' +
            'The in game equippable assets are all integrated into the framework and therefore registered on the NEO blockchain.'
    },
    {
        title:'Loot Framework',
        thumbnail: urls.BucketUrl.url('lf1.jpg'),
        uri: "loot-framework"
    },
    {
        title: 'Loot Wallet',
        thumbnail: urls.BucketUrl.url('lw1.png'),
        uri: "loot-wallet"
    },
    {
        title: 'AskEth',
        thumbnail: urls.BucketUrl.url('ae1.jpg'),
        uri: "ask-eth"

    },
    {
        title: 'Rexnado Game',
        thumbnail: "https://s3-ap-southeast-2.amazonaws.com/chris-poli-files/rn1.jpg",
        uri: "rexnado"
    },
];



export const books = [
    {
        title:'Effective Java 2nd Edition - Joshua Bloch',
        thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51LypSJEqQL._AC_UL320_SR248,320_.jpg',
    },
    {
        title:'Code: The Hidden Language of Computer Hardware and Software - Charles Petzold',
        thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Code_The_Hidden_Language_of_Computer_Hardware_and_Software.jpg',
    },
    {
        title:'Head First Java 2nd Edition - Kathy Sierra & Bert Bates',
        thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51Gsycdh-TL._SX430_BO1,204,203,200_.jpg',

    }

];