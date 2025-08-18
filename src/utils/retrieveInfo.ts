import info from '../assets/info.json';
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

/** ABOUT */
export const aboutInfo = info.about;
// about image
export const avCrew = theCrew;

/** AV SERVICES */
export const avServicesInfo = info['av-services'];
// av services images
export const conferenceImg = conferencesImage;
export const concertImg = concertsImage;
export const weddingImg = weddingImage;
export const retreatImg = retreatImage;
export const livestreamImg = livestreamImage;

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
  //   {
  //     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
  //     title: 'Basketball',
  //   },
  //   {
  //     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
  //     title: 'Fern',
  //   },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    cols: 2,
  },
];

export const contactInfo = info.contact;
