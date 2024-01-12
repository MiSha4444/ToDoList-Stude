import {ChangeDetectionStrategy, Component, OnInit,} from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {TransferringCategoryService} from "../../../shared/service/transferring-category.service";
import {BehaviorSubject} from "rxjs";
import {FormBuilder} from "@angular/forms";

export interface category {
  name: string
  id: string
  description?: string
}

@Component({
  selector: 'app-adding-deleting-categories',
  templateUrl: './adding-deleting-categories.component.html',
  styleUrls: ['./adding-deleting-categories.component.scss'],
  providers: [TransferringCategoryService, MessageService, ConfirmationService,],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddingDeletingCategoriesComponent implements OnInit {

  public $submitted: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  public categoryDialog: boolean = false;

  public category: any;

  public categories: any;

  cols: any[] = [
    {field: 'name', header: 'Название категории',},
    {field: 'description', header: 'Описание категории',},
  ]
  public categoryForm: any

  constructor(public messageService: MessageService,
              public confirmationService: ConfirmationService,
              private transServise: TransferringCategoryService,
              private formBuilder: FormBuilder,) {
  }

  ngOnInit() {
    this.categories = JSON.parse(localStorage.getItem(localStorage.getItem('авторизован') ?? '') ?? '').categories
    this.categoryForm = this.formBuilder.group<category>({description: "", id: "", name: ""})
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
      this.transServise.getUserCategory(this.categories)
      this.categories = [...this.categories];
      this.categoryDialog = false;
    }
    this.categories = [...this.category];
    this.categoryDialog = false;
    this.category = {};
  }

  editCategory(category: category) {
    this.categoryForm.setValue({
      name: category.name,
      description: category.description,
      id: category.id,
    })
    this.category = {...category};
    this.categoryDialog = true;
  }

  deleteCategory(category: category) {
    this.confirmationService.confirm({
      message: 'Вы правда хотите удалить категорию ' + this.category.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.categories = this.categories.filter((val: { id: string; }) => val.id !== category.id);
        this.transServise.getUserCategory(this.categories);
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
