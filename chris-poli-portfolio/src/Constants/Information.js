import urls from '../Constants/urls';

import dotnetImg from '../Assets/Images/.net.png';
import automateImg from '../Assets/Images/automate-this.jpg';
import awsImg from '../Assets/Images/aws.png';
import csharpImg from '../Assets/Images/csharp.jpg';
import cImg from '../Assets/Images/c.png';
import cassImg from '../Assets/Images/cass.png';
import cleanCodeImg from '../Assets/Images/clean-code.jpg';
import codeImg from '../Assets/Images/code.jpg';
import cssImg from '../Assets/Images/css.png';
import dockerImg from '../Assets/Images/docker.png';
import effectiveJavaImg from '../Assets/Images/effective-java.jpg';
import ethImg from '../Assets/Images/eth.png';
import hadoopImg from '../Assets/Images/hadoop.png';
import htmlImg from '../Assets/Images/html.png';
import headJavaImg from '../Assets/Images/headJava.jpg';
import javaImg from '../Assets/Images/java.png';
import jsImg from '../Assets/Images/js.png';
import masteringEthImg from '../Assets/Images/mastering-ethereum.png';
import mongoImg from '../Assets/Images/mongodb.jpg';
import mySqlImg from '../Assets/Images/mysql.png';
import neoImg from '../Assets/Images/neo.svg';
import nodeImg from '../Assets/Images/nodejs.png';
import photonImg from '../Assets/Images/photon.png';
import phpImg from '../Assets/Images/php.png';
import pyqtImg from '../Assets/Images/pyqt.png';
import pythonImg from '../Assets/Images/python.png';
import reactImg from '../Assets/Images/react.png';
import reduxImg from '../Assets/Images/redux.png';
import scalaImg from '../Assets/Images/scala.png';
import solidityImg from '../Assets/Images/solidity.svg';
import unityImg from '../Assets/Images/unity.png';
import unixImg from '../Assets/Images/unix.gif';


export const aboutMe = "I am a highly motivated and technologically proficient Computer Science student/hobbyist" +
    " with the desire to work in a challenging position to further develop my skills and creativity in" +
    " an ambitious and expanding business environment. Experience has lead me to a deep passion and " +
    "understanding in building web applications with a friendly UX design and manageable backend services to complement." +
    "Whilst working on my side projects and placing in international competitions " +
    " I have consistently demonstrated a highly flexible approach, with " +
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
            'while trading cryptocurrencies.\n\n' +
            'The centralized aspect of game logic itself is managed by an authoritative server, every action which may effect\n' +
            'the in game economy and value of assets is verified and accepted by the server, this will attempt to remove all\n' +
            'cheating from the game to properly simulate an in game economy.\n' +
            'Players can earn items from crates, or in decentralized game modes.\n' +
            'The in game equippable assets are all integrated into the framework and therefore registered on the NEO blockchain.'
    },
    {
        title:'Loot Framework',
        thumbnail: urls.BucketUrl.url('lf1.jpg'),
        uri: "loot-framework",
        photos: [
            urls.BucketUrl.url('lc1.jpg'),
            urls.BucketUrl.url('lc3.jpg')
        ],
        description: ''
    },
    {
        title: 'Loot Wallet',
        thumbnail: urls.BucketUrl.url('lw1.png'),
        uri: "loot-wallet",
        photos: [
            urls.BucketUrl.url('lw2.png'),
            urls.BucketUrl.url('lw3.png')
        ],
        description: ''
    },
    {
        title: 'AskEth',
        thumbnail: urls.BucketUrl.url('ae1.jpg'),
        uri: "ask-eth"

    },
    {
        title: 'Rexnado Arcade Game',
        thumbnail: "https://s3-ap-southeast-2.amazonaws.com/chris-poli-files/rn1.jpg",
        uri: "rexnado",
        photos: [

        ],
        description: 'Rexnado is a project built for DECO3801'
    },
];

export const courses = [

    'Introduction to Software Engineering',
    'Introduction to Information Systems',
    'Introduction to Computer Systems',
    'Introduction to Web Design',
    'Advanced Database Systems',
    'Web Information Systems',
    'Discrete Mathematics',
    'Analysis of Scientific Data',
    'Programming in the Large',
    'Relational Database Systems',
    'Service Oriented Architectures',
    'Cloud Computing',
    'Design Computing Studio 3',
    'Algorithms and Data Structures',
    'Advanced Theory and Practice in Science',
    'Planet Earth: The Big Picture',
    'Chemistry 1',
    'Genes, Cells and Evolution'
];


export const books = [
    {
        title:'Effective Java 2nd Edition - Joshua Bloch',
        thumbnail: effectiveJavaImg,
    },
    {
        title:'Code: The Hidden Language of Computer Hardware and Software - Charles Petzold',
        thumbnail: codeImg
    },
    {
        title:'Head First Java 2nd Edition - Kathy Sierra & Bert Bates',
        thumbnail: headJavaImg
    },
    {
        title:'Clean Code',
        thumbnail: cleanCodeImg
    },
    {
        title:'Automate This - Christopher Steiner',
        thumbnail: automateImg
    },
    {
        title:'Mastering Ethereum',
        thumbnail: masteringEthImg
    }
];
export const languages = [
    {
        title:'Javascript',
        thumbnail: jsImg
    },
    {
        title:'html',
        thumbnail: htmlImg
    },
    {
        title:'css',
        thumbnail: cssImg
    },
    {
        title:'Java',
        thumbnail: javaImg
    },
    {
        title:'scala',
        thumbnail: scalaImg
    },
    {
        title:'c#',
        thumbnail: csharpImg
    },
    {
        title:'solidity',
        thumbnail: solidityImg
    },
    {
        title:'python',
        thumbnail: pythonImg
    },
    {
        title:'c',
        thumbnail: cImg
    },
    {
        title:'php',
        thumbnail: phpImg
    },

];
export const technologies = [
    {
        title:'Dotnet',
        thumbnail: dotnetImg
    },
    {
        title:'Unity',
        thumbnail: unityImg
    },
    {
        title:'react',
        thumbnail: reactImg
    },
    {
        title:'redux',
        thumbnail: reduxImg
    },
    {
        title:'nodejs',
        thumbnail: nodeImg
    },
    {
        title:'photon',
        thumbnail:photonImg
    },
    {
        title:'pyqt',
        thumbnail:pyqtImg
    },
    {
        title:'mongo',
        thumbnail:mongoImg
    },
    {
        title:'cass',
        thumbnail:cassImg
    },
    {
        title:'mysql',
        thumbnail: mySqlImg
    },
    {
        title:'Unix',
        thumbnail: unixImg
    },
    {
        title:'aws',
        thumbnail:awsImg
    },
    {
        title:'docker',
        thumbnail:dockerImg
    },
    {
        title:'hadoop',
        thumbnail:hadoopImg
    },
    {
        title:'eth',
        thumbnail:ethImg
    },
    {
        title:'neo',
        thumbnail:neoImg
    },
];


export const awards = [
    {

    }
];