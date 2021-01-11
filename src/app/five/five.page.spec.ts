import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FivePage } from './five.page';

describe('FivePage', () => {
  let component: FivePage;
  let fixture: ComponentFixture<FivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
