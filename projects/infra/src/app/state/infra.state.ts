export class ForgeInfrastructureState {
  public AppSeed?: InfrastructureApplicationSeedState;

  public DevOps?: DevOpsState;

  public Environment?: any;

  public EnvSettings?: any;

  public Error?: string;

  public GitHub?: GitHubState;

  public InfrastructureConfigured?: boolean;

  public InfraTemplate?: InfrastructureTemplateState;

  public Loading?: boolean;

  public ProductionConfigured?: boolean;

  public SetupStep?: ForgeInfrastructureSetupStepTypes;

  public SourceControlConfigured?: boolean;
}

export class DevOpsState {
  public Configured?: boolean;

  public Setup?: boolean;
}

export class GitHubState {
  public Organizations?: any; //{ Login: string }[];

  public OrgRepos?: any; //{ Name: string, Owner: { Login: string }}[];

  public SelectedOrg?: string;
}

export class InfrastructureTemplateState {
  public Options?: string[];

  public SelectedTemplate?: string;
}

export class InfrastructureApplicationSeedOption {
  public Description?: string;

  public ImageSource?: string;

  public Lookup?: string;

  public Name?: string;
}

export class InfrastructureApplicationSeedState {
  public Created?: boolean;

  public NewName?: string;

  public Options?: InfrastructureApplicationSeedOption[];

  public SelectedSeed?: string;
}

export enum ForgeInfrastructureSetupStepTypes {
  Azure = 'Azure',
  AWS = 'AWS',
  Custom = 'Custom'
}
