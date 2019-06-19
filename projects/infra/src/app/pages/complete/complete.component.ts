import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  ForgeInfrastructureState,
  ForgeInfrastructureSetupStepTypes,
  ForgeInfrastructureApplicationSeedStepTypes
} from '../../state/infra.state';
import { ForgeInfrastructureStateManagerContext } from '../../state/infra-state-manager.context';
import { MatSelectChange, MatStepper } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { InfrastructureApplicationSeedOption } from '../../state/infra.state';

@Component({
  selector: 'lcu-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss'],
  animations: []
})
export class CompleteComponent implements OnInit {
  //  Fields

  //  Properties
  public AppSeedStepTypes = ForgeInfrastructureApplicationSeedStepTypes;

  public get GitHubOrg(): string {
    return this.State.EnvSettings ? this.State.EnvSettings['GitHubOrganization'] : '';
  }

  public get GitHubRepo(): string {
    return this.State.EnvSettings ? this.State.EnvSettings['GitHubRepository'] : '';
  }

  public State: ForgeInfrastructureState;

  //  Constructors
  constructor(protected infraState: ForgeInfrastructureStateManagerContext, protected sanitizer: DomSanitizer) {
    this.State = {};
  }

  //  Life Cycle
  public ngOnInit() {
    this.infraState.Context.subscribe(state => {
      this.State = state;

      this.stateChanged();

      // For Debug
      console.log(this.State);
    });
  }

  //  API methods

  //  Helpers
  protected stateChanged() {}
}
