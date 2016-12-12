let providers: any[] = [
  { provide: 'environment', useValue: 'Development' },
  { provide: 'version', useValue: '0.1.0' },
  { provide: 'baseUrl', useValue: 'http://localhost:3001/' }
];

export const ENV_PROVIDERS = providers;
export const IsProduction = false;
