import React from 'react';
import { Item, Header } from 'semantic-ui-react';
import image3 from '../../../assets/images/image3.jpg';
import image5 from '../../../assets/images/image5.jpg';
import image22 from '../../../assets/images/image22.jpg';
import image28 from '../../../assets/images/image28.jpg';

const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const Institutionality = () => {
  return (
    <Item.Group divided>
      <Item>
        <Item.Image size="medium" src={image3} />
        <Item.Content>
          <Header size="huge">Misión</Header>
          <Item.Description>
            <p>{loremIpsum}</p>
          </Item.Description>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image size="medium" src={image5} />
        <Item.Content>
          <Header size="huge">Visión</Header>
          <Item.Description>
            <p>{loremIpsum}</p>
          </Item.Description>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image size="medium" src={image22} />
        <Item.Content>
          <Header size="huge">Objetivos</Header>
          <Item.Description>
            <p>{loremIpsum}</p>
          </Item.Description>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image size="medium" src={image28} />
        <Item.Content>
          <Header size="huge">Alcance</Header>
          <Item.Description>
            <p>{loremIpsum}</p>
          </Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>
  );
};

export default Institutionality;
