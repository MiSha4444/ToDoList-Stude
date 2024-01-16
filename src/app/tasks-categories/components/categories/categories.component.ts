import {ChangeDetectionStrategy, Component, OnInit,} from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {TransferringCategoryService} from "../../../shared/service/transferring-category.service";
import {BehaviorSubject} from "rxjs";
import {FormBuilder} from "@angular/forms";
import {Category} from "../../../shared/interfaces";
import {CATEGORY_COLS} from "../../const/const";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: [TransferringCategoryService, MessageService, ConfirmationService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesComponent {

  public $submitted: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public categoryDialog: boolean = false;

  public category: any;

  public categories: any = JSON.parse(localStorage.getItem(localStorage.getItem('авторизован') ?? '') ?? '').categories;

  public categoryForm: any = this.formBuilder.group<Category>({description: "", id: "", name: ""});

  public cols: any[] = CATEGORY_COLS;

  constructor(public messageService: MessageService,
              public confirmationService: ConfirmationService,
              private transService: TransferringCategoryService,
              private formBuilder: FormBuilder,) {
  }


  hideDialog() {
    this.categoryDialog = false;
    this.$submitted.next(false);
  }

  OpenNew() {
    this.categoryForm.reset()
    this.category = {};
    this.$submitted.next(false);
    this.categoryDialog = true;
  }

  saveCategory() {
    this.$submitted.next(true);
    this.category = this.categoryForm.value
    if (this.category.name.trim()) {
      if (this.category.id) {
        this.categories[this.findIndexById(this.category.id)] = this.category;
      } else {
        this.category.id = this.createId();
        this.categories.push(this.category);
      }
      this.transService.getUserCategory(this.categories)
      this.categories = [...this.categories];
      this.categoryDialog = false;
    }
    this.categories = [...this.category];
    this.categoryDialog = false;
    this.category = {};
  }

  editCategory(category: Category) {
    this.categoryForm.setValue({
      name: category.name,
      description: category.description,
      id: category.id,
    })
    this.category = {...category};
    this.categoryDialog = true;
  }

  deleteCategory(category: Category) {
    this.confirmationService.confirm({
      message: 'Вы правда хотите удалить категорию ' + this.category.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.categories = this.categories.filter((val: { id: string; }) => val.id !== category.id);
        this.transService.getUserCategory(this.categories);
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Product Category', life: 3000});
      }

    });
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }

  createId(): string {
    let id = '';
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
}
