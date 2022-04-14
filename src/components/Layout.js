//  Components
import Header from './Header';
import Footer from './Footer';
//  Styles
import styles from '../styles/styles.module.css';

const Layout  = (props) => (
    <>
        <Header />
            <main className={styles.mainLayout__container}>
                {props.children}
            </main>
        <Footer />
    </>
)
export default Layout;