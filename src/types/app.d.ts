interface Configuration {
  env: string;
  server: {
    databaseUrl: string;
    port: number;
  };
}

export { Configuration };
