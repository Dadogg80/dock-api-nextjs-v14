import { CredentialPayload } from "@/types/dock";
import { v4 as uuidv4 } from "uuid";

const receiverDID = process.env.NEXT_PUBLIC_RECEIVER_DID as string;
const issuerDID = process.env.NEXT_PUBLIC_ISSUER_DID as string;


export const testCredential: CredentialPayload = {
    anchor: true,
    persist: true,
    password: "1234",
    distribute: true,
    recipientEmail: "myemail@dock.io",
    alghorithm: "ed25519",
    credential: {
        id: `https://creds-testnet.dock.io/${uuidv4()}`,
        name: "Simple Test Schema",
        description: "This Schema is used for test purposes.",
        type: [
            "VerifiableCredential",
            "SimpleTestSchema"
        ],
        issuer: {
            name: "TEST_ISSUER",
            description: "This Issuer is used in test applications, does not belong to any ecosystem",
            logo: "https://img.dock.io/75a52d4ddc584eaa733067c2844c5e23",
            id: issuerDID as string,
        },
        subject: {
            id: receiverDID as string,
            some_attribute: "Some Attribute"
        },
        issuanceDate: new Date().toISOString() as string,
        expirationDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString() as string,
        status: "",
    },
};