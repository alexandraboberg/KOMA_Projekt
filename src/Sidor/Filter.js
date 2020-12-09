import React from 'react'
import { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import '../index.css'
import { Link } from 'react-router-dom';

//Arrays med namn på drink artiklar
const bassprit = ["champagne", "gin", "likör", "rom", "tequila", "vodka", "whiskey"]
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
  
  //Toggle checkboxes
  const [basSelected, setbasSelected] = useState([]);
  const [ingSelected, setingSelected] = useState([]);
  const [farSelected, setfarSelected] = useState([]);
  const [smaSelected, setsmaSelected] = useState([]);

  const [ALLASelected, setALLASelected] = useState([]);

  //Lista av valda basspriter
  const onCheckboxBtnClickBas = (selected) => {
    const index = basSelected.indexOf(selected);
    if (index < 0) {
      basSelected.push(selected);
    } else {
      basSelected.splice(index, 1);
    }
    setbasSelected([...basSelected]);
  }
  //Lista av valda ingredienser
  const onCheckboxBtnClickIng = (selected) => {
    const index = ingSelected.indexOf(selected);
    if (index < 0) {
      ingSelected.push(selected);
    } else {
      ingSelected.splice(index, 1);
    }
    setingSelected([...ingSelected]);
  }
  //Lista av valda färger
  const onCheckboxBtnClickFar = (selected) => {
    const index = farSelected.indexOf(selected);
    if (index < 0) {
      farSelected.push(selected);
    } else {
      farSelected.splice(index, 1);
    }
    setfarSelected([...farSelected]);
  }
  //Lista av valda smaker
  const onCheckboxBtnClickSma = (selected) => {
    const index = smaSelected.indexOf(selected);
    if (index < 0) {
      smaSelected.push(selected);
    } else {
      smaSelected.splice(index, 1);
    }
    setsmaSelected([...smaSelected]);
  }

  //Länk till resultat sidan
  const link = '/Result/' + basSelected + '*' + ingSelected + '*' + farSelected + '*' + smaSelected

  var valda = basSelected.join(", ") + "; " + ingSelected.join(", ") + "; " + farSelected.join(", ") + "; " + smaSelected.join(", ") + "; "

  return (
    <div className='screen'>
      <div className='headerLine'/>
      <div className='header'>
        <Link to='/'>
          <button className='back-button'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
          </button>
        </Link>
        <h2>FILTRERA DRINKAR</h2>
      </div>
      <div className='content'>
        <div>
        <Button className='filterCategory' onClick={toggle1} style={{ marginBottom: '1rem' }}>BASSPRIT
        <svg className = 'downButton' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="-1" x2="12.5128" y2="-1" transform="matrix(0.828881 0.559426 -0.587506 0.80922 10 17)" stroke="black" stroke-width="2"/>
          <line y1="-1" x2="12.5128" y2="-1" transform="matrix(-0.82888 0.559427 0.587505 0.809221 30.7433 17)" stroke="black" stroke-width="2"/>
        </svg>
        <svg width="353" height="1" viewBox="0 0 353 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="0.5" x2="352.006" y2="0.5" stroke="#CACCC9"/>
        </svg>
        </Button>
          <Collapse isOpen={basOpen}>
            <Card>
              <CardBody>
                {bassprit.map((d, i) => <Button className='filterButt' onClick={() => onCheckboxBtnClickBas(d)} 
                active={basSelected.includes(d)}>{d.toUpperCase()}</Button>)}
              </CardBody>
            </Card>
          </Collapse>
        </div>
        <div>
        <Button className='filterCategory' onClick={toggle2} style={{ marginBottom: '1rem' }}>INGREDIENSER
        <svg className = 'downButton'width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="-1" x2="12.5128" y2="-1" transform="matrix(0.828881 0.559426 -0.587506 0.80922 10 17)" stroke="black" stroke-width="2"/>
          <line y1="-1" x2="12.5128" y2="-1" transform="matrix(-0.82888 0.559427 0.587505 0.809221 30.7433 17)" stroke="black" stroke-width="2"/>
        </svg>
        <svg width="353" height="1" viewBox="0 0 353 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="0.5" x2="352.006" y2="0.5" stroke="#CACCC9"/>
        </svg>
        </Button>
          <Collapse isOpen={ingOpen}>
            <Card>
              <CardBody>
              <div>
                <Button className='filterInnerCategory' onClick={toggle21} style={{ marginBottom: '1rem' }}>FRUKT, BÄR & ÖRTER
                  <svg className = 'downButtonInner' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="-1" x2="12.5128" y2="-1" transform="matrix(0.828881 0.559426 -0.587506 0.80922 10 17)" stroke="black" stroke-width="2"/>
                    <line y1="-1" x2="12.5128" y2="-1" transform="matrix(-0.82888 0.559427 0.587505 0.809221 30.7432 17)" stroke="black" stroke-width="2"/>
                  </svg>
                  <svg width="331" height="2" viewBox="0 0 331 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.987793" y1="0.505859" x2="330.012" y2="0.505859" stroke="#CACCC9"/>
                  </svg>

                </Button>
                  <Collapse isOpen={fboOpen}>
                    <Card>
                      <CardBody>
                      {frubär.map((d) => <Button className='filterButt' onClick={() => onCheckboxBtnClickIng(d)} 
                      active={ingSelected.includes(d)}>{d.toUpperCase()}</Button>)}
                      </CardBody>
                    </Card>
                  </Collapse>
                </div>
                <div>
                  <Button className='filterInnerCategory' onClick={toggle22} style={{ marginBottom: '1rem' }}>FRUKTJUICER
                    <svg className = 'downButtonInner' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line y1="-1" x2="12.5128" y2="-1" transform="matrix(0.828881 0.559426 -0.587506 0.80922 10 17)" stroke="black" stroke-width="2"/>
                      <line y1="-1" x2="12.5128" y2="-1" transform="matrix(-0.82888 0.559427 0.587505 0.809221 30.7432 17)" stroke="black" stroke-width="2"/>
                    </svg>
                    <svg width="331" height="2" viewBox="0 0 331 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="0.987793" y1="0.505859" x2="330.012" y2="0.505859" stroke="#CACCC9"/>
                    </svg>
                  </Button>
                  <Collapse isOpen={fruOpen}>
                    <Card>
                      <CardBody>
                      {fruju.map((d) => <Button className='filterButt' onClick={() => onCheckboxBtnClickIng(d)} 
                      active={ingSelected.includes(d)}>{d.toUpperCase()}</Button>)}
                      </CardBody>
                    </Card>
                  </Collapse>
                </div>
                <div>
                  <Button className='filterInnerCategory' onClick={toggle23} style={{ marginBottom: '1rem' }}>LÄSK & ÖVRIGA DRYCKER
                    <svg className = 'downButtonInner' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="-1" x2="12.5128" y2="-1" transform="matrix(0.828881 0.559426 -0.587506 0.80922 10 17)" stroke="black" stroke-width="2"/>
                        <line y1="-1" x2="12.5128" y2="-1" transform="matrix(-0.82888 0.559427 0.587505 0.809221 30.7432 17)" stroke="black" stroke-width="2"/>
                    </svg>
                    <svg width="331" height="2" viewBox="0 0 331 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="0.987793" y1="0.505859" x2="330.012" y2="0.505859" stroke="#CACCC9"/>
                    </svg>
                  </Button>
                  <Collapse isOpen={looOpen}>
                    <Card>
                      <CardBody>
                      {läsk.map((d) => <Button className='filterButt' onClick={() => onCheckboxBtnClickIng(d)} 
                      active={ingSelected.includes(d)}>{d.toUpperCase()}</Button>)}
                      </CardBody>
                    </Card>
                  </Collapse>
                </div>
                <div>
                  <Button className='filterInnerCategory' onClick={toggle25} style={{ marginBottom: '1rem' }}>SYRUPS & DRINKMIXERS
                    <svg className = 'downButtonInner' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="-1" x2="12.5128" y2="-1" transform="matrix(0.828881 0.559426 -0.587506 0.80922 10 17)" stroke="black" stroke-width="2"/>
                        <line y1="-1" x2="12.5128" y2="-1" transform="matrix(-0.82888 0.559427 0.587505 0.809221 30.7432 17)" stroke="black" stroke-width="2"/>
                    </svg>
                    <svg width="331" height="2" viewBox="0 0 331 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="0.987793" y1="0.505859" x2="330.012" y2="0.505859" stroke="#CACCC9"/>
                    </svg>
                  </Button>
                  <Collapse isOpen={syrOpen}>
                    <Card>
                      <CardBody>
                      {syru.map((d) => <Button className='filterButt' onClick={() => onCheckboxBtnClickIng(d)} 
                      active={ingSelected.includes(d)}>{d.toUpperCase()}</Button>)}
                      </CardBody>
                    </Card>
                  </Collapse>
                </div>
              </CardBody>
            </Card>
          </Collapse>
        </div>
        <div>
        <Button className='filterCategory' onClick={toggle3} style={{ marginBottom: '1rem' }}>FÄRG
          <svg className = 'downButton' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="-1" x2="12.5128" y2="-1" transform="matrix(0.828881 0.559426 -0.587506 0.80922 10 17)" stroke="black" stroke-width="2"/>
            <line y1="-1" x2="12.5128" y2="-1" transform="matrix(-0.82888 0.559427 0.587505 0.809221 30.7433 17)" stroke="black" stroke-width="2"/>
          </svg>
          <svg width="353" height="1" viewBox="0 0 353 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.5" x2="352.006" y2="0.5" stroke="#CACCC9"/>
          </svg>
        </Button>
          <Collapse isOpen={farOpen}>
            <Card>
              <CardBody>
              {färg.map((d) => <Button className='filterButt' onClick={() => onCheckboxBtnClickFar(d)} 
              active={farSelected.includes(d)}>{d.toUpperCase()}</Button>)}
              </CardBody>
            </Card>
          </Collapse>
        </div>
        <div>
        <Button className='filterCategory' onClick={toggle4} style={{ marginBottom: '1rem' }}>SMAK
        <svg className = 'downButton' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="-1" x2="12.5128" y2="-1" transform="matrix(0.828881 0.559426 -0.587506 0.80922 10 17)" stroke="black" stroke-width="2"/>
          <line y1="-1" x2="12.5128" y2="-1" transform="matrix(-0.82888 0.559427 0.587505 0.809221 30.7433 17)" stroke="black" stroke-width="2"/>
        </svg>
        <svg width="353" height="1" viewBox="0 0 353 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.5" x2="352.006" y2="0.5" stroke="#CACCC9"/>
        </svg>
        </Button>
          <Collapse isOpen={smaOpen}>
            <Card>
              <CardBody>
              {smak.map((d) => <Button className='filterButt' onClick={() => onCheckboxBtnClickSma(d)} 
                      active={smaSelected.includes(d)}>{d.toUpperCase()}</Button>)}
              </CardBody>
            </Card>
          </Collapse>
        </div>
        <p className = "valdaFilter">Valda filter: {valda}</p>
        <div>
          <Link className='searchLink' to={link}>
            <Button className ='searchButton'>KLAR</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Filter