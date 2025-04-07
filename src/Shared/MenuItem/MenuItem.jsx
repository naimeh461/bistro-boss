import React, { useEffect } from 'react';

const MenuItem = ({item}) => {
    const {image, price,name, recipe} = item;
    return (
        <div className='flex gap-4'>
            <img style={{borderRadius: "0 200px 200px 200px"}} src={image} className='w-[120px] ' alt="" />
            <div>
                <h3>{name}</h3>
                <p>{recipe}</p>
                <div>
                    <p className='text-yellow-400'>$ {price}</p>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;