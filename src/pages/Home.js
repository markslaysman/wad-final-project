import Card from '../components/layout/ui/Card';
import classes from './Home.module.css';

function HomePage() {
    return (
        <div className={classes.pageInfoContainer}>
            <div>
                The purpose of this site it to show two React projects I worked on while attending a Promineo Tech Bootcamp for Front End Developement.
            </div>
        </div>
    );
}

export default HomePage;