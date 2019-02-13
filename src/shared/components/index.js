/* eslint-disable react/no-danger */
import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { inject } from 'mobx-react';
import { Fill } from 'react-slot-fill';

const CustomHtml = ({ fills }) =>
  fills.map(({ name, content }) => (
    <Fill key={name} name={name}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Fill>
  ));

CustomHtml.propTypes = {
  fills: arrayOf(
    shape({
      name: string,
      content: string,
    }),
  ).isRequired,
};

export default inject(({ stores: { customHtml } }) => ({
  fills: customHtml.fills,
}))(CustomHtml);
