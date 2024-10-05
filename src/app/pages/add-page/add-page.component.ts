import {Component} from "@angular/core";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent {
  productForm: FormGroup;
  errors: string[] = [];

  constructor(private formBuilder: FormBuilder,
              private router: Router) {
    this.productForm = this.formBuilder.group({
      products: this.formBuilder.array([])
    });
  }

  get products(): FormArray {
    return this.productForm.get('products') as FormArray;
  }

  private newItem(): FormGroup<{
    name: FormControl<null>,
    count: FormControl<null>,
    price: FormControl<null>
  }> {
    return this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      count: [null, [Validators.required, Validators.min(1), Validators.max(100), Validators.pattern('^[0-9]*$')]],
      price: [null, [Validators.required, Validators.min(1), Validators.max(1000000), Validators.pattern('^[0-9]*$')]]
    });
  }

  addItem(): void {
    this.products.push(this.newItem());
  }

  removeItem(index: number): void {
    this.products.removeAt(index);
  }

  onSubmit(): void {
    this.errors = [];
    if (this.products.length === 0) {
      this.errors.push('Please add items');
    }

    if (this.products.invalid) {
      this.errors.push('Please correct the errors in the form');
    }

    if (this.errors.length > 0) {
      return;
    }

    const products = this.productForm.value.products;
    this.router.navigate(['/preview'], {state: {products}});
  }
}
