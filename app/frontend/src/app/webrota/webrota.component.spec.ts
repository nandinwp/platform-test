import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebrotaComponent } from './webrota.component';

describe('WebrotaComponent', () => {
  let component: WebrotaComponent;
  let fixture: ComponentFixture<WebrotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebrotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebrotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
