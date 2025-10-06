import { useState } from 'react';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cover from '../../Shared/Cover/Cover';
import OrderTab from '../OrderTab/OrderTab';
import useMenu from '../../../hooks/useMenu';
import orderCoverImg from '../../../assets/shop/order.jpg';

const Order = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const desserts = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const pizza = menu.filter(item => item.category === 'pizza');
  const drinks = menu.filter(item => item.category === 'drinks');

  return (
    <div className="bg-yellow-200 min-h-screen">
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>

      <Cover img={orderCoverImg} title="Order Food" />

      <div className="max-w-7xl mx-auto px-4 py-10">
        <Tabs
          defaultIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          {/* Tab List */}
          <TabList className="flex flex-wrap justify-center gap-4 mb-8 border-b-2 border-gray-400">
            {categories.map((cat, i) => (
              <Tab
                key={i}
                className="px-5 py-2 font-semibold rounded-t-lg cursor-pointer transition-all duration-300 text-gray-700 hover:bg-orange-100"
                selectedClassName="bg-orange-500 text-white shadow-lg"
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </Tab>
            ))}
          </TabList>

          {/* Tab Panels */}
          <TabPanel>
            <OrderTab items={salad} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={desserts} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
