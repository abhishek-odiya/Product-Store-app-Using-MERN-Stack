import { Flex, Text, Center } from "@chakra-ui/react";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <Flex color='white' height='60px' >
            <Center w='100%' className={styles.foot} bg='green.500'>
                <Text>Copyright © 2024 by Abhishek Odiya | All rights Reserved</Text>
            </Center>
        </Flex >
    );
}

export default Footer;