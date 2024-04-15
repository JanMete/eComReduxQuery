import style from './homeHero.module.css';

export default function HomeHero() {
  return (
    <section className={style.homeHeroContainer}>
      <h1>Welcome!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vero
        nesciunt accusamus.
      </p>
    </section>
  );
}
