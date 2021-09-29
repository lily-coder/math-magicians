/* eslint no-unused-vars: 0 no-undef: 0 */
import React from 'react';
import { useParams } from 'react-router-dom';

const Home = () => {
  const top = useParams();
  return (
    <div className='home-content'>
      <h2 className='home-h2'>Welcome to our page!</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis
        quis sem quis tincidunt. Donec ut risus a enim consequat aliquet.
        Curabitur et metus vitae nunc porttitor accumsan vitae at magna. Nunc
        scelerisque ante est, eget tincidunt ipsum sodales non. Nunc maximus,
        urna ut finibus lobortis, erat orci tristique massa, semper elementum
        lorem felis sit amet massa. Etiam elementum fringilla odio, ac dignissim
        orci pulvinar quis. Cras tempor, sem sed commodo elementum, odio elit
        venenatis nunc, nec pellentesque justo sapien ut metus. Curabitur quis
        tellus ac odio efficitur ultrices eget sit amet risus. Quisque commodo
        augue nisl, sed consectetur dui vestibulum sed.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis
        quis sem quis tincidunt. Donec ut risus a enim consequat aliquet.
        Curabitur et metus vitae nunc porttitor accumsan vitae at magna. Nunc
        scelerisque ante est, eget tincidunt ipsum sodales non. Nunc maximus,
        urna ut finibus lobortis, erat orci tristique massa, semper elementum
        lorem felis sit amet massa. Etiam elementum fringilla odio, ac dignissim
        orci pulvinar quis. Cras tempor, sem sed commodo elementum, odio elit
        venenatis nunc, nec pellentesque justo sapien ut metus. Curabitur quis
        tellus ac odio efficitur ultrices eget sit amet risus. Quisque commodo
        augue nisl, sed consectetur dui vestibulum sed.
      </p>
    </div>
  );
};
export default Home;