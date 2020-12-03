import React from 'react'
import { useState } from 'react';
import { Collapse, Button, CardBody, Card, ButtonGroup } from 'reactstrap';
import '../index.css'
import {BrowserRouter as Router, Switch, Route, Link, useParams} from 'react-router-dom';

const Filter = (props) => {
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
  
  //Ingredienser checkboxes
  const [cSelected, setCSelected] = useState([]);
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
          <button>Back</button>
        </Link>
        <h2>FILTRERA DRINKAR</h2>
      </div>
      <div>
      <Button className='filterCategory' onClick={toggle1} style={{ marginBottom: '1rem' }}>BASSPRIT</Button>
        <Collapse isOpen={basOpen}>
          <Card>
            <CardBody>
              <Button className='filterButt' onClick={() => onCheckboxBtnClick("champange")} active={cSelected.includes("champange")}>CHAMPANGE</Button >
              <Button className='filterButt' onClick={() => onCheckboxBtnClick("gin")} active={cSelected.includes("gin")}>GIN</Button>
              <Button className='filterButt' onClick={() => onCheckboxBtnClick("likör")} active={cSelected.includes("likör")}>LIKÖR</Button>
              <Button className='filterButt' onClick={() => onCheckboxBtnClick("rom")} active={cSelected.includes("rom")}>ROM</Button>
              <Button className='filterButt' onClick={() => onCheckboxBtnClick("tequila")} active={cSelected.includes("tequila")}>TEQUILA</Button>
              <Button className='filterButt' onClick={() => onCheckboxBtnClick("vodka")} active={cSelected.includes("vodka")}>VODKA</Button>
              <Button className='filterButt' onClick={() => onCheckboxBtnClick("whiskey")} active={cSelected.includes("whiskey")}>WHISKEY</Button>
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
                      <Button className='filterButt' onClick={() => onCheckboxBtnClick("apelsin")} active={cSelected.includes("apelsin")}>APELSIN</Button>
                      <Button className='filterButt' onClick={() => onCheckboxBtnClick("basilika")} active={cSelected.includes("basilika")}>BASILIKA</Button>
                      <Button className='filterButt' onClick={() => onCheckboxBtnClick("björnbär")} active={cSelected.includes("björnbär")}>BJÖRNBÄR</Button>
                    </CardBody>
                  </Card>
                </Collapse>
              </div>
              <div>
                <Button className='filterInnerCategory' onClick={toggle22} style={{ marginBottom: '1rem' }}>FRUKTJUICER</Button>
                <Collapse isOpen={fruOpen}>
                  <Card>
                    <CardBody>
                      <Button className='filterButt'>lll</Button>
                      <Button className='filterButt'>aaa</Button>
                      <Button className='filterButt'>ddd</Button>
                    </CardBody>
                  </Card>
                </Collapse>
              </div>
              <div>
                <Button className='filterInnerCategory' onClick={toggle23} style={{ marginBottom: '1rem' }}>LÄSK & ÖVRIGA DRYCKER</Button>
                <Collapse isOpen={looOpen}>
                  <Card>
                    <CardBody>
                      <Button className='filterButt'>lll</Button>
                      <Button className='filterButt'>aaa</Button>
                      <Button className='filterButt'>ddd</Button>
                    </CardBody>
                  </Card>
                </Collapse>
              </div>
              <div>
              <Button className='filterInnerCategory' onClick={toggle24} style={{ marginBottom: '1rem' }}>SPRITDRYCKER</Button>
              <Collapse isOpen={sprOpen}>
                <Card>
                  <CardBody>
                    <Button className='filterButt'>lll</Button>
                    <Button className='filterButt'>aaa</Button>
                    <Button className='filterButt'>ddd</Button>
                  </CardBody>
                </Card>
              </Collapse>
              </div>
              <div>
                <Button className='filterInnerCategory' onClick={toggle25} style={{ marginBottom: '1rem' }}>SYRUPS & DRINKMIXERS</Button>
                <Collapse isOpen={syrOpen}>
                  <Card>
                    <CardBody>
                      <Button className='filterButt'>lll</Button>
                      <Button className='filterButt'>aaa</Button>
                      <Button className='filterButt'>ddd</Button>
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
              <Button className='filterButt' onClick={() => onCheckboxBtnClick("blå")} active={cSelected.includes("blå")}>BLÅ</Button>
              <Button className='filterButt' onClick={() => onCheckboxBtnClick("grön")} active={cSelected.includes("grön")}>GRÖN</Button>
              <Button className='filterButt' onClick={() => onCheckboxBtnClick("gul")} active={cSelected.includes("gul")}>GUL</Button>
              <Button className='filterButt' onClick={() => onCheckboxBtnClick("röd")} active={cSelected.includes("röd")}>RÖD</Button>
              <Button className='filterButt' onClick={() => onCheckboxBtnClick("rosa")} active={cSelected.includes("rosa")}>ROSA</Button>
              <Button className='filterButt' onClick={() => onCheckboxBtnClick("vit")} active={cSelected.includes("vit")}>VIT</Button>
              <Button className='filterButt' onClick={() => onCheckboxBtnClick("övrigt")} active={cSelected.includes("övrigt")}>ÖVRIGT</Button>
            </CardBody>
          </Card>
        </Collapse>
      </div>
      <div>
      <Button className='filterCategory' onClick={toggle4} style={{ marginBottom: '1rem' }}>SMAK</Button>
        <Collapse isOpen={smaOpen}>
          <Card>
            <CardBody>
              <Button className='filterButt' onClick={() => onCheckboxBtnClick("fruktig")} active={cSelected.includes("fruktig")}>FRUKTIG</Button>
              <Button className='filterButt' onClick={() => onCheckboxBtnClick("fräsch")} active={cSelected.includes("fräsch")}>FRÄSCH</Button>
              <Button className='filterButt' onClick={() => onCheckboxBtnClick("sur")} active={cSelected.includes("sur")}>SUR</Button>
              <Button className='filterButt' onClick={() => onCheckboxBtnClick("söt")} active={cSelected.includes("söt")}>SÖT</Button>
            </CardBody>
          </Card>
        </Collapse>
      </div>
      <p>Selected: {JSON.stringify(cSelected)}</p>
    </div>
  )
}

export default Filter