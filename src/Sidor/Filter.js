import React from 'react'
import { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import '../index.css'
import {BrowserRouter as Router, Switch, Route, Link, useParams} from 'react-router-dom';

//Arrays med namn på drink artiklar
const bassprit = ["champange", "gin", "likör", "rom", "tequila", "vodka", "whiskey"]
const frubär = ["apelsin", "basilika", "björnbär", "blåbär", "citron", "granatäpple", "gurka", "hallon", "jordgubbar", 
                "kanel", "kardemumma", "koriander", "lime", "mynta", "nejlika", "passionsfrukt", "persika", "päron",
                "russin", "vattenmelon", "äpple"]
const fruju = ["ananasjuice","apelsinjuice", "citronjuice", "granatäpplejuice","grapefruktjuice", "limejuice",
                "mangojuice", "passionsfruktjuice", "tranbärsjuice", "äppeljuice"]
const läsk = ["7 up", "coca-cola", "tonic water", "fruktsoda", "ginger ale", "ginger beer", "grape tonic", "grädde",
              "hallonsoda", "kaffe", "lemonad", "mjölk", "pommac", "pucko", "päroncider", "red bull", "schweppes bitter lemon",
              "schweppes indian tonic", "sodavatten", "sprite", "tonic", "varm choklad", "vatten", "äppelcider"]
const syru = ["angostura bitters", "coco lópez cream of coconut", "grenadin", "kanelsockerlag", "monin bubblegum-syrup",
              "rose's lime", "saffranssockerlag", "sockerlag", "äggvita"]
const färg = ["blå", "grön", "gul", "röd", "rosa", "vit"]
const smak = ["fruktig", "fräsch", "sur", "söt"]

const Filter = (props) => {
  //Toggle för kategorier
  const [basOpen, set1Open] = useState(false);
  const toggle1 = () => set1Open(!basOpen);

  const [ingOpen, set2Open] = useState(false);
  const toggle2 = () => set2Open(!ingOpen);

  const [farOpen, set3Open] = useState(false);
  const toggle3 = () => set3Open(!farOpen);

  const [smaOpen, set4Open] = useState(false);
  const toggle4 = () => set4Open(!smaOpen);

  const [fboOpen, set21Open] = useState(false);
  const toggle21 = () => set21Open(!fboOpen);

  const [fruOpen, set22Open] = useState(false);
  const toggle22 = () => set22Open(!fruOpen);
  
  const [looOpen, set23Open] = useState(false);
  const toggle23 = () => set23Open(!looOpen);

  const [sprOpen, set24Open] = useState(false);
  const toggle24 = () => set24Open(!sprOpen);
  
  const [syrOpen, set25Open] = useState(false);
  const toggle25 = () => set25Open(!syrOpen);
  
  //Toggle ingredienser checkboxes
  const [cSelected, setCSelected] = useState([]);
  //Lista av valda
  const onCheckboxBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  }

  return (
    <div className='screen'>
      <div className='header'>
        <Link to='/'>
          <button className='back-button'>Back</button>
        </Link>
        <h2>FILTRERA DRINKAR</h2>
      </div>
      <div>
      <Button className='filterCategory' onClick={toggle1} style={{ marginBottom: '1rem' }}>BASSPRIT</Button>
        <Collapse isOpen={basOpen}>
          <Card>
            <CardBody>
              {bassprit.map((d, i) => <Button className='filterButt' onClick={() => onCheckboxBtnClick(d)} 
              active={cSelected.includes(d)}>{d.toUpperCase()}</Button>)}
            </CardBody>
          </Card>
        </Collapse>
      </div>
      <div>
      <Button className='filterCategory' onClick={toggle2} style={{ marginBottom: '1rem' }}>INGREDIENSER</Button>
        <Collapse isOpen={ingOpen}>
          <Card>
            <CardBody>
            <div>
              <Button className='filterInnerCategory' onClick={toggle21} style={{ marginBottom: '1rem' }}>FRUKT, BÄR & ÖRTER</Button>
                <Collapse isOpen={fboOpen}>
                  <Card>
                    <CardBody>
                    {frubär.map((d) => <Button className='filterButt' onClick={() => onCheckboxBtnClick(d)} 
                    active={cSelected.includes(d)}>{d.toUpperCase()}</Button>)}
                    </CardBody>
                  </Card>
                </Collapse>
              </div>
              <div>
                <Button className='filterInnerCategory' onClick={toggle22} style={{ marginBottom: '1rem' }}>FRUKTJUICER</Button>
                <Collapse isOpen={fruOpen}>
                  <Card>
                    <CardBody>
                    {fruju.map((d) => <Button className='filterButt' onClick={() => onCheckboxBtnClick(d)} 
                    active={cSelected.includes(d)}>{d.toUpperCase()}</Button>)}
                    </CardBody>
                  </Card>
                </Collapse>
              </div>
              <div>
                <Button className='filterInnerCategory' onClick={toggle23} style={{ marginBottom: '1rem' }}>LÄSK & ÖVRIGA DRYCKER</Button>
                <Collapse isOpen={looOpen}>
                  <Card>
                    <CardBody>
                    {läsk.map((d) => <Button className='filterButt' onClick={() => onCheckboxBtnClick(d)} 
                    active={cSelected.includes(d)}>{d.toUpperCase()}</Button>)}
                    </CardBody>
                  </Card>
                </Collapse>
              </div>
              <div>
                <Button className='filterInnerCategory' onClick={toggle25} style={{ marginBottom: '1rem' }}>SYRUPS & DRINKMIXERS</Button>
                <Collapse isOpen={syrOpen}>
                  <Card>
                    <CardBody>
                    {syru.map((d) => <Button className='filterButt' onClick={() => onCheckboxBtnClick(d)} 
                    active={cSelected.includes(d)}>{d.toUpperCase()}</Button>)}
                    </CardBody>
                  </Card>
                </Collapse>
              </div>
            </CardBody>
          </Card>
        </Collapse>
      </div>
      <div>
      <Button className='filterCategory' onClick={toggle3} style={{ marginBottom: '1rem' }}>FÄRG</Button>
        <Collapse isOpen={farOpen}>
          <Card>
            <CardBody>
            {färg.map((d) => <Button className='filterButt' onClick={() => onCheckboxBtnClick(d)} 
            active={cSelected.includes(d)}>{d.toUpperCase()}</Button>)}
            </CardBody>
          </Card>
        </Collapse>
      </div>
      <div>
      <Button className='filterCategory' onClick={toggle4} style={{ marginBottom: '1rem' }}>SMAK</Button>
        <Collapse isOpen={smaOpen}>
          <Card>
            <CardBody>
            {smak.map((d) => <Button className='filterButt' onClick={() => onCheckboxBtnClick(d)} 
                    active={cSelected.includes(d)}>{d.toUpperCase()}</Button>)}
            </CardBody>
          </Card>
        </Collapse>
      </div>
      <p>Selected: {JSON.stringify(cSelected)}</p>
      <div>
        <Button className = 'searchButton' size= "lg">SÖK</Button>
      </div>
    </div>
  )
}

export default Filter