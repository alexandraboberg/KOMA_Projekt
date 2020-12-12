import { Button } from 'reactstrap';

function filterCategory(toggle, category , open) {
    return (
        <Button className='filterCategory' onClick={toggle} style={{ marginBottom: '1rem' }}> <h3 className='category'>{category}</h3>
            <div className='downbuttondiv'>
                <svg className={'downbutton' + (open ? ' active' : '')} width="40" height="40" viewBox="0 7 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="-1" x2="12.5128" y2="-1" transform="matrix(0.828881 0.559426 -0.587506 0.80922 10 17)" stroke="black" strokeWidth="2"/>
                    <line y1="-1" x2="12.5128" y2="-1" transform="matrix(-0.82888 0.559427 0.587505 0.809221 30.7433 17)" stroke="black" strokeWidth="2"/>
                </svg>
            </div>
            <svg width="353" height="1" viewBox="0 0 353 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.5" x2="352.006" y2="0.5" stroke="#CACCC9"/>
            </svg>
        </Button>
    )
}

export default filterCategory