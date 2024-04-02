import style from './hero.module.css';

type heroParams = {
  heroImageUrl: string;
};

export default function Hero({ heroImageUrl }: heroParams) {
  return (
    <div
      className={style.heroMainContainer}
      style={{ backgroundImage: `url(${heroImageUrl})` }}
    >
      <div className={style.promotionContainer}>
        <h2>Letnie promocje do -70%!</h2>
        <p>Tylko najlepsze okazje!</p>
        <button>SPRAWDŹ PRODUKTY</button>
      </div>
    </div>
  );
}
