/* eslint-disable react/no-danger */
import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { Fill } from 'react-slot-fill';

const CustomHtml = ({ customHtml }) => {
  console.log('custom html:', customHtml);
  return customHtml.map(({ name, content }) => (
    <Fill key={name} name={name}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Fill>
  ));
};

CustomHtml.propTypes = {
  customHtml: arrayOf(
    shape({
      name: string,
      content: string,
    }),
  ),
};

CustomHtml.defaultProps = {
  customHtml: [],
};

export default CustomHtml;
