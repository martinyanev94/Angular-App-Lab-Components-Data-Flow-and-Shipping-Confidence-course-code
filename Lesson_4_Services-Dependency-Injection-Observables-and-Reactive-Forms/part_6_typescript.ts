import { FormGroup, FormBuilder, Validators } from '@angular/forms';



constructor(

  private catalog: CatalogBenchCatalogService,

  private formBuilder: FormBuilder

) {

  this.titleForm = this.formBuilder.group({

    title_id: ['', [Validators.required, Validators.pattern('[0-9]{1,4}')]],

    title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(120)]],

    category_name: ['', Validators.required],

    release_year: ['', Validators.pattern('[0-9]{4}')],

    status: ['', Validators.required]

  });

}
