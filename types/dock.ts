// docs: https://docs.api.dock.io/#tocS_DIDDoc

export type CreateRegistryResponse = {
  id: string;
  data: {
    id: string;
    policy: {
      type: string;
      policy: string[];
      addOnly: boolean;
    };
    type: string;
  };
};

export type JobStatus = "finalized" | "todo" | "in_progress";

export type Job = {
  id: string;
  status: JobStatus;
  result: {
    inBlock: string;
  };
};

export interface JobResult {
  id: string;
  status: JobStatus;
  result: {
    encodedTx: string;
    finishQueryData: any[];
    length: number;
    userData: string;
  };
}

/* export type Issuer = {
  name: string;
  image: string;
  did: string;
};

export type DidDock = `did:dock:${string}`;

type SubjectObject = { id: string } & Record<string, any>;

export type Credential = {
  id?: string;
  context?: Array<string | object>;
  type?: Array<string>;
  subject: SubjectObject | Array<SubjectObject>;
  schema?: string;
  issuer?: DidDock;
  issuanceDate?: string;
  expirationDate?: string;
  status?: object | string;
};
 */

export type Issuer = {
  id: string;
  name: string;
  description: string;
  logo: string;
};

export type DidDock = `did:dock:${string}`;

type SubjectObject = { id: string } & Record<string, any>;

export type Credential = {
  id: string;
  name?: string;
  description?: string;
  context?: Array<string | object>;
  type?: Array<string> | string;
  issuer?: Issuer;
  subject: SubjectObject | any;
  issuanceDate?: string;
  expirationDate?: string;
  status?: object | string;
};

type Alghorithm = "dockbbs+" | "ed25519";

// Extended type to include additional properties from testCredential
export type CredentialPayload = {
  status?: object | string;
  anchor?: boolean;
  persist?: boolean;
  password?: string;
  distribute?: boolean;
  recipientEmail?: string;
  alghorithm?: Alghorithm;
  credential: Credential;
};