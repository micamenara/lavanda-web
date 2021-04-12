// Photo by <a href="https://unsplash.com/@anniespratt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Annie Spratt</a> on <a href="https://unsplash.com/s/photos/lavender?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
import styles from './Hero.module.css'; 
import HeroImage from '../../../assets/hero.jpg';

const Hero = () => {
	return <div className={styles.hero}>
		<div className={styles.heroContainer}>
			<div className={styles.heroCover} />
			<img className={styles.heroImage} src={HeroImage} alt="Lavanda" />
		</div>
		<div className={styles.heroContent}>
			<h1 className={styles.heroContentTitle}>LAVANDA</h1>
		</div>
	</div>;
}

export default Hero;
