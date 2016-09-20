/* tslint:disable:no-unused-variable */

import { beforeEachProviders, addProviders, async, inject, describe, beforeEach, it, expect } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BrewdayService } from './brewday.service';
import { Brewday } from './brewday.model';
import {provide} from '@angular/core';
import { Http, Response, ResponseOptions, Headers, XHRBackend } from '@angular/http';

import { HTTP_PROVIDERS } from '@angular/http';

describe('Brewday Service Test', () => {
  beforeEachProviders(() => {
    return [BrewdayService,
            HTTP_PROVIDERS,
            provide(XHRBackend, {useClass: MockBackend})];
  });

  it('#getAllBrewdays', inject([XHRBackend, BrewdayService], (mockBackend, service) => {
    let bds: Brewday[];
    let err;

    mockBackend.connections.subscribe(
      (connection: MockConnection) => {
        connection.mockRespond(new Response(
          new ResponseOptions({
              body: {
                data: [
                {
                  __v: 0,
                  date: "25.09.2016",
                  _id: "57d6dc6dcbd64d286022bcc0"
                }]
              }
            }
          )));
      });

    service.getAllBrewdays()
        .subscribe(
            brewdays => bds = brewdays,
            error => err = error);

    expect(bds.length).toEqual(1);
    expect(bds[0]._id).toEqual("57d6dc6dcbd64d286022bcc0");
  }));
});
