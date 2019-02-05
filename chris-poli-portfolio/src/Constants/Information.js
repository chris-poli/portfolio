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
        url: urls.BucketUrl.url('lc1.jpg'),
        uri: "lootclicker"
    },
    {
        title:'Loot Framework',
        url: urls.BucketUrl.url('lf1.jpg'),
        uri: "loot-framework"
    },
    {
        title: 'Loot Wallet',
        url: urls.BucketUrl.url('lw1.png'),
        uri: "loot-wallet"
    },
    {
        title: 'AskEth',
        url: urls.BucketUrl.url('ae1.jpg'),
        uri: "ask-eth"

    },
    {
        title: 'Rexnado Game',
        url: "https://s3-ap-southeast-2.amazonaws.com/chris-poli-files/rn1.jpg",
        uri: "rexnado"
    },
];