import React from 'react';


const SlideFacts = ({item}) => {
    return (
        <div className="slide-factign">
            <img src={item.imgUrl} alt="slide image"/>
            <p className="facts-slide-desc">
                {item.desc}
            </p>
        </div>
    );
};

export default SlideFacts;