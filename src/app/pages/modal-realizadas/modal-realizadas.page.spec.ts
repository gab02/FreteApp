import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalRealizadasPage } from './modal-realizadas.page';

describe('ModalRealizadasPage', () => {
  let component: ModalRealizadasPage;
  let fixture: ComponentFixture<ModalRealizadasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRealizadasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalRealizadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
