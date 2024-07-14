import style from './fullWidthButton.module.css';
type FullWidthButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export default function FullWidthButton({
  children,
  onClick,
}: FullWidthButtonProps) {
  return (
    <button onClick={onClick} className={style.cartButton}>
      {children}
    </button>
  );
}
