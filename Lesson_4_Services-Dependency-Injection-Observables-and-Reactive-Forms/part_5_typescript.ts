import { FormGroup, FormBuilder } from '@angular/forms';



export class ManageTitleComponent {

  private titles: CatalogTitle[] = [];

  private titleForm: FormGroup;



  constructor(

    private catalog: CatalogBenchCatalogService,

    private formBuilder: FormBuilder

  ) {

    this.titleForm = this.formBuilder.group({

      title_id: '',

      title: '',

      category_name: '',

      release_year: '',

      status: ''

    });

  }

}
