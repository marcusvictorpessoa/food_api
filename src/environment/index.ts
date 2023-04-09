
interface IEnvironment {
    PORT: string;
    DB_PATH: string;
    SECRET: string;
    TOKEN_EXPIRATION: string;
}

export let env: IEnvironment = {
    PORT: '',
    DB_PATH: '',
    SECRET: '',
    TOKEN_EXPIRATION: ''
};

function initializeEnvVars(port: string, db_path: string, secret: string, token_expiration: string) {

    env = {
        PORT: port,
        DB_PATH: db_path,
        SECRET: secret,
        TOKEN_EXPIRATION: token_expiration
    };

    return env;
}

export default initializeEnvVars;