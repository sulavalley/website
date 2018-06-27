import React from 'react';
import { Image } from 'semantic-ui-react';
import image3 from './../../assets/images/image3.jpg';
import image5 from './../../assets/images/image5.jpg';
import image22 from './../../assets/images/image22.jpg';
import image28 from './../../assets/images/image28.jpg';

const Institutionality = () => {
  return (
    <div className="ui items">
      <div className="item" align="center">
        <div className="content">
          <h1>Misión</h1>
          <div className="description" style={{ maxWidth: '50%' }}>
            <p>
              Nulla aliquet elit non nulla pellentesque placerat sed malesuada
              metus. Fusce ac odio et augue convallis consequat. Fusce
              ullamcorper nulla vitae dui molestie tristique cursus suscipit
              massa. Suspendisse pulvinar quam sed orci bibendum vestibulum.
              Curabitur libero neque, interdum ornare mi et, auctor hendrerit
              lacus. Aliquam erat volutpat. In sollicitudin convallis hendrerit.
              In vel sodales diam, vitae sagittis massa. Nunc vulputate faucibus
              felis, efficitur semper turpis imperdiet quis.
            </p>
          </div>
        </div>
        <div className="image">
          <Image src={image3} />
        </div>
      </div>
      <div className="item">
        <div className="image">
          <Image src={image5} />
        </div>
        <div className="content" align="center">
          <h1>Visión</h1>
          <div className="description" style={{ maxWidth: '50%' }}>
            <p>
              Nulla aliquet elit non nulla pellentesque placerat sed malesuada
              metus. Fusce ac odio et augue convallis consequat. Fusce
              ullamcorper nulla vitae dui molestie tristique cursus suscipit
              massa. Suspendisse pulvinar quam sed orci bibendum vestibulum.
              Curabitur libero neque, interdum ornare mi et, auctor hendrerit
              lacus. Aliquam erat volutpat. In sollicitudin convallis hendrerit.
              In vel sodales diam, vitae sagittis massa. Nunc vulputate faucibus
              felis, efficitur semper turpis imperdiet quis.
            </p>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="content" align="center">
          <h1>Objetivos</h1>
          <div className="description" style={{ maxWidth: '50%' }}>
            <p>
              Nulla aliquet elit non nulla pellentesque placerat sed malesuada
              metus. Fusce ac odio et augue convallis consequat. Fusce
              ullamcorper nulla vitae dui molestie tristique cursus suscipit
              massa. Suspendisse pulvinar quam sed orci bibendum vestibulum.
              Curabitur libero neque, interdum ornare mi et, auctor hendrerit
              lacus. Aliquam erat volutpat. In sollicitudin convallis hendrerit.
              In vel sodales diam, vitae sagittis massa. Nunc vulputate faucibus
              felis, efficitur semper turpis imperdiet quis.
            </p>
          </div>
        </div>
        <div className="image">
          <Image src={image22} />
        </div>
      </div>
      <div className="item">
        <div className="image">
          <Image src={image28} />
        </div>
        <div className="content" align="center">
          <h1>Alcance</h1>
          <div className="description" style={{ maxWidth: '50%' }}>
            <p>
              Nulla aliquet elit non nulla pellentesque placerat sed malesuada
              metus. Fusce ac odio et augue convallis consequat. Fusce
              ullamcorper nulla vitae dui molestie tristique cursus suscipit
              massa. Suspendisse pulvinar quam sed orci bibendum vestibulum.
              Curabitur libero neque, interdum ornare mi et, auctor hendrerit
              lacus. Aliquam erat volutpat. In sollicitudin convallis hendrerit.
              In vel sodales diam, vitae sagittis massa. Nunc vulputate faucibus
              felis, efficitur semper turpis imperdiet quis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Institutionality;
