import React, { useEffect, useState } from 'react';

export default function Footer() {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    fetch('http://localhost/iipn-wordpress/wp-json/wp/v2/pages?slug=global-settings')
      .then(res => res.json())
      .then(data => setFooterData(data[0].acf));
  }, []);

  if (!footerData) return null;

  return (
    <footer className="bg-gray-900 text-white p-4 text-center">
      <p>{footerData.footer_text}</p>
    </footer>
  );
}
