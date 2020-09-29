import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalTransitoPage } from './modal-transito.page';

describe('ModalTransitoPage', () => {
  let component: ModalTransitoPage;
  let fixture: ComponentFixture<ModalTransitoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTransitoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalTransitoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
