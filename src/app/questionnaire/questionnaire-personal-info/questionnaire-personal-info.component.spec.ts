import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnairePersonalInfoComponent } from './questionnaire-personal-info.component';

describe('QuestionnairePersonalInfoComponent', () => {
  let component: QuestionnairePersonalInfoComponent;
  let fixture: ComponentFixture<QuestionnairePersonalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnairePersonalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnairePersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
