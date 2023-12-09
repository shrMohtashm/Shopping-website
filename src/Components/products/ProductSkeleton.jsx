import React from 'react'
import { Col } from 'reactstrap'

export default function ProductSkeleton() {
    const skeletonStyles = {
        width: '95%',
        height: '370px',
        border :'3px solid #E7EDF1',
        marginBottom: '5px',
        borderRadius: '8px',
    }
    return (
        <Col lg='3' md='6' sm='12' xs='12' >
            <div style={skeletonStyles} className='border-none pt-2 px-3'>
                <div className=' my-2 skeletonAnimation' style={{height:'60%'}}>
                    &nbsp;
                </div>
                <div className='mb-1 d-flex'>
                <div className='w-25 mb-1'>
                    &nbsp;
                </div>
                <div className='skeletonAnimation w-75 mb-1'>
                    &nbsp;
                </div>
                </div>
                <div className='skeletonAnimation mb-1'>
                    &nbsp;
                </div>
                <div className='skeletonAnimation mb-1'>
                    &nbsp;
                </div>
                <div className='skeletonAnimation mb-1'>
                    &nbsp;
                </div>

            </div>
        </Col>
    )
}
