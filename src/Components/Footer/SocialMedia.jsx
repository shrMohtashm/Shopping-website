import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6"

export default function SocialMedia() {
  return (
    <>
          <hr className="mb-4" />
        <section className="mb-4 text-center">
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          ><FaGoogle /></a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          ><FaSquareInstagram /></a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          ><FaLinkedin /></a>

        </section>
    </>
  )
}
