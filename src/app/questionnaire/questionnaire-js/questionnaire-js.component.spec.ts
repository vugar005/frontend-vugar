import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireJsComponent } from './questionnaire-js.component';

describe('QuestionnaireJsComponent', () => {
  let component: QuestionnaireJsComponent;
  let fixture: ComponentFixture<QuestionnaireJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
