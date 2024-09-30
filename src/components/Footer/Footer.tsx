import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className="relative z-10 bg-black bg-opacity-80 text-amber-200 py-8 border-t-2 border-amber-900 w-full">

        <div className={styles.copyright}>
          <small>&copy; {new Date().getFullYear()} Clavet Motor Inn</small>
        </div>
    </footer>
  );
}