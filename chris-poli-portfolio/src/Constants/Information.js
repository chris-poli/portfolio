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
    },
    {
        title:'Clean Code',
        thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/515iEcDr1GL._SX385_BO1,204,203,200_.jpg',
    },
    {
        title:'Automate This - Christopher Steiner',
        thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51Folik-4IL.jpg',
    },
    {
        title:'Mastering Ethereum',
        thumbnail: 'https://github.com/ethereumbook/ethereumbook/raw/develop/images/cover_thumb.png',
    }
];
export const languages = [
    {
        title:'Javascript',
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    },
    {
        title:'Java',
        thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png'
    },
    {
        title:'scala',
        thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/85/Scala_logo.png'
    },
    {
        title:'c#',
        thumbnail: 'https://ih0.redbubble.net/image.416412087.0587/flat,550x550,075,f.jpg'
    },
    {
        title:'solidity',
        thumbnail: 'https://everipedia-storage.s3-accelerate.amazonaws.com/ProfilePics/4857965__39455.svg'
    },
    {
        title:'python',
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2000px-Python-logo-notext.svg.png'
    },
    {
        title:'c',
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/The_C_Programming_Language_logo.svg/140px-The_C_Programming_Language_logo.svg.png'
    },
    {
        title:'c',
        thumbnail: 'https://cdn-images-1.medium.com/max/1200/1*s6QGl0s9_ZgmotvHVtUVoQ.png'
    },

];

export const technologies = [
    {
        title:'Dotnet',
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Microsoft_.NET_logo.png'
    },
    {
        title:'Unity',
        thumbnail:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Unity_Technologies_logo.svg/2000px-Unity_Technologies_logo.svg.png'
    },
    {
        title:'react',
        thumbnail:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png'
    },
    {
        title:'redux',
        thumbnail:'https://avatars0.githubusercontent.com/u/13142323?s=400&v=4'
    },
    {
        title:'nodejs',
        thumbnail:'https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png'
    },
    {
        title:'photon',
        thumbnail:'https://s3-eu-west-1.amazonaws.com/img3.n-ix.com/wp-content/uploads/2016/07/12192159/big__photon-server-logo.png'
    },
    {
        title:'pyqt',
        thumbnail:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Python_and_Qt.svg/1200px-Python_and_Qt.svg.png'
    },
    {
        title:'mongo',
        thumbnail:'https://webassets.mongodb.com/_com_assets/cms/mongodb-logo-rgb-j6w271g1xn.jpg'
    },
    {
        title:'cass',
        thumbnail:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Cassandra_logo.svg/2000px-Cassandra_logo.svg.png'
    },
    {
        title:'mysql',
        thumbnail:'https://upload.wikimedia.org/wikipedia/en/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png'
    },
    {
        title:'Unix',
        thumbnail:'https://upload.wikimedia.org/wikipedia/commons/c/c2/Unix_Logo.gif'
    },
    {
        title:'aws',
        thumbnail:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2000px-Amazon_Web_Services_Logo.svg.png'
    },
    {
        title:'docker',
        thumbnail:'https://www.docker.com/sites/default/files/social/docker_facebook_share.png'
    },
    {
        title:'hadoop',
        thumbnail:'https://sdtimes.com/wp-content/uploads/2017/12/elephant_rgb_sq_400x400.png'
    },
    {
        title:'eth',
        thumbnail:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/2000px-Ethereum_logo_2014.svg.png'
    },
    {
        title:'neo',
        thumbnail:'https://upload.wikimedia.org/wikipedia/commons/0/07/NEO_%28cryptocurrency%29_logo.svg'
    },
];

export const courses = [
    {
        title:'Javascript',
        thumbnail: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAolBMV' +
            'EXw208yMzDw2kvz5ITx3Vnz4nr34VDy3U8vMTAaIC7UwkpCQTL24FAqLC8nKi/65FEVHC55cDkSGi0dIi4hJS4o' +
            'Ky8gJC4uLzDl0U3hzkw/PjLOvUleWTZoYjfAsEarnUI5OTG5qkWekkBIRjNwaTiCeTtXUzWOhD1UUDSmmUGYjD9NS' +
            'jOfk0DYxkuyo0N/dju+' +
            '/+rncS2q9UMCVHbh+nD799a5BUYmAuwv364/mX/+eH6L/vhsoT0ZQnpyxLSlyWkL0tIX5aQviwhfVlC+rKE9GUJ6c' +
            'sS0pclpC9LSF+WkL4sIX1ZQvqyhPRlCenLEtKXJaQvS0hflpC+LCF9WUL6soT0ZQnpyxLSlyWkL0tIX5aQviwhfVl' +
            'C+rKE9GUJ6csS0pclpC9LSF+WkL4sIX1ZQvqyhPRlCenLEtKXJaQvS0hflpC+' +
            'QeC6QRB07sPFJJOXXXE9tpe/LJ5Hg+Stwag/GD0vJrnUvIj4FfnD4wvqgmX5Ps8z0foR9Wp7cGzkrUHWssWvy5DCq27eYNsWSbyrf5UsIX1ZQvqyhPRlCenLEtKXJaQvS0hfBeHfP1x//R/nw6Yll7nq2gAAAABJRU5ErkJggg==',
    }
]


export const awards = [
    {

    }
]