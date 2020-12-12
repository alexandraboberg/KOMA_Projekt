import { Button } from 'reactstrap';

function filterInnerCategory(toggle, category , open) {
    return (
        <Button className='filterInnerCategory' onClick={toggle} style={{ marginBottom: '1rem' }}><p className='innercat'>{category}</p>
            <svg className={'downButtonInner' + (open ? ' active' : '')} width="30" height="40" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="-1" x2="12.5128" y2="-1" transform="matrix(0.828881 0.559426 -0.587506 0.80922 10 17)" stroke="black" stroke-width="2"/>
                <line y1="-1" x2="12.5128" y2="-1" transform="matrix(-0.82888 0.559427 0.587505 0.809221 30.7432 17)" stroke="black" stroke-width="2"/>
            </svg>
            <svg width="331" height="2" viewBox="0 0 331 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.987793" y1="0.505859" x2="330.012" y2="0.505859" stroke="#CACCC9"/>
            </svg>
        </Button>
    )
}

export default filterInnerCategory