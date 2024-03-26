import React from 'react';

const CommonTitle = ({SectionTitle, SectionDescription}) => {
    return (
        <div className='flex gap-5 flex-col max-w-xl text-center mx-auto'>
            <p className='text-2xl font-semibold text-HeadingColor capitalize font-Truculenta'>{SectionTitle}</p>
            <p className='text-sm text-ParagraphColor'>{SectionDescription}</p>
        </div>
    );
};

export default CommonTitle;