import classes from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/ernest.png"
          alt="An image showing Ernest"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, Im Ernest</h1>
      <p>
        I blog about web development - especially frontend frameworks like Next
        or React.
      </p>
    </section>
  );
}
