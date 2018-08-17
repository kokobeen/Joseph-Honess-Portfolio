import React from 'react';
import s from './index.module.css';

const About = ({ data }) => (
<div className={s.bgc} className={s.rowa}>
    <img className={s.image} className={s.montage} src={data.About.picturemontage.url} alt=""/>
    <div className={s.about} className={s.ggg}>
        <h1 className={s.hhh}>{data.About.title}</h1>
        <br/>
        <p className={s.ttt}>
            {data.About.para1}
        </p>
        <p className={s.ttt}>
            {data.About.para1}
        </p>
        <p className={s.ttt}>
            {data.About.para1}
        </p>
        <p className={s.ttt}>
            {data.About.para1}
        </p>
        <p className={s.ttt}>
            {data.About.para1}
        </p>
    </div>
</div>
)

export default About;

export const query = graphql`
    query aboutQuery {
        About: datoCmsAbout {
            title
            picturemontage {
              url
            }
            para1
            para2
            para3
            para4
            para5
        }
    }
`