import React from 'react';
import "./styles/styles.scss"
import Curso from './Curso'
import TopBar from './TopBar'
//Solo se puede retornar un elemento
const App = () => (
    <>
    <TopBar />
        <div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" alt="banner" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwXroMcDOyIpTkbWQaitmxd5ryNdA1i3QL8ENTlSprsa_RCb1h&usqp=CAU"/>
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Título del banner</p>
        <p> Subtítulo del banner</p>
        <a href="http://www.youtube.com" className="button">Botón del banner</a>
      </div>
    </div>
  </div>
</div>

<div className="ed-grid m-grid-4">
<Curso 
title="React desde cero" 
img="https://www.futbolred.com/files/article_main/files/crop/uploads/2018/05/26/5b09d2c02885b.r_1590520116395.0-4-680-344.jpeg" 
teacher="Omar Morales Ortega"
price="99"
/>
<Curso 
title="Java desde cero" 
img="https://i.ytimg.com/an_webp/NE6pANWJGuU/mqdefault_6s_480x270.webp?du=3000&sqp=CIWrgPcF&rs=AOn4CLBmq_k354XK3f6Ek8msZi14Wq9snw" 
teacher="Valeria Vargas"
price="199"
/><Curso 
title="Kotlin desde cero" 
img="https://i.ytimg.com/vi/5qap5aO4i9A/hq720_live.jpg?sqp=CMy0gPcF-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDkAiGWW28oqf34Y8Elq0dI20rWrA" 
teacher="Deborah Nonnis"
price="49"
/><Curso 
title="PHP desde cero" 
img="https://i.ytimg.com/an_webp/n1bsYo2Ndow/mqdefault_6s.webp?du=3000&sqp=CNyvgPcF&rs=AOn4CLCFrGv55JZdNiYGysLg_FAMAWefrg" 
teacher="Giorgia Cordiglia"
price="99"
/>
</div>
    </>
)

export default App;

