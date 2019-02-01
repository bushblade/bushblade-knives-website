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
  },
  {
    to: 'https://www.instagram.com/bushblade/',
    icon: faInstagram,
  },
  {
    to: 'https://twitter.com/Bushblade?lang=en-gb',
    icon: faTwitter,
  },
  {
    to: 'https://www.youtube.com/channel/UC-A8Y3qftUHT5cYwVlW0ttA',
    icon: faYoutube,
  },
]

export { siteLinks, socialLinks }
