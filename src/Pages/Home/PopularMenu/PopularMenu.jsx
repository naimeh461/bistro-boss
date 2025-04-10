import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../../Shared/MenuItem/MenuItem';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {
   const [menu] = useMenu(); // using custom hook
   const popular = menu.filter(item => item.category === "popular");
    
    return (
        <>
            <SectionTitle 
            heading="From Our Menu"
            subHeading="Popular Items"
            ></SectionTitle>
            <div className='grid md: grid-cols-2 gap-10 mb-14'>
                {
                    popular.map(item => <MenuItem
                    key = {item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
        </>
    );
};

export default PopularMenu;