import React from 'react'
import { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
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
  
  return (
    <div className='screen'>
      <div className='header'>
        <Link to='/'>
          <button className='back-button'>Back</button>
        </Link>
        <h2>FILTRERA DRINKAR</h2>
      </div>
      <div>
      <Button color="primary" onClick={toggle1} style={{ marginBottom: '1rem' }}>BASSPRIT</Button>
        <Collapse isOpen={basOpen}>
          <Card>
            <CardBody>
              <Button className='filterButt'>CHAMPANGE</Button >
              <Button className='filterButt'>GIN</Button>
              <Button className='filterButt'>LIKÖR</Button>
              <Button className='filterButt'>ROM</Button>
              <Button className='filterButt'>TEQUILA</Button>
              <Button className='filterButt'>VODKA</Button>
              <Button className='filterButt'>WHISKEY</Button>
            </CardBody>
          </Card>
        </Collapse>
      </div>
      <div>
      <Button color="primary" onClick={toggle2} style={{ marginBottom: '1rem' }}>INGREDIENSER</Button>
        <Collapse isOpen={ingOpen}>
          <Card>
            <CardBody>
            <div>
              <Button color="primary" onClick={toggle21} style={{ marginBottom: '1rem' }}>FRUKT, BÄR & ÖRTER</Button>
                <Collapse isOpen={fboOpen}>
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
                <Button color="primary" onClick={toggle22} style={{ marginBottom: '1rem' }}>FRUKTJUICER</Button>
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
                <Button color="primary" onClick={toggle23} style={{ marginBottom: '1rem' }}>LÄSK & ÖVRIGA DRYCKER</Button>
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
              <Button color="primary" onClick={toggle24} style={{ marginBottom: '1rem' }}>SPRITDRYCKER</Button>
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
                <Button color="primary" onClick={toggle25} style={{ marginBottom: '1rem' }}>SYRUPS & DRINKMIXERS</Button>
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
      <Button color="primary" onClick={toggle3} style={{ marginBottom: '1rem' }}>FÄRG</Button>
        <Collapse isOpen={farOpen}>
          <Card>
            <CardBody>
              <Button className='filterButt'>BLÅ</Button>
              <Button className='filterButt'>GRÖN</Button>
              <Button className='filterButt'>GUL</Button>
              <Button className='filterButt'>RÖD</Button>
              <Button className='filterButt'>ROSA</Button>
              <Button className='filterButt'>VIT</Button>
              <Button className='filterButt'>ÖVRIGT</Button>
            </CardBody>
          </Card>
        </Collapse>
      </div>
      <div>
      <Button color="primary" onClick={toggle4} style={{ marginBottom: '1rem' }}>SMAK</Button>
        <Collapse isOpen={smaOpen}>
          <Card>
            <CardBody>
              <Button className='filterButt'>FRUKTIG</Button>
              <Button className='filterButt'>FRÄSCH</Button>
              <Button className='filterButt'>SUR</Button>
              <Button className='filterButt'>SÖT</Button>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    </div>
  )
}

export default Filter