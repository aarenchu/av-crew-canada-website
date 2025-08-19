import info from '../assets/info.json';
import bert from '../assets/Bert.jpg';
import theCrew from '../assets/avcrew.jpg';
import conferencesImage from '../assets/Conference.jpg';
import concertsImage from '../assets/Concert.jpg';
import weddingImage from '../assets/Wedding.jpg';
import retreatImage from '../assets/Retreat.jpg';
import livestreamImage from '../assets/livestream.jpg';
import ledScreens from '../assets/EvangelLEDScreens.jpg';
import lights from '../assets/ZoeLights.jpg';
import screen from '../assets/FRPProjectorScreen.jpg';
import mixer from '../assets/FRPMixer.jpg';
import avRack from '../assets/FRPAVRack.jpg';
import speaker from '../assets/FRPMountedSpeaker.jpg';
import securityCamera from '../assets/SecurityCamera.jpg';
import intLights from '../assets/CapitolLights.jpg';
import cSpeakers from '../assets/CapitolSpeakers.jpg';

/** SOCIAL MEDIA */
export const socialsInfo = info.socials;

/** ABOUT */
export const aboutInfo = info.about;
// about images
export const avCrewImages = [
  {
    img: bert,
    title: 'LED Screens (Evangel Temple Toronto)',
    rows: 3,
    cols: 2,
  },
  {
    img: theCrew,
    title: 'Projector Screen (Fellowship Church Rouge Park)',
    rows: 3,
    cols: 2,
  },
];

/** AV SERVICES */
export const avServicesInfo = info['av-services'];
// av services images
export const conferenceImg = conferencesImage;
export const concertImg = concertsImage;
export const weddingImg = weddingImage;
export const retreatImg = retreatImage;
export const livestreamImg = livestreamImage;

/** INSTALLATIONS */
// image list
export const installationImages = [
  {
    img: ledScreens,
    title: 'LED Screens (Evangel Temple Toronto)',
    rows: 2,
    cols: 2,
  },
  {
    img: screen,
    title: 'Projector Screen (Fellowship Church Rouge Park)',
    rows: 2,
    // cols: 2,
  },
  {
    img: avRack,
    title: 'AV Rack (St. Dominic Savio Catholic School)',
    rows: 2,
    // cols: 2,
  },
  {
    img: speaker,
    title: 'Mounted Speakers (St. Dominic Savio Catholic School)',
    rows: 2,
  },

  {
    img: lights,
    title: 'LED Lights (Zoe Church Toronto)',
    rows: 2,
    cols: 2,
  },
  {
    img: mixer,
    title: 'Mixer (Fellowship Church Rouge Park)',
    rows: 2,
  },
  {
    img: securityCamera,
    title: 'Security Camera (Residential Installation)',
    rows: 2,
  },
  {
    img: intLights,
    title: 'Intelligent Lights (Capitol Banquet Centre)',
    rows: 2,
  },
  {
    img: cSpeakers,
    title: 'Mounted Speakers (Capitol Banquet Centre)',
    rows: 2,
    cols: 2,
  },
];

/** RENTALS */
export const rentalCaptions = info.rentals;

/** CONTACT US */
export const contactInfo = info.contact;
