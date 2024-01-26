import {ChangeDetectionStrategy, Component, OnInit, signal, WritableSignal,} from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {TransferringCategoryService} from "../../../shared/service/transferring-category.service";
import {BehaviorSubject} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Category, Cols} from "../../../shared/interfaces";
import {CATEGORY_COLS} from "../../const/const";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: [TransferringCategoryService, MessageService, ConfirmationService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesComponent implements OnInit {

  private submitted: WritableSignal<boolean> = signal(false);

  public categoryDialog: boolean = false;

  public categories: Category[] = JSON.parse(localStorage.getItem(localStorage.getItem('авторизован') ?? '') ?? '').categories;

  public categoryForm: FormGroup = this.formBuilder.group<Category>({
      description: "",
      id: "",
      name: ""
    }
  );

  public category: Category = this.categoryForm.value;

  public cols: Cols[] = CATEGORY_COLS;

  ngOnInit() {
    this.transService.categories$.subscribe((categories) => {
      this.categories = JSON.parse(localStorage.getItem(localStorage.getItem('авторизован') ?? '') ?? '').categories;
    });
  };

  constructor(public messageService: MessageService,
              public confirmationService: ConfirmationService,
              private transService: TransferringCategoryService,
              private formBuilder: FormBuilder,) {
  }


  public hideDialog() {
    this.categoryDialog = false;
    this.submitted.set(false);
  };

  public OpenNew() {
    this.categoryForm.reset()
    this.category = this.categoryForm.value;
    this.submitted.set(false);
    this.categoryDialog = true;
  }

  public saveCategory() {
    this.submitted.set(true);
    this.category = this.categoryForm.value
    if (this.category.name.trim()) {
      if (this.category.id) {
        this.categories[this.findIndexById(this.category.id)] = this.category;
      } else {
        this.category.id = this.createId();
        this.categories.push(this.category);
      }
      this.transService.updateUserCategories(this.categories)
      this.categories = [...this.categories];
      this.categoryDialog = false;
    }
    this.categories = [...this.categoryForm.value];
    this.categoryDialog = false;
    this.category = this.categoryForm.value;
  }

  public editCategory(category: Category) {
    this.categoryForm.setValue({
      name: category.name,
      description: category.description,
      id: category.id,
    })
    this.category = {...category};
    this.categoryDialog = true;
  }

  public deleteCategory(category: Category) {
    this.confirmationService.confirm({
      message: 'Вы правда хотите удалить категорию ' + category.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.categories = this.categories.filter((val: { id: string; }) => val.id !== category.id);
        this.transService.updateUserCategories(this.categories);
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Product Category', life: 3000});
      }

    });
  }

  private findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }

  private createId(): string {
    let id = '';
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
}
