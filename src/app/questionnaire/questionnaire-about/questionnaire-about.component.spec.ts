import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireAboutComponent } from './questionnaire-about.component';

describe('QuestionnaireAboutComponent', () => {
  let component: QuestionnaireAboutComponent;
  let fixture: ComponentFixture<QuestionnaireAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
