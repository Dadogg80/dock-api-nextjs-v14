import { apiPost } from "@/lib/actions/api-post";
import type { Credential } from "@/types/dock";

/**
 * Creates a new registry by calling the Registries API endpoint.
 *
 * @param policyDid - The DID of the policy to associate with the registry.
 * @returns A promise that resolves to the API response if successful, or rejects with an error.
 */
export async function createRegistry(policyDid: string) {
  const data = {
    addOnly: false,
    policy: [policyDid],
  };

  try {
    const response: any = await apiPost({
      relativeUrl: "registries",
      body: data,
    });

    console.log("Create Registries APIPOST response: ", response);

    return response;
  } catch (error) {
    console.error(error);
  }

  return undefined;
}

/**
 * @name revoke
 * @description Revokes a credential from the registry with the given ID.
 *
 * @param registryId - The ID of the registry to revoke from.
 * @param credential - The credential object containing the ID to revoke.
 */
export async function revoke(registryId: string, credential: Credential) {
  console.log("revoke:start:", { registryId, credential });

  const url = `registries/${registryId}`;

  const data = {
    action: "revoke",
    credentialIds: [credential.id],
  };
  try {
    const response = await apiPost({
      relativeUrl: url,
      body: data,
    });

    console.log("REVOKE APIPOST response: ", response);

    return response;
  } catch (error) {
    console.error("revoke:error", error);
  }

  return undefined;
}

/**
 * @name unrevoke
 * @description Unrevokes a previously revoked credential from the registry with the given ID.
 *
 * @param registryId - The ID of the registry to unrevoke from.
 * @param credential - The credential object containing the ID to unrevoke.
 */
export async function unrevoke(registryId: string, credential: Credential) {
  console.log("unrevoke:start:", { registryId, credential });

  const url = `registries/${registryId}`;

  const data = {
    action: "unrevoke",
    credentialIds: [credential.id],
  };
  try {
    const response = await apiPost({
      relativeUrl: url,
      body: data,
    });

    console.log("UNREVOKE Credential response: ", response);

    return response;
  } catch (error) {
    console.error("unvoke:error", error);
  }

  return undefined;
}
