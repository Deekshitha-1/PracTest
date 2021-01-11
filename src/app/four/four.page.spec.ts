import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FourPage } from './four.page';

describe('FourPage', () => {
  let component: FourPage;
  let fixture: ComponentFixture<FourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
