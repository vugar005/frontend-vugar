import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireExperienceComponent } from './questionnaire-experience.component';

describe('QuestionnaireExperienceComponent', () => {
  let component: QuestionnaireExperienceComponent;
  let fixture: ComponentFixture<QuestionnaireExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
