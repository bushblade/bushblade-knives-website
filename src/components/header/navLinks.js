import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

const siteLinks = [
  { to: '/', text: 'Home' },
  { to: '/about', text: 'About' },
  { to: '/work', text: 'Work' },
  { to: '/contact', text: 'Contact' },
]

const socialLinks = [
  {
    to: 'https://www.facebook.com/Bushbladehandmadeknives/',
    icon: faFacebookSquare,
    text: 'Facebook',
  },
  {
    to: 'https://www.instagram.com/bushblade/',
    icon: faInstagram,
    text: 'Instagram',
  },
  {
    to: 'https://twitter.com/Bushblade?lang=en-gb',
    icon: faTwitter,
    text: 'Twitter',
  },
  {
    to: 'https://www.youtube.com/channel/UC-A8Y3qftUHT5cYwVlW0ttA',
    icon: faYoutube,
    text: 'YouTube',
  },
]

const knifeLinks = [
  { to: 'work/woodlore-clone', text: 'Woodlore Clone' },
  { to: 'work/midi', text: 'Midi' },
]

export { siteLinks, socialLinks, knifeLinks }
