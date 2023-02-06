import { Card, CardBody, Heading, Link } from '@chakra-ui/react'
import Image from 'next/image'
import gmail from '../public/Gmail.png'
import { FaGithub } from 'react-icons/fa'

function Bookmark({ name, link, img }) {
    return (
        <a href={link}>
        <Card margin={'20px'}>
                <CardBody justify={'center'} align={'center'}>
                    <Image src={gmail} width={200} height={200} />
                    <FaGithub/>
            <Heading fontFamily={'Abel'}>{name}</Heading>
        </CardBody>
            </Card>
            </a>
    );
}

export default Bookmark;