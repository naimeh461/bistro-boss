import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import menuImg from "../../../assets/menu/banner3.jpg"
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
const Menu = () => {
    const  [menu] = useMenu();
    const desserts = menu.filter(item => item.category === "dessert");
    const soup = menu.filter(item => item.category === "soup");
    const salad = menu.filter(item => item.category==="salad" );
    const offer = menu.filter(item => item.category === "offered")
    return (
        <div>
            <Helmet>
             <title>Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            <SectionTitle 
            subHeading={"Don't Miss"}
            heading={"Today's Offer"}
            ></SectionTitle>
            <MenuCategory 
            items={offer}
            ></MenuCategory>
        </div>
    );
};

export default Menu;