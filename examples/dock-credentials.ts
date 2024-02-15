import { apiPost } from "@/lib/actions/api-post";
import type { CredentialPayload, Credential } from "@/types/dock";

/**
 * Creates a credential with the provided credential data and issuer.
 * Sets the credential issuer ID to the provided issuer DID.
 * Wraps the credential in an object and sends an POST request to credentials/ to store it.
 * @returns A Promise that resolves to the credential data.
 */
export async function createCredential(
  credential: CredentialPayload
): Promise<any> {
  const wrapped = { credential };

  return await apiPost({
    relativeUrl: "credentials/",
    body: credential,
  });
}

/**
 * @name verifyCredential
 * @description Verifies a credential by sending it in a POST request to /verify/.
 *
 * @param credential - The credential to verify.
 * @returns A Promise that resolves to the verification result.
 */
export async function verifyCredential({
  credential,
}: {
  credential: Credential;
}): Promise<any> {
  return await apiPost({
    relativeUrl: "verify/",
    body: credential,
  });
}
