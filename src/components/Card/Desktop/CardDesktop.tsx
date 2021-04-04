import CardProps from '../models/props.interface';
import './CardDesktop.scss';

export const CardDesktop = ({ dimension, data }: CardProps) => {
    return (
        <div className={`card-desktop card-desktop--${dimension}`}>
            <div className="__image-container">
                <img className="__image" src={data.imagePath} alt="" />
            </div>
            <div className="__info">
                <div className="date">
                    {data.date}
                </div>
                <div className="title">
                    {data.title}
                </div>
                <div className="description">
                    {data.description}    
                </div>
            </div>
        </div>
    );
}