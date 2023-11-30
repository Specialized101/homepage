import './style.css'
import ProfilePic1 from './images/pexels-sam-lion-6001544.jpg'
import GithubIcon from './images/icons8-github-30.png'
import LinkedInIcon from './images/icons8-linkedin-30.png'
import TwitterIcon from './images/icons8-twitter-30.png'
import ProjectImg from './images/pexels-antonio-batinić-4164418.jpg'
import ExternalLink from './images/icons8-external-link-48.png'
import PhoneIcon from './images/icons8-phone-32.png'
import MailIcon from './images/icons8-mail-48.png'

document.querySelector('header figure img').src = ProfilePic1

Array.from(document.querySelectorAll('.github')).forEach(image => image.src = GithubIcon)
Array.from(document.querySelectorAll('.linkedin')).forEach(image => image.src = LinkedInIcon)
Array.from(document.querySelectorAll('.twitter')).forEach(image => image.src = TwitterIcon)

Array.from(document.querySelectorAll('article > img'))
     .forEach(image => image.src = ProjectImg)

Array.from(document.querySelectorAll('.preview')).forEach(image => image.src = ExternalLink)

document.querySelector('.phone').src = PhoneIcon
document.querySelector('.mail').src = MailIcon