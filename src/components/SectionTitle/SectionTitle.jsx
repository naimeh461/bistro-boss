import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='w-3/12 mx-auto text-center my-8'>
            <p className='text-yellow-500 mb-3'>---- {subHeading} ----</p>
            <h3 className='text-4xl uppercase border-y-4 py-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;