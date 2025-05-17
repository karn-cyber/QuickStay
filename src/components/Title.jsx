import React from 'react';

const Title = ({ title, subTitle, align = 'text-center', font = 'font-playfair' }) => {
  return (
    <div className={`${align} mb-6`}>
      <h1 className={`text-4xl md:text-[40px] font-semibold ${font}`}>
        {title}
      </h1>
      <p className="text-gray-600 mt-2">{subTitle}</p>
    </div>
  );
};

export default Title;
