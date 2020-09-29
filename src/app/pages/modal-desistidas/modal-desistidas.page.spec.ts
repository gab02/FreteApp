import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalDesistidasPage } from './modal-desistidas.page';

describe('ModalDesistidasPage', () => {
  let component: ModalDesistidasPage;
  let fixture: ComponentFixture<ModalDesistidasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDesistidasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalDesistidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
