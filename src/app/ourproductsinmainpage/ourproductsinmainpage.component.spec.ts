import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurproductsinmainpageComponent } from './ourproductsinmainpage.component';

describe('OurproductsinmainpageComponent', () => {
  let component: OurproductsinmainpageComponent;
  let fixture: ComponentFixture<OurproductsinmainpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurproductsinmainpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurproductsinmainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
