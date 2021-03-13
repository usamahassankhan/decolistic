import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiPlus } from 'react-icons/bi';
import './Help.css';
const Help = () => {
    return (
        <div className='helpmain'>
            <div className='helphead'>
                <p>CUSTOMER SERVICE</p>
                <h1>FREQUENTLY ASKED QUESTIONS</h1>
                <p>international shipping FAQ</p>
            </div>
            <Accordion defaultActiveKey='0'>
                <Card className='dasa'>
                    <Accordion.Toggle as={Card.Header} eventKey='0'>
                        <div className='iconandname'>
                            <p> Can my cb2 ordered be delivered on time </p>
                            <BiPlus />
                        </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey='0'>
                        <Card.Body>
                            Yes. Through our partnership with Borderfree, we are pleased to provide
                            an enhanced international shopping experience for customers in over 90
                            countries, with support for many more coming soon. International
                            shoppers now get the benefit of seeing Decolistic product prices in
                            their local currency, guaranteed order totals, cost-effective
                            international shipping and much more. For a list of available shipping
                            countries and shopping currencies, please visit
                            https://www.cb2.com/customer-service/international-orders
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className='dasa'>
                    <Accordion.Toggle as={Card.Header} eventKey='1'>
                        <div className='iconandname'>
                            <p>What is borderfree</p>
                            <BiPlus />
                        </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey='1'>
                        <Card.Body>
                            Borderfree is a groundbreaking global ecommerce solution that allows us
                            to present our international shoppers with CB2 product prices in the
                            currency of your choice, aggressive international shipping costs and the
                            lowest possible guaranteed order total. The Borderfree solution allows
                            us to serve the best possible shopping experience to our international
                            customers, so that you can buy from us with confidence.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className='dasa'>
                    <Accordion.Toggle as={Card.Header} eventKey='2'>
                        <div className='iconandname'>
                            <p>How will i know how much my order will cost?</p>
                            <BiPlus />
                        </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey='2'>
                        <Card.Body>
                            Just add CB2 items to your Cart and click on the Checkout button.
                            Borderfree will calculate and display a guaranteed order total in your
                            preferred currency, including all shipping costs from our warehouse(s)
                            in the U.S. to your selected international destination, and any
                            applicable duties and taxes imposed by the customs and revenue
                            authorities in the destination country.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className='dasa'>
                    <Accordion.Toggle as={Card.Header} eventKey='3'>
                        <div className='iconandname'>
                            <p>
                                Are there any additional costs that will be due upon receipt of my
                                order?
                            </p>
                            <BiPlus />
                        </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey='3'>
                        <Card.Body>
                            No. When you use the Borderfree global checkout, you will be provided
                            with a guaranteed order total in your preferred currency. The order
                            total presented will be the exact amount that you will be billed by
                            Borderfree. There will never be any additional costs billed upon
                            delivery or due as C.O.D. charges.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className='dasa'>
                    <Accordion.Toggle as={Card.Header} eventKey='4'>
                        <div className='iconandname'>
                            <p>what currencies does borderfree support</p>
                            <BiPlus />
                        </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey='4'>
                        <Card.Body>
                            Currently, Borderfree supports billing in over 40 global currencies,
                            with more being added on an ongoing basis. Click here to view and select
                            from a list of our supported currencies. Once you confirm your
                            preferences, you will be able to see CB2 products priced in your
                            selected currency.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className='dasa'>
                    <Accordion.Toggle as={Card.Header} eventKey='5'>
                        <div className='iconandname'>
                            <p>
                                i live in us can i use borderfree to ship an order internationaly
                                but pay in us dolar?
                            </p>
                            <BiPlus />
                        </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey='5'>
                        <Card.Body>
                            Yes, Borderfree supports international gift-giving, in that you can
                            receive a guaranteed order total for a Decolistic order that is shipping
                            internationally, but pay in USD using a U.S. credit card. This also
                            works if you’re an American traveling or living abroad.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className='dasa'>
                    <Accordion.Toggle as={Card.Header} eventKey='6'>
                        <div className='iconandname'>
                            <p>
                                i live in us can i use borderfree to ship an order internationaly
                                but pay in us dolar?
                            </p>
                            <BiPlus />
                        </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey='6'>
                        <Card.Body>
                            Yes, Borderfree supports international gift-giving, in that you can
                            receive a guaranteed order total for a CB2 order that is shipping
                            internationally, but pay in USD using a U.S. credit card. This also
                            works if you’re an American traveling or living abroad.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className='dasa'>
                    <Accordion.Toggle as={Card.Header} eventKey='7'>
                        <div className='iconandname'>
                            <p>
                                i live in us can i use borderfree to ship an order internationaly
                                but pay in us dolar?
                            </p>
                            <BiPlus />
                        </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey='7'>
                        <Card.Body>
                            Yes, Borderfree supports international gift-giving, in that you can
                            receive a guaranteed order total for a CB2 order that is shipping
                            internationally, but pay in USD using a U.S. credit card. This also
                            works if you’re an American traveling or living abroad.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className='dasa'>
                    <Accordion.Toggle as={Card.Header} eventKey='8'>
                        <div className='iconandname'>
                            <p>
                                i live in us can i use borderfree to ship an order internationaly
                                but pay in us dolar?
                            </p>
                            <BiPlus />
                        </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey='8'>
                        <Card.Body>
                            Yes, Borderfree supports international gift-giving, in that you can
                            receive a guaranteed order total for a CB2 order that is shipping
                            internationally, but pay in USD using a U.S. credit card. This also
                            works if you’re an American traveling or living abroad.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className='dasa'>
                    <Accordion.Toggle as={Card.Header} eventKey='9'>
                        <div className='iconandname'>
                            <p>
                                i live in us can i use borderfree to ship an order internationaly
                                but pay in us dolar?
                            </p>
                            <BiPlus />
                        </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey='9'>
                        <Card.Body>
                            Yes, Borderfree supports international gift-giving, in that you can
                            receive a guaranteed order total for a CB2 order that is shipping
                            internationally, but pay in USD using a U.S. credit card. This also
                            works if you’re an American traveling or living abroad.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className='dasa'>
                    <Accordion.Toggle as={Card.Header} eventKey='10'>
                        <div className='iconandname'>
                            <p>
                                i live in us can i use borderfree to ship an order internationaly
                                but pay in us dolar?
                            </p>
                            <BiPlus />
                        </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey='10'>
                        <Card.Body>
                            Yes, Borderfree supports international gift-giving, in that you can
                            receive a guaranteed order total for a CB2 order that is shipping
                            internationally, but pay in USD using a U.S. credit card. This also
                            works if you’re an American traveling or living abroad.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>{' '}
                <Card className='dasa'>
                    <Accordion.Toggle as={Card.Header} eventKey='11'>
                        <div className='iconandname'>
                            <p>
                                i live in us can i use borderfree to ship an order internationaly
                                but pay in us dolar?
                            </p>
                            <BiPlus />
                        </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey='11'>
                        <Card.Body>
                            Yes, Borderfree supports international gift-giving, in that you can
                            receive a guaranteed order total for a CB2 order that is shipping
                            internationally, but pay in USD using a U.S. credit card. This also
                            works if you’re an American traveling or living abroad.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className='dasa'>
                    <Accordion.Toggle as={Card.Header} eventKey='12'>
                        <div className='iconandname'>
                            <p>
                                i live in us can i use borderfree to ship an order internationaly
                                but pay in us dolar?
                            </p>
                            <BiPlus />
                        </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey='12'>
                        <Card.Body>
                            Yes, Borderfree supports international gift-giving, in that you can
                            receive a guaranteed order total for a CB2 order that is shipping
                            internationally, but pay in USD using a U.S. credit card. This also
                            works if you’re an American traveling or living abroad.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
};

export default Help;
