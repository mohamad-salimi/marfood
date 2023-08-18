//Components 
import Attributes from '../../modules/attributes/Attributes';
import Banner from '../../modules/banner/Banner';
import Companies from '../../modules/companies/Companies';
import Definition from '../../modules/definition/Definition';
import Guide from '../../modules/guide/Guide';
import Instruction from '../../modules/instruction/Instruction';
import Restrictions from '../../modules/restrictions/Restrictions';
//Styles
import styles from './HomePage.module.css';


const HomePage = () => {
    return (
        <div className={styles.container}>
            <Banner />
            <Attributes />
            <Definition />
            <Companies />
            <Instruction />
            <Guide />
            <Restrictions />
        </div>
    );
};

export default HomePage;