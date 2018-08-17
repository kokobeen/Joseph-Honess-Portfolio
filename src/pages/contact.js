import React from 'react';

const contact = ({data}) => (
<div style={{ background: `url(${data.contact.background.url})`}}>
    
</div>
)

export default contact;

export const query = graphql`
  query contactQuery {
    contact: datoCmsContact{
        background{
            url
        }
    }
  }
`