import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];
export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.squarespace.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis saepe iure cupiditate autem doloremque eius ducimus cumque tempore, odit quod",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia distinctio a ipsum similique reiciendis itaque.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti sunt quisquam architecto unde, consectetur facere obcaecati doloremque, omnis sequi, ipsa deserunt molestiae? Fugit, expedita eveniet.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore debitis dolor esse iusto laborum reprehenderit! Quam natus laudantium doloribus itaque delectus fugit laboriosam assumenda vel alias quidem! Dolores, deserunt ratione.",
    location: "china",
    duration: 5,
    cost: 2200,
  },
  {
    id: 2,
    image: tour2,
    date: "october 1th, 2020",
    title: "best of java",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore sed consectetur architecto, similique nemo iure reiciendis, assumenda quasi quia odit facere facilis. Perspiciatis id officia molestiae voluptate eius optio ipsam veniam illo laudantium? Quos vitae recusandae aliquam repudiandae. Temporibus, eveniet.",
    location: "indonesia",
    duration: 4,
    cost: 1900,
  },
  {
    id: 3,
    image: tour3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus aperiam quidem quia dolore! Accusantium voluptate quos quidem consequatur omnis eligendi, quasi dolorem amet beatae saepe nobis id cumque. Harum veniam est ratione omnis.",
    location: "hong kong",
    duration: 10,
    cost: 7500,
  },
  {
    id: 4,
    image: tour4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem voluptatibus vitae nihil, quasi porro dolores autem dolorem doloremque itaque.",
    location: "kenya",
    duration: 22,
    cost: 5300,
  },
];
