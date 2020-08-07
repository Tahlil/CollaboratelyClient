import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateMachinePage } from './update-machine.page';

describe('UpdateMachinePage', () => {
  let component: UpdateMachinePage;
  let fixture: ComponentFixture<UpdateMachinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMachinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateMachinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
