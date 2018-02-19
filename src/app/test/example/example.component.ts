import {Component, OnInit} from '@angular/core';
import {ExampleService} from './example.service';
import {HttpResponse} from '@angular/common/http';

@Component({
    selector: 'example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.css']
})
export class Example implements OnInit {
    item: string;
    response: HttpResponse<any>;
    done: boolean;

    /**
     * Constructor.
     * @param {ExampleService} exampleService The example service.
     */
    constructor(private exampleService: ExampleService) {
    }

    /** {@inheritDoc}. */
    ngOnInit() {
        this.response = this.get()  as HttpResponse<any>;
        this.done = true;
    }

    /** Gets the data. */
    get() {
        this.done = false;
        this.response = {} as HttpResponse<any>;
        this.exampleService.get().subscribe(response => {
            this.response = response;
            this.done = true;
        }, error => {
            this.response = error;
            this.done = true;
        });
    }

    /** Gets the binary data. */
    binary() {
        this.done = false;
        this.response = {} as HttpResponse<any>;
        this.exampleService.binary().subscribe(response => {
            const url = window.URL.createObjectURL(response.body);
            const a = document.createElement('a');
            a.setAttribute('style', 'display:none;');
            document.body.appendChild(a);

            a.href = url;
            a.download = response.headers.get('filename');
            a.click();
            this.done = true;
        }, error => {
            this.response = error;
            this.done = true;
        });
    }

    /** Gets the data with jsonp. */
    getAsJsonp() {
        this.done = false;
        this.response = {} as HttpResponse<any>;
        this.exampleService.getAsJsonp().subscribe((data) => {
            this.response = {
                body: data,
                status: 200
            } as HttpResponse<any>;
            this.done = true;
        }, error => {
            this.response = error;
            this.done = true;
        });
    }

    /** Posts the data. */
    post() {
        this.done = false;
        this.response = {} as HttpResponse<any>;
        this.exampleService.post({ item: this.item }).subscribe((response) => {
            this.response = response;
            this.done = true;
        }, error => {
            this.response = error;
            this.done = true;
        });
    }
}
