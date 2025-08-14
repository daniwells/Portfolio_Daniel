import {
    Body,
    Container,
    Head,
    Html,
    Preview,
    Tailwind,
    Text,
} from "@react-email/components"

function PurchaseReceiptEmail({ message }: { message: string }) {
    return <Html>
        <Preview>New Contact Message</Preview>
        <Tailwind>
            <Head/>
            <Body className="font-sans bg-white" >
                <Container className="max-w-xl">
                    <Text>{message}</Text>
                </Container>
            </Body>
        </Tailwind>
    </Html>;
}

export default PurchaseReceiptEmail;