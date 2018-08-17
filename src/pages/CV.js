import React from 'react';


const work = ({data}) => (
    <div>
        {data.CV.text}
    </div>
)

export default work;

export const query = graphql`
  query cvQuery {
    CV:  datoCmsCv {
        text
    }
  }
`