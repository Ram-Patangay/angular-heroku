import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingdataComponent } from './settingdata.component';

describe('SettingdataComponent', () => {
  let component: SettingdataComponent;
  let fixture: ComponentFixture<SettingdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
