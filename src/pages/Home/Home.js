import { useContext } from 'react';
import { BoxIcon } from '../../components/BoxIcon/BoxIcon'
import { ContactBox } from '../../components/ContactBox/ContactBox';
import { ThemeContext } from '../../context/ThemeContext/ThemeContext';
import { ReactComponent as HiIcon } from '../../icons/hi.svg';
import './Home.scss'

export const Home = () => {
    // state and context
    const [theme] = useContext(ThemeContext);
    // render
    return(
        <div className="home-body">
            {/* left */}
            <div className="__left">
                <BoxIcon Icon={HiIcon} text="Alessio" label="hi i'm" />
                <div className="__job-title">
                    <p>full-stack</p>
                    <p className={`--color-${theme.color}`}>developer</p>
                </div>
                <div className={`__email --color-${theme.color}`}>
                    alessio.farinelli.developer@gmail.com
                </div>
                <ContactBox />
            </div>
        </div>
    );
}