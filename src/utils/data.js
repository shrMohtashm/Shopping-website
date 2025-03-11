import React from "react";
import { FaLinkedin, FaGoogle, FaSquareInstagram } from "react-icons/fa6";

export const links = [
  { path: "https://www.google.com/", title: "Google", id: "1" },
  { path: "https://www.digikala.com/", title: "DigiKala", id: "2" },
  { path: "https://www.google.com/", title: "Google", id: "3" },
  { path: "https://www.digikala.com/", title: "DigiKala", id: "4" },
];

export const carouselItems = [
  {
    src: "/images/carousel/slide2.jpg",
    altText: "Slide 1",
    id: 1,
  },
  {
    src: "/images/carousel/slide1.jpg",
    altText: "Slide 2",
    id: 2,
  },
];

export const city_options = [
  { value: "آذربایجان شرقی", label: "آذربایجان شرقی" },
  { value: "اذربایجان غربی", label: "اذربایجان غربی" },
  { value: "اردبیل", label: "اردبیل" },
  { value: "اصفهان", label: "اصفهان" },
  { value: "البرز", label: "البرز" },
  { value: "ایلام", label: "ایلام" },
  { value: "بوشهر", label: "بوشهر" },
  { value: "تهران", label: "تهران" },
  { value: "چهارمحال و بختیاری", label: "چهارمحال و بختیاری" },
  { value: "خراسان جنوبی", label: "خراسان جنوبی" },
  { value: "راسان رضوی", label: "راسان رضوی" },
  { value: "خراسان شمالی", label: "خراسان شمالی" },
  { value: "خوزستان", label: "خوزستان" },
  { value: "زنجان", label: "زنجان" },
  { value: "سمنان", label: "سمنان" },
  { value: "سیستان و بلوچستان", label: "سیستان و بلوچستان" },
  { value: "قزوین", label: "قزوین" },
  { value: "قم", label: "قم" },
  { value: "کردستان", label: "کردستان" },
  { value: "کرمان", label: "کرمان" },
  { value: "کرمانشاه", label: "کرمانشاه" },
  { value: "کهگیلویه وبویراحمد", label: "کهگیلویه وبویراحمد" },
  { value: "گلستان", label: "گلستان" },
  { value: "گیلان", label: "گیلان" },
  { value: "مازندران", label: "مازندران" },
  { value: "مرکزی", label: "مرکزی" },
  { value: "هرمزگان", label: "هرمزگان" },
  { value: "همدان", label: "همدان" },
  { value: "یزد", label: "یزد" },
];

export const discounts = [
  {
    name: "Odyssey React Shield",
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike01a.png",
    alt: "Odyssey React Shield",
    sizes: [36, 37],
    discount: "40% off",
  },
  {
    name: "Roshe Run",
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/26438/shoe.png",
    alt: "Nike Air Shoe 1",
    sizes: [40, 43],
    discount: "26% off",
  },
  {
    name: "Air Max 97",
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike02a.png",
    alt: "Nike Air Shoe 2",
    sizes: [41, 36],
    discount: "18% off",
  },
];

export const socialLinks = [
  { icon: <FaGoogle />, href: "#!" },
  { icon: <FaSquareInstagram />, href: "#!" },
  { icon: <FaLinkedin />, href: "#!" },
];
