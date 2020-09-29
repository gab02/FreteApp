import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalFuturasPage } from './modal-futuras.page';

describe('ModalFuturasPage', () => {
  let component: ModalFuturasPage;
  let fixture: ComponentFixture<ModalFuturasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFuturasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalFuturasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
