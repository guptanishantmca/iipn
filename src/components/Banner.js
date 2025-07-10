import React, { useEffect, useState } from 'react';

export default function Banner() {
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    fetch('http://localhost/iipn-wordpress/wp-json/wp/v2/pages?slug=home')
      .then(res => res.json())
      .then(data => setBanner(data[0].acf)); // From ACF fields
  }, []);

  if (!banner) return null;

  return (
    <div className="bg-blue-200 p-20 text-center">
      <h1 className="text-4xl font-bold">{banner.banner_title}</h1>
      <p className="text-lg mt-2">{banner.banner_subtitle}</p>
    </div>
  );
}
