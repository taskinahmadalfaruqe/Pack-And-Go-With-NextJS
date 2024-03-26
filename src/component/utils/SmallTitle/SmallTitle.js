import React from 'react';

const SmallTitle = ({SmallTitle, SmallDescription}) => {
    return (
        <div className='text-start font-medium text-ParagraphColor space-y-3 max-w-xs'>
            <div className='text-HeadingColor font-semibold font-Truculenta text-2xl'>{SmallTitle}</div>
            <div className='pl-1'>{SmallDescription}</div>
        </div>
    );
};

export default SmallTitle;