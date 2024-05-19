import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveClientComponent } from './inactive-client.component';

describe('InactiveClientComponent', () => {
  let component: InactiveClientComponent;
  let fixture: ComponentFixture<InactiveClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InactiveClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InactiveClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
