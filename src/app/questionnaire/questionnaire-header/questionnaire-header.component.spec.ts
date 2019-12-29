import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireHeaderComponent } from './questionnaire-header.component';

describe('QuestionnaireHeaderComponent', () => {
  let component: QuestionnaireHeaderComponent;
  let fixture: ComponentFixture<QuestionnaireHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
