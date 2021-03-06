import React from 'react'
import { Box, Button, RadioButtonGroup, Heading } from 'grommet'
import Card from './Card';
import Swish from './Swish';
import Klarna from './Klarna';


export default function PaymentForm() {
    const [value, setValue] = React.useState('Klarna');
    let post;

    if (value == 'Card') {
        post = <Card />
    }
    if (value == 'Swish') {
        post = <Swish />
    }
    if (value == 'Klarna') {
        post = <Klarna />
    }
    return (
        <>
            <Box align="center" border={{ color: 'light-5', size: 'small' }} margin={{ top: "medium" }} pad={{ bottom: "medium" }}>
                <Heading level={2} alignSelf="center" margin={{ top: "xsmall" }} >Payment Method</Heading>
                <RadioButtonGroup
                    name="doc"
                    options={['Swish', 'Card', 'Klarna']}
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />
                {post}
            </Box>
            <Box direction="row" justify="between" margin={{ top: "medium" }}>
                <Button type="reset" label="Reset" />
                {/* <ModalCheckout /> */}
            </Box>
           
        </>
    )
}