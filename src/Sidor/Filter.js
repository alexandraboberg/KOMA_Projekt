import React from 'react'
import { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import '../index.css'
import filterCategory from '../Components/filterCategory'
import filterInnerCategory from '../Components/filterInnerCategory'
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
  let bas = "BASSPRIT"

  const [ingOpen, set2Open] = useState(false);
  const toggle2 = () => set2Open(!ingOpen);
  let ing = "INGREDIENSER"

  const [farOpen, set3Open] = useState(false);
  const toggle3 = () => set3Open(!farOpen);
  let far = "FÄRG"

  const [smaOpen, set4Open] = useState(false);
  const toggle4 = () => set4Open(!smaOpen);
  let sma = "SMAK"

  const [fboOpen, set21Open] = useState(false);
  const toggle21 = () => set21Open(!fboOpen);
  let fbo = "FRUKT, BÄR & ÖRTER"

  const [fruOpen, set22Open] = useState(false);
  const toggle22 = () => set22Open(!fruOpen);
  let fru = "FRUKTJUICER"

  const [looOpen, set23Open] = useState(false);
  const toggle23 = () => set23Open(!looOpen);
  let loo = "LÄSK & ÖVRIGA DRYCKER"

  const [syrOpen, set24Open] = useState(false);
  const toggle24 = () => set24Open(!syrOpen);
  let syr = "SYRUPS & DRINKMIXERS"

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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
          </button>
        </Link>
        <h2 className='headertext'>FILTRERA DRINKAR</h2>
      </div>
      <div className='content3'>
        <div>
          {filterCategory(toggle1, bas, basOpen)}
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
          {filterCategory(toggle2, ing, ingOpen)}
          <Collapse isOpen={ingOpen}>
            <Card>
              <CardBody>
              <div>
                {filterInnerCategory(toggle21, fbo, fboOpen)}
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
                  {filterInnerCategory(toggle22, fru, fruOpen)}
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
                  {filterInnerCategory(toggle23, loo, looOpen)}
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
                  {filterInnerCategory(toggle24, syr, syrOpen)}
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
          {filterCategory(toggle3, far, farOpen)}
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
          {filterCategory(toggle4, sma, smaOpen)}
          <Collapse isOpen={smaOpen}>
            <Card>
              <CardBody>
              {smak.map((d) => <Button className='filterButt' onClick={() => onCheckboxBtnClickSma(d)} 
                      active={smaSelected.includes(d)}>{d.toUpperCase()}</Button>)}
              </CardBody>
            </Card>
          </Collapse>
        </div>
        <div className='plsCenter'>
          <Link className='searchLink' to={link}>
            <Button className ='searchButton'>KLAR</Button>
          </Link>
        </div>
      </div>
    </div>
  )


}

export default Filter