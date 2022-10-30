import React from 'react'
import { PointerStyle  } from './LinkStyle'


function Links() {
    const links = [
    {name: "Twitter Link",
      url: "https://twitter.com/Uj_silvia",
      id: "twitter"
    },
    {
      name: "Zuri Team",
      url: "https://training.zuri.team",
      id: "btn__zuri" 
    },
    {
      name: "Zuri Books",
      url: "http://books.zuri.team",
      id: "books"
    },
    {
      name: "Python Books",
      url: "https://books.zuri.team/python-for-beginners?ref_id=uju",
      id: "book__python"
    },
    {
      name: "Background Check for Coders",
      url: "https://background.zuri.team", 
      id: "pitch" 

   },
    {
      name: "Design Books",
      url: "https://books.zuri.team/design-rules",
      id: "book__design"
    },
  ];

  return (
    <PointerStyle>
    {
    links.map((val)=><a href={val.url} id={val.id} className="btn__link">{val.name}</a>
      )
    }
    </PointerStyle>
  )
}

export default Links