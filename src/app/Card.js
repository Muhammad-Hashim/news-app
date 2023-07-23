import Image  from 'next/image'
import { Manrope } from "next/font/google";
import React from 'react'
import sytles from './Card.module.css'
import { Link } from "next/link";
const amrope=Manrope({
   subsets: ["latin"], 
   weight: ["700"] 
})
export default function Card({ name, url, author, description ,title,urlToImage}) {
  return (
    <div className={amrope.className}>
      <div className={sytles.main}>
        <div className={sytles.Image}>
          {urlToImage && (
            <Image src={urlToImage} alt={name} width={317} height={172} />
          )}
        </div>
        <div className={sytles.info}>
          <p className={sytles.title}>{title}</p>
          <p className={sytles.author}>{author}</p>
        </div>
        <div className={sytles.footer}>
          <p>{description}</p>
          <button className={sytles.button}>
            Read now
          </button>
        </div>
      </div>
    </div>
  );
}
