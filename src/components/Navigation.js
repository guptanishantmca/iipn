import React, { useEffect, useState } from 'react';

export default function Navigation() {
  const [navHtml, setNavHtml] = useState('');

 
    useEffect(() => {
    fetch('http://localhost/iipn-wordpress/wp-json/custom/v1/menu')
        .then(res => res.text()) // ✅ important!
      .then(setNavHtml)
      .catch(err => console.error('Menu fetch error:', err));
    }, []);
  if (!navHtml) return null;
  
console.log(navHtml);
  return (
    <nav
      className="bg-white p-4 shadow"
      dangerouslySetInnerHTML={{ __html: navHtml }}
    />
  );
}
