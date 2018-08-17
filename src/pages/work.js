import React from 'react';
import Link from "gatsby-link";

const work = ({data}) => (
    <div>
        <Link to="/CV/" ><img src="{data.work.hero.url}" alt=""/></Link>
        <h1>
            {data.work.cvhero}
        </h1>
    </div>
)

export default work;

export const query = graphql`
  query workQuery {
    work:  datoCmsWork {
        cvhero
        hero {
        	url
        }
    }
  }
`