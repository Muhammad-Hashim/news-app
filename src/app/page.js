import Image from "next/image";
import { Roboto } from "next/font/google";
import styles from "./page.module.css";
// import Card from "./Card";
import dynamic from "next/dynamic";
const Card = dynamic(() => import("./Card"));

const inter = Roboto({ subsets: ["latin"], weight: ["400"] });
async function getData() {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=from=2023-06-13&sortBy=publishedAt&apiKey=c258be34cfc54c909c035d622142ae58`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const art = await getData();
  const data = art.articles;

  return (
    <main className={styles.main}>
      <div className={styles.nav}>
        <div>
          <Image
            src="https://st2.depositphotos.com/6789684/12262/v/600/depositphotos_122620866-stock-illustration-illustration-of-flat-icon.jpg"
            alt="o"
            width={40}
            height={40}
          />
        </div>
        <div className={styles.nav_link}>
          <p>All</p>
          <p>Politics</p>
          <p>Finace</p>
        </div>
        <form className={styles.nav_search} action="submit">
          <input type="text" />
          <button>Serach</button>
        </form>
      </div>
       
      <div className={styles.Card}>
        {data.map((item, key) => {
            
        
             
          return (
            <Card
           
              key={item.source.id}
              name={item.source.name}
              title={item.title}
              description={item.description}
              urlToImage={item.urlToImage}
              url={item.url}
              author={item.author}
            />
          ); 
             
          
        })}
      </div>
    </main>
  );
}
