import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PagesecondPage } from './pagesecond.page';

describe('PagesecondPage', () => {
  let component: PagesecondPage;
  let fixture: ComponentFixture<PagesecondPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesecondPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PagesecondPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
