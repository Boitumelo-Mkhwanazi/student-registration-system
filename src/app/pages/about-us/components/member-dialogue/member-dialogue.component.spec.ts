import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDialogueComponent } from './member-dialogue.component';

describe('MemberDialogueComponent', () => {
  let component: MemberDialogueComponent;
  let fixture: ComponentFixture<MemberDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberDialogueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
