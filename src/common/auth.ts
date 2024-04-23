import { ExtensionContext, SecretStorage } from "vscode";

export default class AuthSettings {
	private static _instance: AuthSettings

	constructor(private secretStorage: SecretStorage) {}

	static init(context: ExtensionContext): void {
		/*
		Create instance of new AuthSettings.
		*/
		AuthSettings._instance = new AuthSettings(context.secrets);
	}

	static get instance(): AuthSettings {
		/*
		Getter of our AuthSettings existing instance.
		*/
		return AuthSettings._instance;
	}

	async storeAuthData(password: string, sshHostName ?: string,): Promise<void> {
		/*
		Update values in bugout_auth secret storage.
		*/
        this.secretStorage.store(`${sshHostName}`, password);
	}

	async getAuthData(sshHostName ?: string): Promise<string | undefined> {
		/*
		Retrieve data from secret storage.
		*/
		return await this.secretStorage.get(`${sshHostName}`);
	}

	async delete(sshHostName ?: string): Promise<void> {
		/*
		Retrieve data from secret storage.
		*/
		await this.secretStorage.delete(`${sshHostName}`);
	}
}