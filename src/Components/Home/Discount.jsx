import React from 'react';

export default function Discount() {
  return (
    <>
    
   <div className='row my-4'>
    <div className='col-md-12'>
    <h2 className='text-center fw-bold'>جشنواره تخفیف</h2>
    </div>
   </div>
    <div className='row'>
        <div className='col-md-4 px-3 pb-2'>
        <div className="containerDiscount">
        <div className="cardDiscount">
            <div className="imgBxDiscount">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike01a.png" alt="nOdyssey React Shield"/>
            </div>
            <div className="contentBxDiscount">
                <h2>کتونی Odyssey React Shield</h2>
                <div className="sizeDiscount">
                    <h3>سایز</h3>
                    <span>36</span>
                   <span>37</span>
                </div>
                <a href="#">40%تخفیف</a>
            </div>
            </div>
        </div>
        </div>

        <div className='col-md-4 px-3 pb-2'>
        <div className="containerDiscount">
        <div className="cardDiscount">
            <div className="imgBxDiscount">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/26438/shoe.png" alt="nike-air-shoe1"/>
            </div>

            <div className="contentBxDiscount">
                <h2>کتونی Roshe Run</h2>
                <div className="sizeDiscount">
                    <h3>سایز </h3>
                    <span>40</span>
                   <span>43</span>
                </div>
                <a href="#">26%تخفیف</a>
            </div>
        </div>
        </div>
        </div>

        <div className='col-md-4 px-3 pb-2'>
        <div className="containerDiscount">
        <div className="cardDiscount">
            <div className="imgBxDiscount">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike02a.png" alt="nike-air-shoe2"/>
            </div>
            <div className="contentBxDiscount">
                <h2>کتونی Air Max 97</h2>
                <div className="sizeDiscount">
                    <h3>سایز</h3>
                    <span>41</span>
                   <span>36</span>
                </div>
                <a href="#">18%تخفیف</a>
            </div>
        </div>
        </div>
        </div>
    </div>
    </>
  )
}
