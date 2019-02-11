import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

const siteLinks = [
  { to: '/', text: 'Home' },
  { to: '/about', text: 'About' },
  { to: '/contact', text: 'Contact' },
  { to: '/work', text: 'Work' },
]

const socialLinks = [
  {
    to: 'https://www.facebook.com/Bushbladehandmadeknives/',
    icon: faFacebookSquare,
    text: 'Facebook',
    color: '#3B5998',
  },
  {
    to: 'https://www.instagram.com/bushblade/',
    icon: faInstagram,
    text: 'Instagram',
    color: '#bc2a8d',
  },
  {
    to: 'https://twitter.com/Bushblade?lang=en-gb',
    icon: faTwitter,
    text: 'Twitter',
    color: '#1dcaff',
  },
  {
    to: 'https://www.youtube.com/channel/UC-A8Y3qftUHT5cYwVlW0ttA',
    icon: faYoutube,
    text: 'YouTube',
    color: '#ff0000',
  },
]

const knifeLinks = [
  { to: '/work/woodlore-clone', text: 'Woodlore Clone' },
  { to: '/work/midi', text: 'Midi' },
]

export { siteLinks, socialLinks, knifeLinks }
