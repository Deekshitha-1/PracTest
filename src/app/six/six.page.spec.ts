import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SixPage } from './six.page';

describe('SixPage', () => {
  let component: SixPage;
  let fixture: ComponentFixture<SixPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
