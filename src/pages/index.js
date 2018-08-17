import React from 'react';
import s from './index.module.css';

const Home = ({ data }) => (
  <div>
  <div className={s.homepage}>
      <div className={s.hero} style={{backgroundImage: `url(${data.homepage.hero.url})`}}>
          <h1 className={s.title}>{data.homepage.heroText}</h1>
      </div>
    </div>
    <div className={s.row}>
      <div className={s.textInsideImage} className={s.column}>
        <img className={s.image} src={data.homepage.about.url} alt="" />
          {data.homepage.abouttext}
      </div>
      <div className={s.textInsideImage} className={s.column} >  
        <img className={s.image} src={data.homepage.cv.url} alt="" />
          {data.homepage.works}
          <br/>
          {data.homepage.cvtext}
      </div>
      <div className={s.textInsideImage} className={s.column}>
        <img className={s.image} src={data.homepage.contact.url} alt="" />
          {data.homepage.contacttext}
      </div>
    </div>
  </div>
)

export default Home;

export const query = graphql`
  query IndexQuery {
    homepage: datoCmsHomepage {
      heroText
      hero {
        url
      }
      abouttext
      about {
        url
      }
      cvtext
      works
      cv {
        url
      }
      contacttext
      contact {
        url
      }
    }
  }
`

