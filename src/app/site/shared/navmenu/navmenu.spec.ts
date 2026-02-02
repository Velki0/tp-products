import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Navmenu } from './navmenu';

describe('Navmenu', () => {
  let component: Navmenu;
  let fixture: ComponentFixture<Navmenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navmenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navmenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
