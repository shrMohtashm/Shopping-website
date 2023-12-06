import React from 'react'
import { Col, CardImg, CardBody, CardTitle, CardSubtitle, CardFooter, Card, CardText } from 'reactstrap'

export default function ProductSkeleton() {
    const skeletonStyles = {
        width: '95%',
        height: '200px',
        backgroundColor: '#35363A',
        marginBottom: '5px',
    }
    return (
        <Col lg='3' md='6' sm='12' xs='12' >
            <div style={skeletonStyles} className='border-none'>
                <Card className='p-3 '>
                    <CardBody>
                    </CardBody>
                    <CardFooter>
                        <div className='d-flex justify-content-between'>
                            <span></span>
                        </div>
                    </CardFooter>
                </Card>
            </div>

        </Col>
    )
}
